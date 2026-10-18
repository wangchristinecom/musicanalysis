import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScoreExample } from "@/components/ScoreExample";
import { getLesson, lessons } from "@/content/theory";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/theory/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${getLesson(slug)?.title} · Harmony Atlas` };
}

export default async function LessonPage({
  params,
}: PageProps<"/theory/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const index = lessons.indexOf(lesson);
  const previous = lessons[index - 1];
  const next = lessons[index + 1];

  return (
    <article>
      <p className="text-xs uppercase tracking-widest text-muted">
        <Link href="/theory/" className="hover:text-accent">
          Theory basics
        </Link>{" "}
        · Lesson {index + 1} of {lessons.length}
      </p>
      <h1 className="mt-1 font-serif text-4xl sm:text-5xl">{lesson.title}</h1>
      <p className="mt-1 font-serif text-2xl text-muted">
        ({lesson.germanTitle})
      </p>
      <p className="mt-4 max-w-3xl leading-relaxed">{lesson.summary}</p>

      {lesson.sections.map((section) => (
        <section key={section.heading}>
          <h2 className="mt-12 font-serif text-3xl">{section.heading}</h2>
          <div className="mt-4 max-w-3xl space-y-4 leading-relaxed">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {section.falseFriend && (
            <aside className="mt-6 max-w-3xl rounded-xl border border-accent/40 bg-card p-4">
              <p className="text-sm font-semibold text-accent">
                False friend (falscher Freund)
              </p>
              <p className="mt-1 text-sm leading-relaxed">
                {section.falseFriend}
              </p>
            </aside>
          )}

          {section.table && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    {section.table.columns.map((column) => (
                      <th
                        key={column}
                        className="border-b border-line p-3 font-semibold"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border-b border-line p-3 align-top"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {section.examples?.map((example) => (
            <div
              key={example.title}
              className="mt-6 rounded-xl border border-line p-5"
            >
              <h3 className="font-serif text-2xl">{example.title}</h3>
              <div className="mt-4">
                <ScoreExample abc={example.abc} />
              </div>
              <p className="mt-4 leading-relaxed">{example.explanation}</p>
            </div>
          ))}
        </section>
      ))}

      <nav className="mt-16 flex justify-between gap-4 border-t border-line pt-6 text-sm">
        {previous ? (
          <Link
            href={`/theory/${previous.slug}/`}
            className="hover:text-accent"
          >
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/theory/${next.slug}/`} className="hover:text-accent">
            {next.title} →
          </Link>
        )}
      </nav>
    </article>
  );
}
