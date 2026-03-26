import { fetchPostsByUser, fetchUsers } from "../../../lib/api";
import PostsClient from "../../../components/posts/PostsClient";
import Link from "next/link";

export default async function UserPostsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userId = Number(id);

  const [posts, users] = await Promise.all([
    fetchPostsByUser(userId),
    fetchUsers(),
  ]);

  const user = users.find((u) => u.id === userId);
  const initials = user?.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="min-h-screen px-6 py-12 bg-[#F7F6F3]">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center border gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-lg"
        >
          Back to Users
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-6 flex items-center gap-5">
          <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-semibold flex-shrink-0">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-semibold text-gray-900">
              {user?.name}
            </h1>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              {user?.company.name}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-2xl font-semibold text-gray-900">
              {posts.length}
            </p>
            <p className="text-xs text-gray-400">posts</p>
          </div>
        </div>

        <PostsClient initialPosts={posts} userId={userId} />
      </div>
    </main>
  );
}
