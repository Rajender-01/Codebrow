import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'JS & React Projects Blog',
  description: 'A blog about JavaScript and React development projects, tutorials, and best practices',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen`}>
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                JS & React Blog
              </Link>
              <div className="flex gap-4">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              </div>
            </nav>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-white dark:bg-gray-800 mt-12 py-8 shadow-inner">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} JS & React Projects Blog. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
