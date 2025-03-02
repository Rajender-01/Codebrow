import TailwindTest from "@/components/TailwindTest";
import { getAllPosts } from "../data/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">JS & React Projects Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore tutorials, guides, and best practices for JavaScript and React
          development
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            slug={post.slug}
            title={post.title}
            description={post.description}
            image={post.image}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </div>
      <TailwindTest/>
    </main>
  );
}
