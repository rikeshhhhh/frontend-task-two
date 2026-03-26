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

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/users"
        className="text-blue-600 text-sm hover:underline mb-4 inline-block"
      >
        ← Back to Users
      </Link>
      <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
      <p className="text-gray-500 text-sm mb-6">{user?.email}</p>
      <PostsClient initialPosts={posts} userId={userId} />
    </main>
  );
}
