import UserList from "../components/users/UserList";
import { fetchUsers } from "../lib/api";

export default async function Home() {
  const users = await fetchUsers();
  return (
    <main className="min-h-screen px-6 py-12 bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-blue-600">
            Dashboard
          </span>
          <h1 className="text-3xl font-semibold text-gray-900 mt-1">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            {users.length} members · JSONPlaceholder API
          </p>
        </div>
        <UserList initialUsers={users} />
      </div>
    </main>
  );
}
