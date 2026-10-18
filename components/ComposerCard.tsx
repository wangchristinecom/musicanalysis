import Link from "next/link";
import type { Composer } from "@/content/types";

export function ComposerCard({ composer }: { composer: Composer }) {
  return (
    <Link
      href={`/composers/${composer.slug}/`}
      className="block rounded-xl border border-line bg-card p-6 hover:border-accent transition-colors"
    >
      <p className="text-xs uppercase tracking-widest text-muted">{composer.era}</p>
      <h2 className="mt-1 font-serif text-2xl">{composer.name}</h2>
      <p className="text-sm text-muted">{composer.dates}</p>
      <p className="mt-3 text-sm leading-relaxed">{composer.summary}</p>
    </Link>
  );
}
