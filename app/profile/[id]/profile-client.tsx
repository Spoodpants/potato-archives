'use client';

import { PROFILES_DATA } from '../data';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function getAgeAndZodiac(birthdateStr: string) {
  if (!birthdateStr) return { age: 'N/A', zodiac: 'Unknown' };
  const birthDate = new Date(birthdateStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;

  let zodiac = 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) zodiac = 'Aquarius ♒';
  else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) zodiac = 'Pisces ♓';
  else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) zodiac = 'Aries ♈';
  else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) zodiac = 'Taurus ♉';
  else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiac = 'Gemini ♊';
  else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiac = 'Cancer ♋';
  else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiac = 'Leo ♌';
  else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiac = 'Virgo ♍';
  else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) zodiac = 'Libra ♎';
  else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) zodiac = 'Scorpio ♏';
  else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) zodiac = 'Sagittarius ♐';

  return { age: `${age} years old`, zodiac };
}

export default function ProfileClient({ memberId }: { memberId: string }) {
  const router = useRouter();
  const profile = PROFILES_DATA[memberId];
  const { age, zodiac } = getAgeAndZodiac(profile?.birthdate || '');

  // Lanyard live status state
  const [lanyardData, setLanyardData] = useState<any>(null);

  useEffect(() => {
    if (profile?.discordUserId && !profile.discordUserId.includes('YOUR_DISCORD')) {
      fetch(`https://api.lanyard.rest/v1/users/${profile.discordUserId}`)
        .then((res) => res.json())
        .then((json) => {
          if (json.success) setLanyardData(json.data);
        })
        .catch(() => {});
    }
  }, [profile]);

  if (!profile) return null;

  const discordStatus = lanyardData?.discord_status || 'offline';
  const statusColor =
    discordStatus === 'online'
      ? 'bg-green-500'
      : discordStatus === 'idle'
      ? 'bg-yellow-500'
      : discordStatus === 'dnd'
      ? 'bg-red-500'
      : 'bg-neutral-500';

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 md:p-12 max-w-5xl mx-auto space-y-8">
      {/* Navigation Back Button */}
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-3 py-1.5 rounded-lg border border-neutral-700 transition cursor-pointer"
      >
        ← Back
      </button>

      {/* Profile Header Card */}
      <header className="bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden shadow-xl">
        <div className={`h-28 bg-gradient-to-r ${profile.accentColor}`} />
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-16 sm:-mt-20">
          <div className="relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-neutral-900 border-4 border-neutral-800 overflow-hidden shadow-2xl flex items-center justify-center font-black text-3xl text-yellow-300">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              ) : (
                profile.name[0]
              )}
            </div>
            {profile.discordUserId && !profile.discordUserId.includes('YOUR_DISCORD') && (
              <span
                title={`Discord Status: ${discordStatus}`}
                className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-neutral-800 ${statusColor}`}
              />
            )}
          </div>

          <div className="space-y-1 flex-1">
            <h1 className="text-3xl sm:text-4xl font-black text-white">{profile.fullName}</h1>
            <p className="text-xs sm:text-sm font-bold text-yellow-300">{profile.title}</p>
            <p className="text-xs text-neutral-400">{profile.bio}</p>
          </div>
        </div>
      </header>

      {/* Vitals Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-center">
          <p className="text-[10px] uppercase font-bold text-neutral-400">Age & Zodiac</p>
          <p className="text-sm font-black text-yellow-300">{age}</p>
          <p className="text-xs text-neutral-300 font-semibold mt-0.5">{zodiac}</p>
        </div>
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-center">
          <p className="text-[10px] uppercase font-bold text-neutral-400">Location</p>
          <p className="text-sm font-black text-white">{profile.location}</p>
          <p className="text-xs text-neutral-400">{profile.nationality}</p>
        </div>
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-center">
          <p className="text-[10px] uppercase font-bold text-neutral-400">Height / Weight</p>
          <p className="text-sm font-black text-white">{profile.height}</p>
          <p className="text-xs text-neutral-400">{profile.weight}</p>
        </div>
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-center">
          <p className="text-[10px] uppercase font-bold text-neutral-400">Takeaway Order</p>
          <p className="text-xs font-bold text-yellow-300 truncate mt-1">{profile.takeawayOrder}</p>
        </div>
      </section>

      {/* Hardware Setup Card */}
      <section className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 space-y-3">
        <h2 className="text-lg font-bold text-yellow-300 flex items-center gap-2">
          🖥️ Hardware & Rig Setup
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
          <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-750">
            <span className="text-neutral-400 font-bold block">CPU:</span> {profile.hardware.cpu}
          </div>
          <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-750">
            <span className="text-neutral-400 font-bold block">GPU:</span> {profile.hardware.gpu}
          </div>
          <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-750">
            <span className="text-neutral-400 font-bold block">Headset:</span> {profile.hardware.headset}
          </div>
          <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-750">
            <span className="text-neutral-400 font-bold block">Other Specs:</span> {profile.hardware.other}
          </div>
        </div>
      </section>

      {/* Favorite Shows & Anime */}
      {profile.favoriteShows && profile.favoriteShows.length > 0 && (
        <section className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 space-y-3">
          <h2 className="text-lg font-bold text-yellow-300 flex items-center gap-2">
            📺 Favorite Shows & Anime
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.favoriteShows.map((show, i) => (
              <span
                key={i}
                className="bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-bold px-3 py-1.5 rounded-lg"
              >
                {show}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Top Games Showcase */}
      {profile.topGames && profile.topGames.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-yellow-300">🎮 Top Favorite Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {profile.topGames.map((game, i) => (
              <div
                key={i}
                className="bg-neutral-800 border border-neutral-700 rounded-xl overflow-hidden shadow flex flex-col"
              >
                <img src={game.imageUrl} alt={game.title} className="w-full h-32 object-cover" />
                <div className="p-3">
                  <h3 className="font-bold text-sm text-white">{game.title}</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{game.roleOrNote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Spotify Player & Music */}
      {profile.music?.spotifyEmbedUrl && (
        <section className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-yellow-300">🎵 Favorite Music & Spotify</h2>
          <iframe
            src={profile.music.spotifyEmbedUrl}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl border-0"
          />
        </section>
      )}
    </main>
  );
}