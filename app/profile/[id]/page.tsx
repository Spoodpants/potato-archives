'use client';

import { useParams, useRouter } from 'next/navigation';

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Capitalize name for display
  const memberName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Member';

  return (
    <>
      {/* Sets the browser tab title dynamically */}
      <title>{`Potato Archives • ${memberName}`}</title>

      <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 md:p-12 max-w-5xl mx-auto space-y-8">
        {/* Dynamic Back Button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 px-4 py-2 rounded-lg text-sm font-medium transition select-none cursor-pointer"
        >
          ← Back
        </button>

        {/* Header */}
        <header className="border-b border-neutral-800 pb-6 space-y-2">
          <h1 className="text-4xl font-extrabold text-yellow-300 select-none">
            {memberName}'s Archive
          </h1>
          <p className="text-neutral-400">
            Personal lore, stats, quotes, and individual history.
          </p>
        </header>

        {/* Placeholder Content Area */}
        <section className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 space-y-4">
          <h2 className="text-xl font-semibold text-white">Lore & Stats</h2>
          <p className="text-neutral-300 leading-relaxed">
            This is {memberName}'s dedicated page. You can add unique sections here for stats, quotes, personal clips, or dedicated lore entries!
          </p>
        </section>
      </main>
    </>
  );
}