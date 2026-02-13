# Beautiful Air Grid

Implements a high-performance, Airtable-like interface capable of handling large datasets with real-time collaboration features.

## 🚀 Overview

The goal was to create a simplified version of a creative management tool used by marketing teams. Key requirements included rendering 50,000+ rows, real-time synchronization between users, and a clean architecture using a specific stack.

### Key Features

- **High Performance**: Uses **TanStack Virtual** to efficiently render extensive datasets (virtualization) with infinite scrolling capability.
- **Real-time Collaboration**: Changes made by one user (e.g., editing a cell) are instantly reflected for all other connected users via **Supabase Realtime**.
- **Robust Data Handling**: **TanStack Query** manages server state and caching, while **Immer** enables seamless optimistic updates for a snappy user experience.
- **Type Safety**: End-to-end type safety is enforced using **Zod** schemas for validation and **TypeScript**.
- **Modern UI**: Built with **Shadcn UI** and **Tailwind CSS** for a clean, accessible, and responsive design.

---

## 🛠 Tech Stack

The technology choices were made to prioritize performance, developer experience, and the specific requirements of the test task.

### Core

- **[Next.js 16](https://nextjs.org/)**: The framework for React, used for both the frontend and the Backend-for-Frontend (BFF) API layer.
- **[TypeScript](https://www.typescriptlang.org/)**: For static type checking and improved developer tooling.
- **[React 19](https://react.dev/)**: Leveraging the latest concurrent rendering features.

### Internationalization

- **[next-intl](https://next-intl-docs.vercel.app/)**: Handles internationalization (i18n) using an `as-needed` routing strategy (URLs are prefixed with the locale only when necessary).

### Data & State Management

- **[TanStack Query](https://tanstack.com/query/latest)**: Handles data fetching, caching, synchronization, and server state management.
- **[Immer](https://immerjs.github.io/immer/)**: Used for simplified immutable state logic, particularly for handling optimistic UI updates during edits.
- **[Zod](https://zod.dev/)**: For schema declaration and validation, ensuring data integrity from the API to the UI.

### UI & Performance

- **[TanStack Virtual](https://tanstack.com/virtual/latest)**: Essential for rendering large lists and tables by only rendering items currently in view (virtualization).
- **[React Concurrent Rendering](https://react.dev/blog/2022/03/29/react-v18#what-is-concurrent-react)**: Utilizes `useDeferredValue` in combination with virtualization to keep the UI responsive during heavy state updates (like filtering or sorting 50k+ rows).
- **[TanStack Table](https://tanstack.com/table/latest)**: Headless UI library for building complex and powerful tables.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Shadcn UI](https://ui.shadcn.com/)**: Re-usable components built with Radix UI and Tailwind CSS.
- **[ky-universal](https://github.com/sindresorhus/ky)**: Tiny and elegant HTTP client for making API requests from both the browser and Node.js.

### Backend & Infrastructure

- **[Supabase](https://supabase.com/)**: Used as the database and real-time engine.
  - _Decision_: Instead of a local PostgreSQL instance, Supabase was chosen to simplify the setup and provide out-of-the-box Realtime capabilities. It hosts 10,000+ mock records for this demo.
- **Docker Compose**: Containerization for consistent development and deployment environments.

---

## 🏗 Architecture & Decisions

### 1. Database & Realtime (Supabase)

To meet the requirement for "Real-time collaboration," **Supabase** was selected over a standard local PostgreSQL container.

- **Why?** It provides a PostgreSQL database with a built-in Realtime engine.
- **Implementation**: The client listens to database changes via Supabase Realtime channels. When a user edits a cell, the update is broadcasted immediately. Row Level Security (RLS) is configured to allow SELECT operations, ensuring data safety while enabling real-time subscriptions.

### 2. Backend-for-Frontend (BFF)

The project utilizes **Next.js API Routes** as the BFF layer.

- **Role**: It acts as an intermediary between the client and the Supabase backend/database logic, allowing for secure handling of requests and custom business logic before hitting the database.

### 3. Performance Strategy

- **Virtualization**: Rendering 50,000 rows in the DOM simultaneously would crash the browser. `TanStack Virtual` is used to render only the visible rows (plus a small buffer), ensuring smooth scrolling performance regardless of dataset size.
- **Optimistic Updates**: Using `TanStack Query` and `Immer`, the UI updates immediately when a user makes a change, without waiting for the server response. If the request fails, the state is rolled back.

---

## 📚 Documentation & Guidelines

This project includes a comprehensive set of documentation and rules located in the `docs` folder. These files serve as a guide for both developers and AI agents to maintain code consistency and architectural integrity.

- **`docs/rules/`**: Contains `.mdc` files that define:
  - **Architecture**: Core architectural principles and patterns.
  - **File Organization**: Strict file structure rules.
  - **Code Style**: Rules for JSX, Tailwind, and general coding standards.
  - **Project Core Rules**: High-level project guidelines.

These documents are essential for understanding the codebase structure and development workflow.

---

## 📦 Getting Started

### Prerequisites

- Docker & Docker Compose
- Node.js (v20+) (for local development without Docker)

### Environment Variables

For the purpose of this test assignment, the `.env` file containing the Supabase connection keys is committed to the repository. The Supabase project is a free-tier test instance with mock data.

### Option 1: Run with Docker (Recommended)

This will spin up the entire application stack in a container.

```bash
docker-compose up
```

- The application will be available at `http://localhost:3000`.
- Note: Since we are using a cloud-hosted Supabase instance, the Docker setup primarily handles the Next.js application environment.

### Option 2: Run Locally

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode using Turbo.
- **`npm run build`**: Builds the application for production.
- **`npm run start`**: Starts the production server (requires build).
- **`npm run lint:check`**: Runs ESLint to check for code quality issues.
- **`npm run lint:fix`**: Runs ESLint and automatically fixes fixable issues.
- **`npm run format:check`**: Checks if files are formatted according to Prettier rules.
- **`npm run format`**: Formats all files using Prettier.
- **`npm run types:check`**: Runs TypeScript compiler to check for type errors without emitting files.

---

_Project created by Michael._
