export default function Loading() {
  return (
    <main className="min-h-screen px-6 py-12 bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="h-4 w-24 rounded animate-pulse bg-gray-200" />
        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl animate-pulse bg-gray-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-36 rounded animate-pulse bg-gray-200" />
            <div className="h-3 w-48 rounded animate-pulse bg-gray-200" />
            <div className="h-3 w-28 rounded animate-pulse bg-gray-200" />
          </div>
        </div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-20 rounded-xl animate-pulse bg-gray-200"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
