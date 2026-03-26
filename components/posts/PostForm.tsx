"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { postSchema, PostFormData } from "../../lib/validations";
import { useAppStore } from "../../store/useAppStore";
import { Post } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PostForm({ userId }: { userId: number }) {
  const { addPost } = useAppStore();
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            {...register("title")}
            placeholder="Enter post title"
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Body</label>
          <textarea
            {...register("body")}
            placeholder="Enter post body"
            rows={4}
            className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.body && (
            <p className="text-red-500 text-xs mt-1">{errors.body.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm w-fit"
        >
          Submit Post
        </button>

        {submitted && (
          <p className="text-green-600 text-sm">Post added successfully!</p>
        )}
      </form>
    </div>
  );
}
