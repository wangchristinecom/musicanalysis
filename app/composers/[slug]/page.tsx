import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScoreExample } from "@/components/ScoreExample";
import { composers, getComposer } from "@/content";
import { traitLabels } from "@/content/types";

export function generateStaticParams() {
  return composers.map((composer) => ({ slug: composer.slug }));
}

export async function generateMetadata({ params }: PageProps<"/composers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${getComposer(slug)?.name} · Harmony Atlas` };
}

const kindLabels = {
  excerpt: "Excerpt",
  reduction: "Harmonic reduction",
  illustration: "Style illustration",
};

export default async function ComposerPage({ params }: PageProps<"/composers/[slug]">) {
  const { slug } = await params;
  const composer = getComposer(slug);
  if (!composer) notFound();

  return (
    <article>
      <p className="text-xs uppercase tracking-widest text-muted">
        {composer.era} · {composer.dates}
      </p>
      <h1 className="mt-1 font-serif text-4xl sm:text-5xl">{composer.name}</h1>
      <p className="mt-4 max-w-3xl leading-relaxed">{composer.summary}</p>

      <h2 className="mt-12 font-serif text-3xl">Harmonic fingerprint</h2>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        {composer.signatureTraits.map((trait) => (
          <div key={trait.dimension} className="rounded-xl border border-line bg-card p-4">
            <dt className="text-sm font-semibold text-accent">{traitLabels[trait.dimension]}</dt>
            <dd className="mt-1 text-sm leading-relaxed">{trait.description}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mt-12 font-serif text-3xl">Examples</h2>
      <div className="mt-4 space-y-8">
        {composer.examples.map((example) => (
          <section key={example.title} className="rounded-xl border border-line p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-2xl">{example.title}</h3>
              <span className="rounded-full bg-card px-2.5 py-0.5 text-xs text-muted">
                {kindLabels[example.kind]}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted italic">{example.source}</p>
            <div className="mt-4">
              <ScoreExample abc={example.abc} />
            </div>
            <p className="mt-4 leading-relaxed">{example.explanation}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-12 font-serif text-3xl">Listen next</h2>
      <ul className="mt-4 space-y-3">
        {composer.listening.map((item) => (
          <li key={item.work}>
            <span className="font-medium">{item.work}</span>
            <span className="text-muted"> — {item.note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
