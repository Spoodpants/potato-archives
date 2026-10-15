import { NextResponse } from 'next/server';
import { STEAM_MEMBERS } from '@/app/steam-family/config';

// Paste your Steam API Key here (or store in environment variables)
const STEAM_API_KEY = '9CD5E5CB8F9C77FA97CFAD54D7668D1F';

export async function GET() {
  try {
    const memberDataPromises = STEAM_MEMBERS.map(async (member) => {
      if (!member.steamId || member.steamId.includes('000000000')) {
        return {
          id: member.id,
          name: member.name,
          games: [],
          error: 'Steam ID not configured',
        };
      }

      const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${member.steamId}&include_appinfo=true&include_played_free_games=true&format=json`;

      const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache results for 1 hour
      if (!response.ok) {
        return {
          id: member.id,
          name: member.name,
          games: [],
          error: 'Failed to fetch from Steam',
        };
      }

      const data = await response.json();
      const games = data.response?.games || [];

      return {
        id: member.id,
        name: member.name,
        games: games.map((g: any) => ({
          appid: g.appid,
          name: g.name,
          iconUrl: g.img_icon_url
            ? `http://media.steampowered.com/steamcommunity/public/images/apps/${g.appid}/${g.img_icon_url}.jpg`
            : null,
          playtime: g.playtime_forever || 0,
        })),
      };
    });

    const results = await Promise.all(memberDataPromises);
    return NextResponse.json({ members: results });
  } catch (error) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}