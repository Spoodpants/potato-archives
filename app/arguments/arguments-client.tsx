'use client';

import { useState } from 'react';
import Link from 'next/link';

type Argument = {
  id: number;
  title: string;
  date: string;
  youtubeEmbedId: string;
  involved: string[];
  description: string;
};

type Props = {
  argumentsList: Argument[];
  memberImages: Record<string, { name: string; image: string }>;
};

export default function ArgumentsClient({ argumentsList, memberImages }: Props) {
  const [selectedMember, setSelectedMember] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>('all');

  // Extract unique dates for the dropdown
  const uniqueDates = Array.from(
    new Set(argumentsList.map((arg) => arg.date))
  );

  // Dynamically calculate total argument counts for each member
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

  // Filter logic
  const filteredArguments = argumentsList.filter((arg) => {
    const matchesMember =
      selectedMember === 'all' || arg.involved.includes(selectedMember);
    const matchesDate = selectedDate === 'all' || arg.date === selectedDate;
    return matchesMember && matchesDate;
  });

  return (
    <div className="space-y-10">
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
                    {count} {count === 1 ? 'arg' : 'args'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Filter Bar Controls */}
      <section className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-md">
        <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
          Filter Arguments
        </span>

        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          {/* Filter by Person */}
          <select
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 text-neutral-200 text-sm rounded-lg px-3 py-2 outline-none focus:border-yellow-400 transition cursor-pointer flex-1 sm:flex-initial"
          >
            <option value="all">All Members</option>
            {Object.keys(memberImages).map((key) => (
              <option key={key} value={key}>
                {memberImages[key].name}
              </option>
            ))}
          </select>

          {/* Filter by Date */}
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-neutral-900 border border-neutral-700 text-neutral-200 text-sm rounded-lg px-3 py-2 outline-none focus:border-yellow-400 transition cursor-pointer flex-1 sm:flex-initial"
          >
            <option value="all">All Dates</option>
            {uniqueDates.map((dateStr) => (
              <option key={dateStr} value={dateStr}>
                {dateStr}
              </option>
            ))}
          </select>

          {/* Reset Filters Button */}
          {(selectedMember !== 'all' || selectedDate !== 'all') && (
            <button
              onClick={() => {
                setSelectedMember('all');
                setSelectedDate('all');
              }}
              className="text-xs font-bold text-yellow-400 hover:text-yellow-300 px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg transition"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Arguments Feed */}
      <section className="space-y-12">
        {filteredArguments.length === 0 ? (
          <div className="text-center py-12 bg-neutral-800 border border-neutral-700 rounded-xl space-y-2">
            <p className="text-neutral-300 font-semibold">No arguments found matching these filters!</p>
            <p className="text-xs text-neutral-500">Try changing or clearing your selected filters above.</p>
          </div>
        ) : (
          filteredArguments.map((arg) => (
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
          ))
        )}
      </section>
    </div>
  );
}