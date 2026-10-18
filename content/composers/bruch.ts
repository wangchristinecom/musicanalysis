import type { Composer } from "@/content/types";

export const bruch: Composer = {
  slug: "bruch",
  name: "Max Bruch",
  dates: "1838–1920",
  era: "Romantic",
  summary:
    "Bruch was a conservative Romantic in the line of Mendelssohn. His harmony is clear and diatonic, with slow harmonic rhythm and long pedal points, so a broad, singing melody can carry the expression. He is a useful contrast to Brahms, his contemporary.",
  signatureTraits: [
    {
      dimension: "cadences",
      description:
        "Clear authentic cadences, often prolonged with a cadential 6/4 for a broad, singing arrival.",
    },
    {
      dimension: "chromaticism",
      description:
        "Restrained: chromaticism appears mostly as melodic colour (appoggiaturas, neighbour notes) rather than structural harmony.",
    },
    {
      dimension: "modulation",
      description:
        "Conventional key relationships (relative and dominant keys), reached with smooth pivot chords.",
    },
    {
      dimension: "voiceLeading",
      description:
        "Smooth, mostly homophonic accompaniment that supports the solo line.",
    },
    {
      dimension: "texture",
      description:
        "Melody and accompaniment: a soloist (violin, cello) over sustained strings or rippling arpeggios.",
    },
    {
      dimension: "rhythmHarmony",
      description:
        "Slow harmonic rhythm with long tonic and dominant pedals, giving the melody room to breathe.",
    },
  ],
  examples: [
    {
      title: "Singing line over a tonic pedal",
      source:
        "In the key and manner of the Adagio from Violin Concerto No. 1, Op. 26 (E♭ major)",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=52
%%score {S B}
K:Eb
V:S clef=treble
V:B clef=bass
[V:S] G2 B2 | c2 A2 | B2 d2 | e4 |]
[V:B] "_I"[E,B,G]4 | "_IV6/4"[E,A,C]4 | "_V7"[B,,F,A,]4 | "_I"[E,B,G]4 |]`,
      explanation:
        "The bass holds E♭ while the upper voices move to IV6/4 and back toward the dominant. Little harmonic activity happens — the chords simply give the melody room — which is typical of Bruch's lyrical slow movements.",
    },
    {
      title: "Plain harmony under a chant melody",
      source: "In the key of Kol Nidrei, Op. 47 (D minor)",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=50
%%score {S B}
K:Dm
V:S clef=treble
V:B clef=bass
[V:S] [Fd]4 | [Gd]4 | [E^c]4 | [Fd]4 |]
[V:B] "_i"[D,A,]4 | "_iv6"[B,,G,]4 | "_V"[A,,A,]4 | "_i"[D,A,]4 |]`,
      explanation:
        "Bruch's Kol Nidrei is built on a traditional synagogue melody. He sets it with simple tonic, subdominant and dominant harmony, letting the melody carry the expression. Brahms would more likely colour the same chords with mixture and thick inner voices.",
    },
  ],
  listening: [
    {
      work: "Violin Concerto No. 1 in G minor, Op. 26",
      note: "The Adagio is a model of long-breathed melody over slow harmony.",
    },
    {
      work: "Kol Nidrei, Op. 47",
      note: "Cello and orchestra; a traditional melody set with restrained harmony.",
    },
    {
      work: "Scottish Fantasy, Op. 46",
      note: "Folk melodies treated with Romantic orchestral warmth.",
    },
  ],
};
