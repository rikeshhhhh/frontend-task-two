export default function Loading() {
  return (
    <main
      className="min-h-screen px-6 py-12"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-1">
          <div
            className="h-3 w-20 rounded animate-pulse"
            style={{ background: "var(--border)" }}
          />
          <div
            className="h-9 w-32 rounded-lg animate-pulse"
            style={{ background: "var(--border)" }}
          />
          <div
            className="h-3 w-48 rounded animate-pulse"
            style={{ background: "var(--border)" }}
          />
        </div>
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-20 rounded-xl animate-pulse"
              style={{ background: "var(--border)" }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
