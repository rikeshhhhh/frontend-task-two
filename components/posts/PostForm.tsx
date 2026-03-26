"use client";

import { useForm } from "react-hook-form";
import { postSchema, PostFormData } from "../../lib/validations";
import { useAppStore } from "../../store/useAppStore";
import { Post } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PostForm({
  userId,
  onSuccess,
}: {
  userId: number;
  onSuccess?: () => void;
}) {
  const { addPost } = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: PostFormData) => {
    const newPost: Post = {
      id: Date.now(),
      userId,
      title: data.title,
      body: data.body,
    };
    addPost(newPost);

    const stored = localStorage.getItem(`posts_${userId}`);
    const existing: Post[] = stored ? JSON.parse(stored) : [];
    localStorage.setItem(
      `posts_${userId}`,
      JSON.stringify([newPost, ...existing]),
    );

    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">New Post</h3>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600">Title</label>
        <input
          {...register("title")}
          placeholder="Post title"
          className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
        />
        {errors.title && (
          <p className="text-xs text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600">Body</label>
        <textarea
          {...register("body")}
          placeholder="Write something..."
          rows={4}
          className="w-full px-3 py-2.5 rounded-lg text-sm border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none"
        />
        {errors.body && (
          <p className="text-xs text-red-500">{errors.body.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-5 py-2 rounded-lg text-xs font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Publish Post
        </button>
      </div>
    </form>
  );
}
