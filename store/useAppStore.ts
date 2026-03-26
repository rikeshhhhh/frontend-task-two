import { create } from "zustand";
import { User, Post } from "../types";

interface AppState {
  users: User[];
  posts: Post[];
  setUsers: (users: User[]) => void;
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
}

export const useAppStore = create<AppState>((set) => ({
  users: [],
  posts: [],
  setUsers: (users) => set({ users }),
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));
