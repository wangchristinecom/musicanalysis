import { ComposerCard } from "@/components/ComposerCard";
import { composers } from "@/content";

export default function Home() {
  return (
    <>
      <h1 className="font-serif text-4xl sm:text-5xl">Learn harmony from the masters</h1>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        Each profile explains how a composer thinks harmonically, with short notated examples you can
        play. Roman numerals are printed under every bass note.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {composers.map((composer) => (
          <ComposerCard key={composer.slug} composer={composer} />
        ))}
      </div>
    </>
  );
}
