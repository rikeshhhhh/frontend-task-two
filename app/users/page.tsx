import { fetchUsers } from "../../lib/api";
import UserList from "../../components/users/UserList";

export default async function UsersPage() {
  const users = await fetchUsers();
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <UserList initialUsers={users} />
    </main>
  );
}
