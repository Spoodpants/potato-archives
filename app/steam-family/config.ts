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
    steamId: '76561199217515064', // Put your 17-digit Steam ID64 here
    unsharedAppIds: [
      // Assassin's Creed
      812140, 582160, 2208920,
      // Battlefield & Call of Duty
      1517290, 1938090,
      // Dead Space & Deadlock
      1238060, 1422450,
      // EA Sports & PvZ
      3405690, 1922560,
      // Far Cry Series
      220240, 233270, 298110, 552520, 2369390, 939960, 263960,
      // GTA & Rockstar
      12210, 271590, 1174180,
      // Tom Clancy & Ubisoft
      304390, 2231380, 460930, 242550, 488790, 2221490, 242700, 447040,
      // Star Wars & Others
      1237950, 1172380, 1774580, 582660, 252490, 1247010,
      //R6
      359550,
    ],
  },
  {
    id: 'harry',
    name: 'Harry',
    steamId: '76561198880211908', // Keep Harry's 17-digit Steam ID64
    unsharedAppIds: [
      1938090, // Call of Duty HQ / Black Ops 6
      1422450, // Deadlock
      12210,   // GTA IV / GTA V Legacy
      271590,  // GTA V / GTA V Enhanced
      304390,  // For Honor
      263960,  // Far Cry Primal
      252490,  // Rust
      359550,  // Tom Clancy's Rainbow Six Siege
    ],
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
    steamId: '76561199260776249', // Keep Max's 17-digit Steam ID64
    unsharedAppIds: [
      1422450, // Deadlock
      1922560, // Plants vs. Zombies Garden Warfare 2
    ],
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
  // Core F2P
  1172470, // Apex Legends
  730,     // Counter-Strike 2
  570,     // Dota 2
  236390,  // War Thunder
  1085660, // Destiny 2
  230410,  // Warframe
  440,     // Team Fortress 2
  578080,  // PUBG: BATTLEGROUNDS
  2767030, // Marvel Rivals
  1203220, // NARAKA: BLADEPOINT
  1938090, // Call of Duty HQ / Warzone
  2437170, // SMITE 2

  // MultiVersus AppIDs
  1818750, // MultiVersus (Beta)
  2420510, // MultiVersus (Full Launch)

  // F2P List
  1000590, // 100 March Cats
  1488090, // 100 New Year Cats
  1170970, // 1v1.LOL
  1665220, // 3D Aim Trainer
  1161200, // Action Taimanin
  342200,  // AdVenture Capitalist
  824270,  // Aimlabs
  1173380, // AION Classic
  326160,  // Albion Online
  1803700, // Amourlla's Butt Slapper
  2828020, // AniMo
  2717800, // Arena Breakout: Infinite
  2398220, // Arrow a Row
  2923300, // Banana
  2477380, // Bard Idle
  273350,  // Black Squad
  2624790, // Blood Strike
  960090,  // Bloons Adventure Time TD
  388140,  // Bloons Monkey City
  217750,  // Bloons TD Battles
  1972680, // Bloons TD Battles 2
  2903740, // Bongo Cat
  1248060, // Booty Farm
  291550,  // Brawlhalla
  2573210, // Cave Heroes
  367050,  // Clicker Heroes
  1165980, // Coloring Game
  1599560, // Crab Game
  386180,  // Crossout
  1022800, // CRSED: Cuisine Royale
  1170940, // Dark and Darker
  666140,  // Darwin Project
  32330,   // DC Universe Online
  1083880, // DDraceNetwork
  2918880, // Dead Seater
  2178830, // Delta Force
  1389810, // Doki Doki Literature Club!
  1506440, // eFootball
  1812290, // The Elder Scrolls II: Daggerfall
  2758190, // Dream BBQ
  1367080, // Enlisted
  1196590, // Eternal Return
  2509200, // Faaast Penguin
  588430,  // Fallout Shelter
  2071500, // Fears to Fathom: Home Alone
  2073850, // THE FINALS
  2074920, // The First Descendant
  550320,  // Fishing Planet
  2562470, // EPS Chess
  2617700, // FragPunk
  1192940, // FrostRunner
  1523300, // GeoGuessr - Steam Edition
  1568590, // Goose Goose Duck
  2308940, // Graal Online Era
  1248030, // Grim Clicker
  1284210, // Guild Wars 2
  1091500, // Halo Infinite
  1388770, // Helltaker
  2609060, // HERO'S LAND
  2841440, // Herta's Chess Game
  2948680, // Highguard
  2341990, // Horny Villa
  627690,  // Idle Champions of the Forgotten Realms
  1502220, // Legends of IdleOn
  1411910, // Incremental Epic Hero 2
  2893810, // Jujutsu Kaisen Phantom Parade
  2503210, // Kaiju No. 8 The Game
  833370,  // KARDS - The WWII Card Game
  1227890, // King of Crabs
  673420,  // KurtzPel
  1263850, // Leaf Blower Revolution
  1599340, // Lost Ark
  1658040, // Lunacid: Tears of the Moon
  2510940, // Lust Goddess
  1428610, // Magic: The Gathering Arena
  1230100, // MapleStory
  612180,  // March of Empires
  2308250, // Path to Doomsday: Avengers Infinity War
  1978590, // MARVEL SNAP
  1282270, // Merge Crafter
  2164800, // Miscrits: World of Creatures
  2228580, // Movere
  1627720, // Muck
  2432630, // MY HERO ULTRA RUMBLE
  277460,  // My Singing Monsters
  1381390, // Naval Action
  1259200, // Old School RuneScape
  2401640, // Once Human
  1627070, // One-armed Cook
  1808090, // One-Armed Robber
  386360,  // Paladins
  1155970, // Palia
  238960,  // Path of Exile
  2762280, // Pixel Gun 3D
  1477720, // Pool 2D - Poolians
  1401400, // Predecessor
  1961400, // PROJECT: PLAYTIME
  437220,  // Quake Champions
  1823100, // RAID: Shadow Legends
  2109670, // Realm of Alters
  1859360, // Rec Room
  2590660, // Revolution Idle
  1128810, // Risk: Global Domination
  1343400, // RuneScape
  1101800, // Russian Fishing 4
  1306350, // SCP: Covert Operations
  700330,  // SCP: Secret Laboratory
  47000,   // The Sims 4
  2015970, // skate.
  2073280, // Sky: Children of the Light
  386350,  // SMITE
  1053160, // Splitgate
  2918300, // Splitgate 2
  2403210, // Stalzone
  1286830, // Star Wars: The Old Republic
  2615600, // Strinova
  309320,  // Stumble Guys
  2791430, // Summoners War
  1233210, // Super Animal Royale
  1454400, // Super Auto Pets
  3010880, // Supermarket Together
  2881660, // SUPERVIVE
  2670630, // TCG Card Shop Simulator: Prologue
  241970,  // There Is No Game: Jam Edition 2015
  2720230, // Throne and Liberty
  1281930, // tModLoader
  1163550, // Totally Accurate Battlegrounds
  2487220, // Town of Salem 2
  838380,  // Ultimate Custom Night
  1302240, // Unfortunate Spacemen
  304930,  // Unturned
  1811440, // Bloodhunt
  1263800, // Virtual Cottage
  438100,  // VRChat
  2120930, // War Robots
  1809310, // Warface: Clutch
  1173940, // We Were Here
  2579290, // Welcome to the Dark Place
  2281890, // Where Winds Meet
  1407200, // World of Tanks
  444200,  // World of Tanks Blitz
  2560380, // Blue Archive x World of Warships
  2738000, // Wuthering Waves
  1449850, // Yu-Gi-Oh! Master Duel
  43970,   // Z1 Battle Royale
]);