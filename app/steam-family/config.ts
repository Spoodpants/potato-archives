export type SteamMemberConfig = {
  id: string;
  name: string;
  steamId: string; // 17-digit Steam ID64
  unsharedAppIds: number[]; // AppIDs for non-shareable games (e.g. Far Cry 5, GTA V)
};

export const STEAM_MEMBERS: SteamMemberConfig[] = [
  {
    id: 'taylor',
    name: 'Taylor',
    steamId: '76561199217515064', // Replace with Taylor's 17-digit SteamID
    unsharedAppIds: [271590, 552520], // 271590 = GTA V, 552520 = Far Cry 5
  },
  {
    id: 'harry',
    name: 'Harry',
    steamId: '76561198880211908', // Replace with Harry's 17-digit SteamID
    unsharedAppIds: [],
  },
  {
    id: 'matheesa',
    name: 'Matheesa',
    steamId: '76561199106703112', // Replace with Matheesa's 17-digit SteamID
    unsharedAppIds: [],
  },
  {
    id: 'maximus',
    name: 'Maximus',
    steamId: '76561199260776249', // Replace with Maximus's 17-digit SteamID
    unsharedAppIds: [],
  },
  {
    id: 'samson',
    name: 'Samson',
    steamId: '76561199865800931', // Replace with Samson's 17-digit SteamID
    unsharedAppIds: [],
  },
];

// List of popular Free-to-Play AppIDs so they don't skew financial calculations
export const FREE_TO_PLAY_APPIDS = new Set<number>([
  1172470, // Apex Legends
  730,     // Counter-Strike 2
  570,     // Dota 2
  236390,  // War Thunder
  1085660, // Destiny 2
  230410,  // Warframe
  440,     // Team Fortress 2
  578080,  // PUBG
  2767030, // Marvel Rivals
  1203220, // NARAKA: BLADEPOINT
  1938090, // Call of Duty HQ / Warzone
]);