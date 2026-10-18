import type { Metadata } from "next";
import Link from "next/link";
import { lessons } from "@/content/theory";

export const metadata: Metadata = { title: "Theory basics · Harmony Atlas" };

export default function TheoryPage() {
  return (
    <>
      <h1 className="font-serif text-4xl sm:text-5xl">Theory basics</h1>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        The building blocks you need for the composer profiles, from note names
        to cadences. Every term is given in English with its German equivalent
        in brackets, and the examples can be played so you can hear each
        difference.
      </p>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2">
        {lessons.map((lesson, index) => (
          <li key={lesson.slug}>
            <Link
              href={`/theory/${lesson.slug}/`}
              className="block h-full rounded-xl border border-line bg-card p-6 hover:border-accent transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-muted">
                Lesson {index + 1}
              </p>
              <h2 className="mt-1 font-serif text-2xl">{lesson.title}</h2>
              <p className="text-sm text-muted">({lesson.germanTitle})</p>
              <p className="mt-3 text-sm leading-relaxed">{lesson.summary}</p>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
