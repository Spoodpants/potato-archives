import type { Metadata } from 'next';
import SteamClient from './steam-client';

export const metadata: Metadata = {
  title: 'Potato Archives • Steam Family',
  description: 'Steam Family library analytics, contributions, unique games, and owner breakdowns.',
};

export default function SteamFamilyPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 md:p-12 max-w-6xl mx-auto space-y-10">
      <header className="border-b border-neutral-800 pb-6 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-300 select-none">
          Steam Family Hub
        </h1>
        <p className="text-neutral-400">
          Track shared library contributions, unique games, duplicates, and free-to-play titles.
        </p>
      </header>

      <SteamClient />
    </main>
  );
}