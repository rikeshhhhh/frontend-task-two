import Link from "next/link";
import { User } from "../../types";
import { avatarColors } from "../../constant";

export default function UserCard({
  user,
  index,
}: {
  user: User;
  index: number;
}) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const color = avatarColors[index % avatarColors.length];

  return (
    <div className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-150">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-semibold ${color}`}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
          <p className="text-xs text-gray-400 font-mono">{user.company.name}</p>
        </div>
      </div>
      <Link
        href={`/users/${user.id}`}
        className="px-4 py-2 rounded-lg text-xs font-medium bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 flex-shrink-0"
      >
        View Posts
      </Link>
    </div>
  );
}
