import "@/app/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import NewsletterBanner from "@/components/sections/NewsletterBanner";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata = {
  title: "Codebrow",
  description:
    "A blog about JavaScript and React development projects, tutorials, and best practices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-[var(--dark-gray)] text-gray-900 dark:text-gray-100 min-h-screen`}
      >
        <Header />
        <NewsletterBanner />
        {children}
        {/* footer */}
      </body>
    </html>
  );
}
