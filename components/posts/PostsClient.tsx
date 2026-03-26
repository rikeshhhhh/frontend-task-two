"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { Post } from "../../types";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import PostForm from "./PostForm";
import { POSTS_PER_PAGE } from "../../constant";

export default function PostsClient({
  initialPosts,
  userId,
}: {
  initialPosts: Post[];
  userId: number;
}) {
  const { posts, setPosts } = useAppStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`posts_${userId}`);
    const localPosts: Post[] = stored ? JSON.parse(stored) : [];
    setPosts([...localPosts, ...initialPosts]);
  }, [initialPosts, userId, setPosts]);

  const userPosts = posts.filter((p) => p.userId === userId);
  const totalPages = Math.ceil(userPosts.length / POSTS_PER_PAGE);
  const paginated = userPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Posts</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {userPosts.length} total posts
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          {showForm ? "Cancel" : "+ New Post"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <PostForm userId={userId} onSuccess={() => setShowForm(false)} />
        </div>
      )}

      <div className="space-y-3">
        {paginated.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
}
