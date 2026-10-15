import type { Metadata } from 'next';
import ArgumentsClient from './arguments-client';

export const metadata: Metadata = {
  title: 'Potato Archives • Arguments',
  description: 'Recorded footage, involved parties, and official summaries.',
};

export default function ArgumentsPage() {
  const memberImages: Record<string, { name: string; image: string }> = {
    harry: { name: "Harry", image: "/harry.jpg" },
    matheesa: { name: "Matheesa", image: "/matheesa.jpg" },
    maximus: { name: "Maximus", image: "/maximus.jpg" },
    samson: { name: "Samson", image: "/samson.jpg" },
    taylor: { name: "Taylor", image: "/taylor.jpg" },
  };

  const argumentsList = [
    {
      id: 1,
      title: "Harry wanting Samson to play Marvel Rivals",
      date: "11th July 2026",
      youtubeEmbedId: "l9OMy1Nt7pM", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "samson"], // Listed names display their faces
      description: "Harry wanted to play Marvel Rivals with Samson however Samson wasn't interested. Harry then began by saying it is because he only plays the same characters.",
    },
    {
      id: 2,
      title: "Harry and Maximus arguing over ban decisions",
      date: "20th August 2026",
      youtubeEmbedId: "Z1Fms_v84z0", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "maximus"], // Listed names display their faces
      description: "Harry complained about Max convincing him to ban Hou Yi when Artemis ended up being a way bigger problem.",
    },
    {
      id: 3,
      title: "Harry and Samson debating over who is at fault during Solo Lane fight",
      date: "30th August 2026",
      youtubeEmbedId: "eIFpq_l1VJU", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "samson"], // Listed names display their faces
      description: "Harry saying Samson was at fault for not using Aegis whilst Samson argues that is unrealistic.",
    },
    {
      id: 4,
      title: "Harry complaining about Samson being bad at Marvel Rivals",
      date: "31st August 2026",
      youtubeEmbedId: "FtVYfl8yx34", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "samson"], // Listed names display their faces
      description: "Harry complained about Samson's performance in Marvel Rivals leading to some back and forth.",
    },
    {
      id: 5,
      title: "Harry and Maximus debating Taylor's Horus Ult",
      date: "8th September 2026",
      youtubeEmbedId: "PRFhwTN4LOc", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "maximus"], // Listed names display their faces
      description: "Harry and Maximus debating the value of Taylor's Horus Ult.",
    },
    {
      id: 6,
      title: "Harry and Samson debating who is the bigger burger in Marvel Rivals",
      date: "21st September 2026",
      youtubeEmbedId: "PURezFN2U8A", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "samson"], // Listed names display their faces
      description: "Harry and Samson go back and forth arguing who is the bigger burger.", 
    },
    {
      id: 7,
      title: "Harry and Samson arguing over who is the better Marvel Rivals player",
      date: "21st September 2026",
      youtubeEmbedId: "cKsd3DORwlU", // Replace with YouTube Video ID (the string after v= in youtube link)
      involved: ["harry", "samson"], // Listed names display their faces
      description: "Harry and Samson yet again argue over who is better.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 md:p-12 max-w-4xl mx-auto space-y-10">
      <header className="border-b border-neutral-800 pb-6 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-300 select-none">
          Argument Archive
        </h1>
        <p className="text-neutral-400">
          Recorded footage, involved parties, and official summaries.
        </p>
      </header>

      <ArgumentsClient
        argumentsList={argumentsList}
        memberImages={memberImages}
      />
    </main>
  );
}