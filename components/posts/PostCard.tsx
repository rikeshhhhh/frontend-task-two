import { Post } from "../../types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 px-5 py-4 hover:border-gray-300 hover:shadow-sm transition-all duration-150">
      <p className="text-xs font-mono text-gray-400 mb-1">#{post.id}</p>
      <h3 className="text-sm font-medium text-gray-900 capitalize mb-1 leading-snug">
        {post.title}
      </h3>
      <p className="text-xs text-gray-500 capitalize leading-relaxed line-clamp-2">
        {post.body}
      </p>
    </div>
  );
}
