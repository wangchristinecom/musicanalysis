import { bach } from "@/content/composers/bach";
import { beethoven } from "@/content/composers/beethoven";
import { brahms } from "@/content/composers/brahms";
import { bruch } from "@/content/composers/bruch";

export const composers = [bach, beethoven, brahms, bruch];

export function getComposer(slug: string) {
  return composers.find((composer) => composer.slug === slug);
}
