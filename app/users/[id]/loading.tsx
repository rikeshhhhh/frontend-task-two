import Spinner from "../../../components/ui/Spinner";

export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <p className="text-gray-400 text-sm mb-4">Loading users...</p>
      <Spinner />
    </main>
  );
}
