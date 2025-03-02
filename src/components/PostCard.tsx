import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: string[];
}

export default function PostCard({ 
  slug, 
  title, 
  description, 
  image, 
  date,
  tags 
}: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`} className="block group">
      <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || '/images/placeholder.jpg'}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
            {description}
          </p>
          <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
            Read more
          </div>
        </div>
      </article>
    </Link>
  );
} 