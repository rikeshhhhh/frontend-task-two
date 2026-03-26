import Spinner from "../ui/Spinner";

export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <p className="text-gray-400 text-sm mb-4">Loading users...</p>
      <Spinner />
    </main>
  );
}
