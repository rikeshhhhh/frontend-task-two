"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { User } from "../../types";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";

export default function UserList({ initialUsers }: { initialUsers: User[] }) {
  const { users, setUsers } = useAppStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      <SearchBar query={query} onChange={setQuery} />
      <p
        className="text-xs"
        style={{
          color: "var(--text-muted)",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        {query && ` for "${query}"`}
      </p>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div
            className="py-16 text-center rounded-xl border"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              No users match your search.
            </p>
          </div>
        ) : (
          filtered.map((user, i) => (
            <UserCard key={user.id} user={user} index={i} />
          ))
        )}
      </div>
    </div>
  );
}
