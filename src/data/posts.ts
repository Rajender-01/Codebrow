import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks: A Comprehensive Guide',
    description: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
    date: '2023-10-15',
    image: '/images/posts/react-hooks.jpg',
    content: `
# Understanding React Hooks

React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. They allow you to "hook into" React state and lifecycle features from function components.

## Why Hooks?

Before Hooks, if you needed state in a component, you had to use a class component. This led to complex components that were difficult to reuse and understand. Hooks solve this problem by allowing you to:

- Use state in functional components
- Extract stateful logic from components for reuse
- Compose multiple hooks together

## Common Hooks

### useState

The \`useState\` hook lets you add state to functional components:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect

The \`useEffect\` hook lets you perform side effects in function components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useContext

The \`useContext\` hook lets you subscribe to React context without introducing nesting:

\`\`\`jsx
import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
\`\`\`

## Custom Hooks

You can create your own Hooks to reuse stateful logic between different components:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}
\`\`\`

## Conclusion

React Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They offer a powerful way to compose behavior in your components and represent a paradigm shift in how we write React applications.
    `,
    tags: ['React', 'Hooks', 'JavaScript', 'Frontend']
  },
  {
    id: '2',
    slug: 'building-a-nextjs-app',
    title: 'Building a Modern Web Application with Next.js',
    description: 'A step-by-step guide to creating a full-stack application using Next.js, React, and Tailwind CSS.',
    date: '2023-11-02',
    image: '/images/posts/nextjs-app.jpg',
    content: `
# Building a Modern Web Application with Next.js

Next.js has become one of the most popular frameworks for building React applications. It provides a great developer experience with features like server-side rendering, static site generation, and API routes.

## Getting Started

First, create a new Next.js project:

\`\`\`bash
npx create-next-app my-nextjs-app
cd my-nextjs-app
npm run dev
\`\`\`

This will create a new Next.js project and start the development server at http://localhost:3000.

## Project Structure

A typical Next.js project structure looks like this:

\`\`\`
my-nextjs-app/
├── public/          # Static assets
├── src/             # Source code
│   ├── app/         # App router
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/  # React components
│   └── lib/         # Utility functions
├── next.config.js   # Next.js configuration
└── package.json     # Project dependencies
\`\`\`

## Routing in Next.js

Next.js uses a file-system based router. Files in the \`app\` directory automatically become routes:

- \`app/page.tsx\` → \`/\`
- \`app/about/page.tsx\` → \`/about\`
- \`app/blog/[slug]/page.tsx\` → \`/blog/:slug\`

## Data Fetching

Next.js provides several ways to fetch data:

### Server Components (Default in App Router)

\`\`\`jsx
// app/users/page.tsx
async function getUsers() {
  const res = await fetch('https://api.example.com/users');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### API Routes

\`\`\`jsx
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello World' });
}
\`\`\`

## Styling with Tailwind CSS

Next.js works great with Tailwind CSS:

\`\`\`jsx
// app/page.tsx
export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to My Next.js App
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700">
          This is a modern web application built with Next.js and Tailwind CSS.
        </p>
      </div>
    </main>
  );
}
\`\`\`

## Deployment

Next.js applications can be easily deployed to Vercel:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Conclusion

Next.js provides an excellent framework for building modern web applications. With features like server-side rendering, API routes, and great developer experience, it's a powerful choice for your next project.
    `,
    tags: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Full-stack']
  },
  {
    id: '3',
    slug: 'typescript-tips-for-react-developers',
    title: 'TypeScript Tips for React Developers',
    description: 'Improve your React code quality with these TypeScript best practices and patterns.',
    date: '2023-12-05',
    image: '/images/posts/typescript-tips.jpg',
    content: `
# TypeScript Tips for React Developers

TypeScript has become the standard for type-safe JavaScript development, especially in React applications. Here are some tips to help you use TypeScript effectively with React.

## Typing Component Props

Always define interfaces for your component props:

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={'btn btn-' + variant}
    >
      {text}
    </button>
  );
};
\`\`\`

## Children Props

Type components that accept children:

\`\`\`tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};
\`\`\`

## Event Handlers

Properly type event handlers:

\`\`\`tsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setName(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Submit form
};
\`\`\`

## useState with TypeScript

Type your state properly:

\`\`\`tsx
// For primitive types
const [count, setCount] = useState<number>(0);

// For complex types
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
\`\`\`

## useRef with TypeScript

Type your refs:

\`\`\`tsx
const inputRef = useRef<HTMLInputElement>(null);

// Later in your component
<input ref={inputRef} type="text" />

// Access the input element
const focusInput = () => {
  inputRef.current?.focus();
};
\`\`\`

## Custom Hooks

Type your custom hooks:

\`\`\`tsx
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}
\`\`\`

## Generic Components

Create reusable generic components:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
<List
  items={['Apple', 'Banana', 'Orange']}
  renderItem={(item) => <span>{item}</span>}
/>
\`\`\`

## Conclusion

TypeScript adds a layer of type safety to your React applications, helping catch errors during development rather than at runtime. By following these tips, you can write more robust and maintainable React code.
    `,
    tags: ['TypeScript', 'React', 'JavaScript', 'Frontend', 'Best Practices']
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 