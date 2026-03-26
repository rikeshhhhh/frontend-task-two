# User & Posts Dashboard

A full-featured User & Posts Dashboard built with **Next.js 15**, **TypeScript**, and **Zustand** as part of the Vrit Technologies & Skill Shikshya frontend interview assignment.

---

## 🚀 Live Demo

> [https://frontend-task-two-beta.vercel.app/]

## 📁 GitHub Repository

> [https://github.com/rikeshhhhh/frontend-task-two]

---

## 🛠️ Tech Stack

| Technology              | Purpose                                           |
| ----------------------- | ------------------------------------------------- |
| Next.js 15 (App Router) | React framework — SSR, routing, server components |
| TypeScript              | Type safety across all components                 |
| Tailwind CSS            | Utility-first responsive styling                  |
| Zustand                 | Global state management                           |
| Zod                     | Schema-based form validation                      |
| React Hook Form         | Form handling with Zod resolver                   |
| JSONPlaceholder API     | Dummy users and posts data                        |

---

## ✨ Features

- **User List Page** — Fetches 10 users via SSR (Server Components), displays name, email, and company
- **Search / Filter** — Real-time client-side filtering by name or email, no API calls
- **User Posts Page** — Dynamic route `/users/[id]` showing all posts for a selected user
- **Pagination** — 5 posts per page with numbered navigation buttons
- **Add New Post Form** — Validated form with Zod, stores posts in localStorage and Zustand
- **Loading States** — Next.js `loading.tsx` with spinner per route segment
- **Error States** — Next.js `error.tsx` with friendly error message per route segment

---

## 📂 Folder Structure

```
task-two/
├── app/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   └── users/
│       ├── loading.tsx           # Loading state
│       ├── error.tsx             # Error state
│       └── [id]/
│           ├── page.tsx          # User posts page (SSR)
│           ├── loading.tsx       # Loading state
│           └── error.tsx         # Error state
├── components/
│   ├── ui/
│   │   ├── Spinner.tsx           # Reusable loading spinner
│   │   └── ErrorMessage.tsx      # Reusable error message
│   ├── users/
│   │   ├── UserList.tsx          # User list with search logic
│   │   ├── UserCard.tsx          # Single user card
│   │   └── SearchBar.tsx         # Search input component
│   └── posts/
│       ├── PostsClient.tsx       # Posts page client wrapper
│       ├── PostCard.tsx          # Single post card
│       ├── PostForm.tsx          # Add new post form
│       └── Pagination.tsx        # Pagination controls
├── lib/
│   ├── api.ts                    # All fetch functions
│   └── validations.ts            # Zod schemas
├── store/
│   └── useAppStore.ts            # Zustand store
└── types/
|   └── index.ts                  # TypeScript interfaces
└── constants/
    └── index.ts                  # Constants Variable
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rikeshhhhh/frontend-task-two

# Navigate into the project
cd task-two

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ API Endpoints Used

| Function               | Endpoint                 |
| ---------------------- | ------------------------ |
| `fetchUsers()`         | `GET /users`             |
| `fetchPostsByUser(id)` | `GET /posts?userId={id}` |

Base URL: `https://jsonplaceholder.typicode.com`

---

## 📦 State Management

Zustand store (`store/useAppStore.ts`) manages:

- `users` — list of all users
- `posts` — list of posts (API + locally added)
- `apiIsLoading` — boolean loading flag
- `error` — nullable error message

---

## ✅ Requirements Checklist

- [x] User list with name, email, company name
- [x] View Posts button navigating to `/users/[id]`
- [x] Search bar filtering by name and email (instant, client-side)
- [x] Loading state — `Loading users...`
- [x] Error state — `Something went wrong`
- [x] Add new post form with title and body
- [x] Zod form validation
- [x] Zustand state management
- [x] SSR using Next.js Server Components
- [x] Pagination for posts
- [x] localStorage persistence for new posts

---

## 👤 Author

> Rikesh Shrestha

---

_Built for Vrit Technologies & Skill Shikshya — Frontend Interview Assignment_
