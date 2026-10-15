export type ProfileMember = {
  id: string;
  name: string;
  fullName: string;
  title: string;
  avatarUrl: string;
  accentColor: string;
  accentHex: string;
  birthdate: string; // YYYY-MM-DD for dynamic age & zodiac calculation
  nationality: string;
  location: string;
  height: string;
  weight: string;
  discordUserId?: string; // Optional: 18-digit Discord ID for live Lanyard status
  bio: string;
  takeawayOrder: string;
  favoriteShows: string[];
  hardware: {
    cpu: string;
    gpu: string;
    headset: string;
    other: string;
  };
  socials: {
    steam?: string;
    discord?: string;
    github?: string;
    twitch?: string;
    spotify?: string;
  };
  topGames: {
    title: string;
    roleOrNote: string;
    imageUrl: string;
  }[];
  music: {
    favoriteArtist: string;
    favoriteGenres: string;
    artistImageUrl: string;
    spotifyEmbedUrl?: string; // Spotify iframe embed link
  };
};

export const PROFILES_DATA: Record<string, ProfileMember> = {
  taylor: {
    id: 'taylor',
    name: 'Taylor',
    fullName: 'Taylor Dennis Goodenough',
    title: 'Group Member',
    avatarUrl: '/avatars/taylor.jpg', // Place your picture in public/avatars/taylor.jpg
    accentColor: 'from-blue-600 to-sky-400', // VS Code Blue theme
    accentHex: '#007ACC',
    birthdate: '2004-09-30', // EDIT YOUR BIRTHDATE HERE (YYYY-MM-DD)
    nationality: 'British',
    location: 'Swindon',
    height: '6 ft 1 in / 185 cm',
    weight: '103 kg',
    discordUserId: '902899811408293888', // Optional: 18-digit Discord User ID
    bio: 'The founding member of Potato Archives. Taylor spends all day chudding out watching many different kinds of media and playing various different video games.',
    takeawayOrder: 'Domino\'s',
    favoriteShows: [
      'Game of Thrones',
      'Breaking Bad',
      'Jujutsu Kaisen',
      'Attack on Titan',
    ],
    hardware: {
      cpu: 'Intel Core i9-14900K',
      gpu: 'NVIDIA GeForce RTX 5080',
      headset: 'Razer BlackShark V2 Pro',
      other: '1000W Corsair PSU, Dual Monitors, Aimlabs Routine',
    },
    socials: {
      steam: 'https://steamcommunity.com/profiles/76561199217515064',
      discord: 'spudpants',
      spotify: 'https://open.spotify.com/user/coolspudpants?si=cb8e8d33d43e4808',
    },
    topGames: [
      {
        title: 'Dead Space',
        roleOrNote: 'Survival Horror Masterpiece',
        imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/17470/header.jpg',
      },
      {
        title: 'Minecraft',
        roleOrNote: 'Endless Creativity & Survival',
        imageUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30e52?w=500&auto=format&fit=crop',
      },
      {
        title: 'Super Mario Galaxy',
        roleOrNote: 'Peak Platforming',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop',
      },
    ],
    music: {
      favoriteArtist: 'Juice WRLD',
      favoriteGenres: 'Melodic Rap',
      artistImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/3SJMXl18dDD5hrtLPcoXaQ', // EDIT WITH YOUR SPOTIFY EMBED
    },
  },

  // Placeholders for the rest of the group
  harry: {
    id: 'harry',
    name: 'Harry',
    fullName: 'Harry',
    title: 'Group Member',
    avatarUrl: '/avatars/harry.jpg',
    accentColor: 'from-red-600 to-amber-500',
    accentHex: '#DC2626',
    birthdate: '2004-01-01',
    nationality: 'British',
    location: 'UK',
    height: 'TBD',
    weight: 'TBD',
    bio: 'Potato Archives member and Steam Family contributor.',
    takeawayOrder: 'TBD',
    favoriteShows: [],
    hardware: { cpu: 'TBD', gpu: 'TBD', headset: 'TBD', other: 'TBD' },
    socials: {},
    topGames: [],
    music: { favoriteArtist: 'TBD', favoriteGenres: 'TBD', artistImageUrl: '' },
  },
  matheesa: {
    id: 'matheesa',
    name: 'Matheesa',
    fullName: 'Matheesa',
    title: 'Group Member',
    avatarUrl: '/avatars/matheesa.jpg',
    accentColor: 'from-emerald-600 to-teal-400',
    accentHex: '#059669',
    birthdate: '2004-01-01',
    nationality: 'British',
    location: 'UK',
    height: 'TBD',
    weight: 'TBD',
    bio: 'Potato Archives member and Steam Family contributor.',
    takeawayOrder: 'TBD',
    favoriteShows: [],
    hardware: { cpu: 'TBD', gpu: 'TBD', headset: 'TBD', other: 'TBD' },
    socials: {},
    topGames: [],
    music: { favoriteArtist: 'TBD', favoriteGenres: 'TBD', artistImageUrl: '' },
  },
  maximus: {
    id: 'maximus',
    name: 'Maximus',
    fullName: 'Maximus',
    title: 'Group Member',
    avatarUrl: '/avatars/maximus.jpg',
    accentColor: 'from-purple-600 to-indigo-400',
    accentHex: '#9333EA',
    birthdate: '2004-01-01',
    nationality: 'British',
    location: 'UK',
    height: 'TBD',
    weight: 'TBD',
    bio: 'Potato Archives member and Steam Family contributor.',
    takeawayOrder: 'TBD',
    favoriteShows: [],
    hardware: { cpu: 'TBD', gpu: 'TBD', headset: 'TBD', other: 'TBD' },
    socials: {},
    topGames: [],
    music: { favoriteArtist: 'TBD', favoriteGenres: 'TBD', artistImageUrl: '' },
  },
  samson: {
    id: 'samson',
    name: 'Samson',
    fullName: 'Samson',
    title: 'Group Member',
    avatarUrl: '/avatars/samson.jpg',
    accentColor: 'from-amber-500 to-yellow-300',
    accentHex: '#D97706',
    birthdate: '2004-01-01',
    nationality: 'British',
    location: 'UK',
    height: 'TBD',
    weight: 'TBD',
    bio: 'Potato Archives member and Steam Family contributor.',
    takeawayOrder: 'TBD',
    favoriteShows: [],
    hardware: { cpu: 'TBD', gpu: 'TBD', headset: 'TBD', other: 'TBD' },
    socials: {},
    topGames: [],
    music: { favoriteArtist: 'TBD', favoriteGenres: 'TBD', artistImageUrl: '' },
  },
};