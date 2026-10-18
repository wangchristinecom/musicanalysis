import { cadences } from "@/content/theory/cadences";
import { chords } from "@/content/theory/chords";
import { harmonicFunction } from "@/content/theory/harmonic-function";
import { intervals } from "@/content/theory/intervals";
import { nonChordTones } from "@/content/theory/non-chord-tones";
import { notes } from "@/content/theory/notes";
import { scalesAndKeys } from "@/content/theory/scales-and-keys";

export const lessons = [
  notes,
  intervals,
  scalesAndKeys,
  chords,
  harmonicFunction,
  cadences,
  nonChordTones,
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
