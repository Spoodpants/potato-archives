export type ProfileMember = {
  id: string;
  name: string;
  fullName: string;
  title: string;
  avatarUrl: string;
  accentColor: string;
  accentHex: string;
  birthdate: string;
  nationality: string;
  location: string;
  height: string;
  weight: string;
  discordUserId?: string;
  bio: string;
  takeawayOrder: string;
  favoriteShows: {
    title: string;
    imageUrl: string;
  }[];
  hardware: {
    cpu: string;
    gpu: string;
    headset: string;
    other: string;
  };
  socials: {
    steam?: string;
    spotify?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    twitch?: string;
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
    spotifyEmbedUrl?: string;
  };
};

export const PROFILES_DATA: Record<string, ProfileMember> = {
  taylor: {
    id: 'taylor',
    name: 'Taylor',
    fullName: 'Taylor Dennis Goodenough',
    title: 'Group Member & Archival Lead',
    avatarUrl: '/taylor.jpg', // Corrected path to point directly to public/taylor.jpg
    accentColor: 'from-blue-600 to-sky-400',
    accentHex: '#007ACC',
    birthdate: '2005-09-30',
    nationality: 'British 🇬🇧',
    location: 'Swindon / Canterbury',
    height: '6 ft 1 in / 185 cm',
    weight: '103 kg',
    discordUserId: '902899811408293888',
    bio: 'The founding member of Potato Archives. Taylor spends all day chudding out watching many different kinds of media and playing various different video games.',
    takeawayOrder: "Domino's / Super Pizza",
    favoriteShows: [
      {
        title: 'Game of Thrones',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BN2IzNzBhYjEtNjQdZS00YWQwLTk5YzgtYzNmZjY5MjExNzM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Breaking Bad',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg3ZWY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Jujutsu Kaisen',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZGY0YzQ4OWUtNDBiOS00NGFjLWE4MDAtNTEzNDhiYjAzNGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Attack on Titan',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BZmEzNmJhNTAtNGViYy00MmRmLWJiYWUtY2I5MjQ0ODQ3Y2QxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
    ],
    hardware: {
      cpu: 'Intel Core i9-14900K',
      gpu: 'NVIDIA GeForce RTX 5080',
      headset: 'Razer BlackShark V2 Pro',
      other: '1000W Corsair PSU, Dual Monitors, Aimlabs Routine',
    },
    socials: {
      steam: 'https://steamcommunity.com/profiles/76561199217515064',
      spotify: 'https://open.spotify.com/user/coolspudpants',
      instagram: 'https://instagram.com',
      tiktok: 'https://tiktok.com',
      youtube: 'https://youtube.com',
      twitch: 'https://twitch.tv',
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
        imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop',
      },
      {
        title: 'Super Mario Galaxy',
        roleOrNote: 'Peak Platforming',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjA5OTUyMjEwOV5BMl5BanBnXkFtZTgwNTQ2Njc5MDE@._V1_FMjpg_UX1000_.jpg',
      },
    ],
    music: {
      favoriteArtist: 'Juice WRLD',
      favoriteGenres: 'Melodic Rap & Emo Rap',
      artistImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/3SJMXl18dDD5hrtLPcoXaQ',
    },
  },
};