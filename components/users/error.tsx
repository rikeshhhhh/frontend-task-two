"use client";

import ErrorMessage from "../../components/ui/ErrorMessage";

export default function Error() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <ErrorMessage message="Something went wrong" />
    </main>
  );
}
