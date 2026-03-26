export default function SearchBar({
  query,
  onChange,
}: {
  query: string;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
