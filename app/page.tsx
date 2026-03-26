import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">User & Posts Dashboard</h1>
        <p className="text-gray-500 mb-8">
          Browse users and their posts from JSONPlaceholder API
        </p>
        <Link
          href="/users"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
          View Users →
        </Link>
      </div>
    </main>
  );
}
