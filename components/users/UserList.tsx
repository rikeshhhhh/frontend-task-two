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
    <div>
      <SearchBar query={query} onChange={setQuery} />
      <div className="grid gap-4 mt-6">
        {filtered.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          filtered.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
}
