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
    discord?: string;
    spotify?: string;
    youtube?: string;
    twitch?: string;
    github?: string;
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
    avatarUrl: '/avatars/taylor.jpg', // Place taylor.jpg in public/avatars folder
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
        imageUrl: 'https://m.media-amazon.com/images/M/MVBmMzA5OTVlZGUtNWZhNC00ODA5LWEzMDItY2IxOTI4M2VjZjA3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Breaking Bad',
        imageUrl: 'https://m.media-amazon.com/images/M/MVBYmQ4Y2YyZWUtNWYyOS00M2I3LWE3NWItOGM4Y2YyY2JkYTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Jujutsu Kaisen',
        imageUrl: 'https://m.media-amazon.com/images/M/MVBmMzI1ZmI3ZTgtNWY4Yi00MDgwLWEyZDAtY2E1ZTBiY2M5ZmI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      },
      {
        title: 'Attack on Titan',
        imageUrl: 'https://m.media-amazon.com/images/M/MVBMTY4NjA4OTI3MV5BMl5BanBnXkFtZTgwMTE4NTI1MjE@._V1_FMjpg_UX1000_.jpg',
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
      discord: 'spudpants',
      spotify: 'https://open.spotify.com/user/coolspudpants',
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
        imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg',
      },
      {
        title: 'Super Mario Galaxy',
        roleOrNote: 'Peak Platforming',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tr1.jpg',
      },
    ],
    music: {
      favoriteArtist: 'Juice WRLD',
      favoriteGenres: 'Melodic Rap',
      artistImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop',
      spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/3SJMXl18dDD5hrtLPcoXaQ',
    },
  },
};