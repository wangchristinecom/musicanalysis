import { bach } from "@/content/composers/bach";
import { beethoven } from "@/content/composers/beethoven";
import { brahms } from "@/content/composers/brahms";
import { bruch } from "@/content/composers/bruch";
import { haendel } from "@/content/composers/haendel";

export const composers = [bach, haendel, beethoven, brahms, bruch];

export function getComposer(slug: string) {
  return composers.find((composer) => composer.slug === slug);
}
