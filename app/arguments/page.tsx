'use client';

import { useEffect } from 'react';

export default function ArgumentsPage() {
  // Force browser tab title to change on direct link load
  useEffect(() => {
    document.title = 'Potato Archives • Arguments';
  }, []);

  // Map of profile pictures matching your public folder image names
  const memberImages: Record<string, { name: string; image: string }> = {
    harry: { name: "Harry", image: "/harry.jpg" },
    matheesa: { name: "Matheesa", image: "/matheesa.jpg" },
    maximus: { name: "Maximus", image: "/maximus.jpg" },
    samson: { name: "Samson", image: "/samson.jpg" },
    taylor: { name: "Taylor", image: "/taylor.jpg" },
  };

  // Add your argument entries here!
  const argumentsList = [
    {
      id: 1,
      title: "First Argument Title",
      date: "October 2026",
      youtubeEmbedId: "dQw4w9WgXcQ", // Replace with YouTube Video ID
      involved: ["harry", "taylor", "samson"],
      description: "Short description explaining what started the argument, key moments, and how it ended.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 md:p-12 max-w-4xl mx-auto space-y-12">
      <header className="border-b border-neutral-800 pb-6 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-300 select-none">
          Argument Archive
        </h1>
        <p className="text-neutral-400">
          Recorded footage, involved parties, and official summaries.
        </p>
      </header>

      <section className="space-y-12">
        {argumentsList.map((arg) => (
          <div
            key={arg.id}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 space-y-5 shadow-xl"
          >
            {/* Card Header */}
            <div className="flex justify-between items-center border-b border-neutral-700 pb-3">
              <h2 className="text-2xl font-bold text-white">{arg.title}</h2>
              <span className="text-xs font-medium text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-700">
                {arg.date}
              </span>
            </div>

            {/* 1. Large Embedded Video Player */}
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-neutral-700">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${arg.youtubeEmbedId}`}
                title={arg.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* 2. Mini Square Avatars of Involved Members */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Involved:
              </span>
              <div className="flex flex-wrap gap-3">
                {arg.involved.map((personKey) => {
                  const person = memberImages[personKey];
                  if (!person) return null;
                  return (
                    <div
                      key={personKey}
                      className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 px-2.5 py-1.5 rounded-lg"
                      title={person.name}
                    >
                      <div className="w-8 h-8 rounded-md overflow-hidden bg-neutral-800 border border-neutral-700 flex-shrink-0">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-neutral-200">
                        {person.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Description Lines Underneath */}
            <div className="pt-2 border-t border-neutral-700/60">
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
                {arg.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}