'use client';

import { useEffect, useState } from 'react';
import { STEAM_MEMBERS, FREE_TO_PLAY_APPIDS } from './config';

type SteamGame = {
  appid: number;
  name: string;
  iconUrl: string | null;
  playtime: number;
};

type MemberResult = {
  id: string;
  name: string;
  games: SteamGame[];
  error?: string;
};

export default function SteamClient() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MemberResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'unique' | 'shared' | 'f2p'>('all');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/steam');
        const json = await res.json();
        if (json.members) {
          setData(json.members);
        }
      } catch (err) {
        console.error('Error fetching steam data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 space-y-4">
        <div className="inline-block w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-neutral-400 font-semibold">Syncing with Steam Web API...</p>
      </div>
    );
  }

  // Map of unshared games per member
  const unsharedMap: Record<string, Set<number>> = {};
  STEAM_MEMBERS.forEach((m) => {
    unsharedMap[m.id] = new Set(m.unsharedAppIds || []);
  });

  // Calculate global game ownership across family
  const gameOwnership: Record<
    number,
    { name: string; iconUrl: string | null; owners: string[]; isF2P: boolean }
  > = {};

  data.forEach((member) => {
    member.games.forEach((game) => {
      if (!gameOwnership[game.appid]) {
        gameOwnership[game.appid] = {
          name: game.name,
          iconUrl: game.iconUrl,
          owners: [],
          isF2P: FREE_TO_PLAY_APPIDS.has(game.appid),
        };
      }
      gameOwnership[game.appid].owners.push(member.id);
    });
  });

  const totalUniqueFamilyGames = Object.keys(gameOwnership).length;

  // Calculate per-member breakdown
  const memberStats = data.map((member) => {
    const totalOwned = member.games.length;
    let uniqueCount = 0;
    let unsharedCount = 0;
    let f2pCount = 0;

    const memberUnsharedSet = unsharedMap[member.id] || new Set();

    member.games.forEach((game) => {
      const info = gameOwnership[game.appid];
      const isUnshared = memberUnsharedSet.has(game.appid);

      if (isUnshared) {
        unsharedCount++;
      } else if (info.isF2P) {
        f2pCount++;
      } else if (info.owners.length === 1) {
        uniqueCount++;
      }
    });

    const sharePercent = totalUniqueFamilyGames > 0
      ? ((uniqueCount / totalUniqueFamilyGames) * 100).toFixed(1)
      : '0';

    return {
      id: member.id,
      name: member.name,
      totalOwned,
      uniqueCount,
      unsharedCount,
      f2pCount,
      sharePercent,
    };
  });

  // Filter game list
  const allGameList = Object.entries(gameOwnership).map(([appidStr, info]) => ({
    appid: Number(appidStr),
    ...info,
  }));

  const filteredGames = allGameList.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    if (filterType === 'unique') return game.owners.length === 1 && !game.isF2P;
    if (filterType === 'shared') return game.owners.length > 1;
    if (filterType === 'f2p') return game.isF2P;

    return true;
  });

  return (
    <div className="space-y-10">
      {/* Overview Scorecards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {memberStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 space-y-3 shadow-lg"
          >
            <div className="flex justify-between items-center border-b border-neutral-700 pb-2">
              <h2 className="font-bold text-yellow-300 text-lg">{stat.name}</h2>
              <span className="text-xs font-bold text-neutral-400 bg-neutral-900 px-2 py-1 rounded">
                {stat.totalOwned} games
              </span>
            </div>

            <div className="text-xs space-y-1.5 text-neutral-300">
              <div className="flex justify-between">
                <span>Unique Contributed:</span>
                <span className="font-bold text-green-400">{stat.uniqueCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Family Share %:</span>
                <span className="font-bold text-yellow-400">{stat.sharePercent}%</span>
              </div>
              <div className="flex justify-between">
                <span>Free to Play:</span>
                <span className="text-neutral-400">{stat.f2pCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Unshared / Locked:</span>
                <span className="text-neutral-400">{stat.unsharedCount}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Game Explorer Controls */}
      <section className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-neutral-900 border border-neutral-700 text-neutral-200 text-sm rounded-lg px-3 py-2 outline-none focus:border-yellow-400 w-full sm:w-64"
        />

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {(['all', 'unique', 'shared', 'f2p'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition capitalize ${
                filterType === type
                  ? 'bg-yellow-400 text-neutral-950'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Game List Display */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredGames.slice(0, 100).map((game) => (
          <div
            key={game.appid}
            className="bg-neutral-800 border border-neutral-700 rounded-lg p-3 flex items-center gap-3 shadow"
          >
            {game.iconUrl ? (
              <img
                src={game.iconUrl}
                alt={game.name}
                className="w-8 h-8 rounded object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-8 h-8 bg-neutral-700 rounded flex-shrink-0" />
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-neutral-200 truncate">{game.name}</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] text-neutral-400">Owners:</span>
                <span className="text-[10px] font-semibold text-yellow-300 truncate">
                  {game.owners.join(', ')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}