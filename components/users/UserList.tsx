"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { User } from "../../types";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import Pagination from "../posts/Pagination";

export default function UserList({ initialUsers }: { initialUsers: User[] }) {
  const { users, setUsers } = useAppStore();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filtered.slice(startIndex, startIndex + usersPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

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
          paginatedUsers.map((user, i) => (
            <UserCard key={user.id} user={user} index={i} />
          ))
        )}
      </div>

      {filtered.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
