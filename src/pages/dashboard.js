import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="p-8 space-y-6">
        {/* Cards for stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Repeat for each card */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-green-500 p-2 rounded-full">
                {/* Icon */}
              </div>
              <h2 className="text-lg font-semibold">Total Applications</h2>
            </div>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-400">All time</p>
          </div>
        </div>
        {/* Other sections like Quick Actions, Recent Applications, Alerts */}
      </div>
    </div>
  )
}