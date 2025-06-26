export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans p-8">
      {/* Header */}
      <header className="flex items-center justify-center mb-8 space-x-2">
        <img src="/logo.png" alt="Palm Shores Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold">Palm Shores Roleplay</h1>
      </header>

      {/* Main Content */}
      <main className="space-y-8">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center mb-4">Application Center</h2>
        <p className="text-center mb-8 text-gray-400">
          Browse and manage your applications with ease
        </p>

        {/* Department Applications */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Department Applications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform">
              <div className="flex items-center mb-2 space-x-2">
                <div className="bg-green-500 p-2 rounded-full">
                  {/* Icon could go here */}
                </div>
                <h4 className="font-semibold">San Andreas State Troopers</h4>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                The San Andreas State Troopers ensures that everything is smoothly running safe and sound.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform">
              <div className="flex items-center mb-2 space-x-2">
                <div className="bg-green-500 p-2 rounded-full"></div>
                <h4 className="font-semibold">Blaine County Sheriff's Office</h4>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                The Blaine County Sheriff's Office is the primary law enforcement agency in Blaine County.
              </p>
            </div>
            {/* Additional cards can be added here */}
          </div>
        </section>

        {/* Server Applications */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Server Applications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform">
              <div className="flex items-center mb-2 space-x-2">
                <div className="bg-green-500 p-2 rounded-full"></div>
                <h4 className="font-semibold">Staff Team</h4>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Staff Members are the defenders of the community.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform">
              <div className="flex items-center mb-2 space-x-2">
                <div className="bg-green-500 p-2 rounded-full"></div>
                <h4 className="font-semibold">Development Team</h4>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                The Development Team operates to improve the server experience.
              </p>
            </div>
            {/* Additional cards can be added here */}
          </div>
        </section>
      </main>
    </div>
  );
}