'use client';

export default function Home() {
  const groupMembers = [
    {
      name: "Harry",
      role: "Group Member",
      image: "/harry.jpg",
      bio: "Harry desc",
    },
    {
      name: "Matheesa",
      role: "Group Member",
      image: "/matheesa.jpg",
      bio: "Matheesa desc",
    },
    {
      name: "Maximus",
      role: "Group Member",
      image: "/maximus.jpg",
      bio: "Maximus desc",
    },
    {
      name: "Samson",
      role: "Group Member",
      image: "/samson.jpg",
      bio: "Samson desc",
    },
    {
      name: "Taylor",
      role: "Group Member",
      image: "/taylor.jpg",
      bio: "Taylor desc",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 md:p-12 max-w-4xl mx-auto space-y-12">
      {/* Title & Description Header */}
      <header className="border-b border-neutral-800 pb-8 text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-300">
          Potato Archives
        </h1>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          The official home of our group's lore, members, inside jokes, and shared history.
        </p>
      </header>

      {/* Member Boxes - Full Width Vertical Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-neutral-200 text-left">
          Group Members
        </h2>

        <div className="flex flex-col gap-6">
          {groupMembers.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start shadow-xl hover:border-neutral-600 transition w-full"
            >
              {/* Image Container */}
              <div className="w-32 h-32 relative rounded-lg overflow-hidden bg-neutral-900 flex-shrink-0 border border-neutral-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/150?text=" + member.name;
                  }}
                />
              </div>

              {/* Information */}
              <div className="space-y-3 text-left flex-1 w-full">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <span className="text-xs font-medium text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-700">
                    {member.role}
                  </span>
                </div>
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed whitespace-pre-line">
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