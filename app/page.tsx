'use client';

export default function Home() {
  // Add or edit group members here
  const groupMembers = [
    {
      name: "Harry",
      role: "Group Member",
      image: "/harry.jpg", // Add harry.jpg to your public folder
      bio: "Add Harry's main description, running jokes, or stats here.",
    },
    {
      name: "Matheesa",
      role: "Group Member",
      image: "/matheesa.jpg", // Add matheesa.jpg to your public folder
      bio: "Add Matheesa's main description, running jokes, or stats here.",
    },
    {
      name: "Maximus",
      role: "Group Member",
      image: "/maximus.jpg", // Add maximus.jpg to your public folder
      bio: "Add Maximus's main description, running jokes, or stats here.",
    },
    {
      name: "Samson",
      role: "Group Member",
      image: "/samson.jpg", // Add samson.jpg to your public folder
      bio: "Add Samson's main description, running jokes, or stats here.",
    },
    {
      name: "Taylor",
      role: "Group Member",
      image: "/taylor.jpg", // Add taylor.jpg to your public folder
      bio: "Add Taylor's main description, running jokes, or stats here.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 max-w-5xl mx-auto space-y-12">
      {/* Title & Description Header */}
      <header className="border-b border-slate-800 pb-8 text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-amber-400">
          Potato Archives
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          The official home of our group's lore, member profiles, inside jokes, and shared history.
        </p>
      </header>

      {/* Member Boxes Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-200 text-center md:text-left">
          Group Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groupMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-center sm:items-start shadow-lg hover:border-slate-700 transition"
            >
              {/* Image Container */}
              <div className="w-28 h-28 relative rounded-lg overflow-hidden bg-slate-800 flex-shrink-0 border border-slate-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image is missing
                    e.currentTarget.src =
                      "https://via.placeholder.com/150?text=" + member.name;
                  }}
                />
              </div>

              {/* Information */}
              <div className="space-y-2 text-center sm:text-left flex-1">
                <div>
                  <h3 className="text-xl font-bold text-amber-400">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 inline-block mt-1">
                    {member.role}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}