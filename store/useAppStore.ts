import { create } from "zustand";
import { User, Post } from "../types";

interface AppState {
  users: User[];
  posts: Post[];
  apiIsLoading: boolean;
  error: string | null;
  setUsers: (users: User[]) => void;
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  setApiIsLoading: (val: boolean) => void;
  setError: (msg: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  users: [],
  posts: [],
  apiIsLoading: false,
  error: null,
  setUsers: (users) => set({ users }),
  setPosts: (posts) => set({ posts }),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  setApiIsLoading: (val) => set({ apiIsLoading: val }),
  setError: (msg) => set({ error: msg }),
}));
