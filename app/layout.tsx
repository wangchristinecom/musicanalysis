import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Harmony Atlas",
  description:
    "Study the harmonic styles of great composers through playable, analysed examples.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      {/* Browser extensions (e.g. Feedly) inject attributes on <body> before hydration. */}
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <header className="border-b border-line">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-4">
            <Link href="/" className="mr-auto font-serif text-xl font-semibold">
              Harmony Atlas
            </Link>
            <Link href="/" className="text-sm hover:text-accent">
              Composers
            </Link>
            <Link href="/compare/" className="text-sm hover:text-accent">
              Compare
            </Link>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
