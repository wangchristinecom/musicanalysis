import type { Metadata } from "next";
import { TraitTable } from "@/components/TraitTable";
import { composers } from "@/content";

export const metadata: Metadata = { title: "Compare composers · Harmony Atlas" };

export default function ComparePage() {
  return (
    <>
      <h1 className="font-serif text-4xl">Compare harmonic styles</h1>
      <p className="mt-3 mb-8 max-w-2xl text-muted">
        The same six dimensions for every composer. Read across a row to see how one aspect of harmony
        changed from Bach to Bruch.
      </p>
      <TraitTable composers={composers} />
    </>
  );
}
