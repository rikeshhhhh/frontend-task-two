"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { Post } from "../../types";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import PostForm from "./PostForm";

const POSTS_PER_PAGE = 5;

export default function PostsClient({
  initialPosts,
  userId,
}: {
  initialPosts: Post[];
  userId: number;
}) {
  const { posts, setPosts } = useAppStore();
  const [currentPage, setCurrentPage] = useState(1);

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
    <div>
      <PostForm userId={userId} />
      <h2 className="text-lg font-semibold mt-8 mb-4">
        Posts ({userPosts.length})
      </h2>
      <div className="grid gap-4">
        {paginated.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
