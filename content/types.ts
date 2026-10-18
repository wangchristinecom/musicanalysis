export const traitDimensions = [
  "cadences",
  "chromaticism",
  "modulation",
  "voiceLeading",
  "texture",
  "rhythmHarmony",
] as const;

export type TraitDimension = (typeof traitDimensions)[number];

export const traitLabels: Record<TraitDimension, string> = {
  cadences: "Cadences",
  chromaticism: "Chromaticism",
  modulation: "Modulation",
  voiceLeading: "Voice leading",
  texture: "Texture",
  rhythmHarmony: "Rhythm & harmony",
};

export type HarmonicTrait = {
  dimension: TraitDimension;
  description: string;
};

export type ExampleKind = "excerpt" | "reduction" | "illustration";

export type MusicExample = {
  title: string;
  source: string;
  kind: ExampleKind;
  abc: string;
  explanation: string;
};

export type Composer = {
  slug: string;
  name: string;
  dates: string;
  era: string;
  summary: string;
  signatureTraits: HarmonicTrait[];
  examples: MusicExample[];
  listening: { work: string; note: string }[];
};
