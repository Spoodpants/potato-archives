import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Potato Archives • Arguments',
  description: 'Recorded footage, involved parties, and official summaries.',
};

export default function ArgumentsPage() {
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
    }
  ];

  // Dynamically calculate argument counts for each member
  const argumentCounts: Record<string, number> = {
    harry: 0,
    matheesa: 0,
    maximus: 0,
    samson: 0,
    taylor: 0,
  };

  argumentsList.forEach((arg) => {
    arg.involved.forEach((personKey) => {
      if (argumentCounts[personKey] !== undefined) {
        argumentCounts[personKey] += 1;
      }
    });
  });

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

      {/* Leaderboard / Argument Counters */}
      <section className="bg-neutral-800 border border-neutral-700 rounded-xl p-5 space-y-3 shadow-lg">
        <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-wider text-center md:text-left">
          Argument Leaderboard
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {Object.keys(memberImages).map((personKey) => {
            const person = memberImages[personKey];
            const count = argumentCounts[personKey] || 0;

            return (
              <Link
                key={personKey}
                href={`/profile/${personKey}`}
                className="flex items-center gap-3 bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 p-2.5 rounded-lg transition select-none group"
              >
                <div className="w-10 h-10 rounded-md overflow-hidden bg-neutral-800 border border-neutral-700 flex-shrink-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-neutral-200 group-hover:text-yellow-300 transition truncate">
                    {person.name}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {count} {count === 1 ? 'argument' : 'arguments'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Arguments Feed */}
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

            {/* Embedded Video Player */}
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-neutral-700">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${arg.youtubeEmbedId}`}
                title={arg.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Clickable Member Badges */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">
                Involved:
              </span>
              <div className="flex flex-wrap gap-3">
                {arg.involved.map((personKey) => {
                  const person = memberImages[personKey];
                  if (!person) return null;
                  return (
                    <Link
                      key={personKey}
                      href={`/profile/${personKey}`}
                      className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 px-2.5 py-1.5 rounded-lg transition select-none group"
                      title={`View ${person.name}'s Profile`}
                    >
                      <div className="w-8 h-8 rounded-md overflow-hidden bg-neutral-800 border border-neutral-700 flex-shrink-0">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <span className="text-xs font-semibold text-neutral-200 group-hover:text-yellow-300 transition">
                        {person.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Description Lines */}
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