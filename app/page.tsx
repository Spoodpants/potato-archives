export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <header className="border-b border-slate-800 pb-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-400">
          The Group Archives
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          Documenting lore, argument logs, outings, and music vaults.
        </p>
      </header>

      {/* Argument Log Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-2">
          Argument Court
        </h2>
        
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl space-y-3 shadow-lg">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Date: Aug 2026</span>
            <span className="bg-red-500/10 text-red-400 px-2.5 py-1 rounded-full border border-red-500/20 font-medium">
              Unresolved
            </span>
          </div>
          <h3 className="text-lg font-semibold text-slate-100">
            Exhibit A: The Great Debate
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Summary of what went down, key quotes, and who took which side...
          </p>
        </div>
      </section>

      {/* Music Vault Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-purple-400 border-b border-slate-800 pb-2">
          Juice WRLD Unreleased Vault
        </h2>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center justify-between shadow-lg">
          <div>
            <h3 className="font-semibold text-slate-100">Track Title Here</h3>
            <p className="text-xs text-slate-400 mt-0.5">Era / Studio Session</p>
          </div>
          <p className="text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
            MP3 Player Coming Soon
          </p>
        </div>
      </section>
    </main>
  );
}