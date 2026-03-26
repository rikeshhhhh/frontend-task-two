import { Post } from "../../types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h3 className="font-semibold capitalize mb-1">{post.title}</h3>
      <p className="text-sm text-gray-500 capitalize">{post.body}</p>
    </div>
  );
}
