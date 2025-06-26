import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold">Palm Shores Roleplay</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/dashboard"><a className="hover:underline">Dashboard</a></Link>
        <Link href="/applications"><a className="hover:underline">Applications</a></Link>
        <Link href="/users"><a className="hover:underline">Users</a></Link>
        <button className="bg-green-600 px-3 py-1 rounded hover:bg-green-700">Profile</button>
      </nav>
    </header>
  );
}