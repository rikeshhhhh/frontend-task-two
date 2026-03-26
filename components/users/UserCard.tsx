import Link from "next/link";
import { User } from "../../types";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center  shadow-sm">
      <div>
        <p className="font-semibold text-lg">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-400">{user.company.name}</p>
      </div>
      <Link
        href={`/users/${user.id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        View Posts
      </Link>
    </div>
  );
}
