import "@/app/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
        {children}
        {/* footer */}
      </body>
    </html>
  );
}
