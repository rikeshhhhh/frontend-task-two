"use client";

import ErrorMessage from "../../../components/ui/ErrorMessage";
import Link from "next/link";

export default function Error() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/users"
        className="text-blue-600 text-sm hover:underline mb-4 inline-block"
      >
        ← Back to Users
      </Link>
      <ErrorMessage message="Something went wrong" />
    </main>
  );
}
