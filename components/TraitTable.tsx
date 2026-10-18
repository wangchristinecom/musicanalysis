import Link from "next/link";
import type { Composer } from "@/content/types";
import { traitDimensions, traitLabels } from "@/content/types";

export function TraitTable({ composers }: { composers: Composer[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-card">
          <tr>
            <th className="p-3 text-left font-medium text-muted" />
            {composers.map((composer) => (
              <th key={composer.slug} className="p-3 text-left font-serif text-lg font-normal">
                <Link href={`/composers/${composer.slug}/`} className="hover:text-accent">
                  {composer.name.split(" ").at(-1)}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {traitDimensions.map((dimension) => (
            <tr key={dimension} className="border-t border-line align-top">
              <th className="p-3 text-left font-medium whitespace-nowrap">{traitLabels[dimension]}</th>
              {composers.map((composer) => (
                <td key={composer.slug} className="p-3 leading-relaxed">
                  {composer.signatureTraits.find((trait) => trait.dimension === dimension)?.description}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
