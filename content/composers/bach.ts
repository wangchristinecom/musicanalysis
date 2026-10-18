import type { Composer } from "@/content/types";

export const bach: Composer = {
  slug: "bach",
  name: "Johann Sebastian Bach",
  dates: "1685–1750",
  era: "Late Baroque",
  summary:
    "Bach's harmony grows out of counterpoint: every chord is the meeting point of independent melodic lines. His chorales set the template for functional four-part writing, and his sequences show how a single pattern can carry music through a whole circle of keys.",
  signatureTraits: [
    {
      dimension: "cadences",
      description:
        "Strong, formulaic cadences that mark each chorale phrase — often ii6/5 or IV leading to V, with a 4–3 suspension over the dominant.",
    },
    {
      dimension: "chromaticism",
      description:
        "Chromatic notes arise from voice leading: secondary dominants, chromatic passing tones, and expressive lament basses. The Picardy third brightens minor-key endings.",
    },
    {
      dimension: "modulation",
      description:
        "Moves to closely related keys (dominant, relative major/minor), often through descending-fifth sequences.",
    },
    {
      dimension: "voiceLeading",
      description:
        "Each voice is a real melody. Tendency tones resolve, sevenths are prepared and fall by step, and parallel fifths and octaves are avoided.",
    },
    {
      dimension: "texture",
      description:
        "Four-part chorale texture and imitative counterpoint (fugue, invention). Harmony is often implied by a single line, as in the solo cello suites.",
    },
    {
      dimension: "rhythmHarmony",
      description:
        "Fast, regular harmonic rhythm — often a new chord on every beat — over a steady walking bass.",
    },
  ],
  examples: [
    {
      title: "Chorale cadence formula",
      source: "In the style of the four-part chorales",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=66
%%score {S B}
K:G
V:S clef=treble
V:B clef=bass
[V:S] [Bd] [Gc] [Gc] [FA] | [GB]4 |]
[V:B] "_I"[G,D] "_IV6"[E,E] "_ii6/5"[C,A,] "_V"[D,A,] | "_I"[G,,G,]4 |]`,
      explanation:
        "The alto's G is held as a common tone into ii6/5, where it becomes a prepared seventh, then falls by step to F♯ over the dominant. The bass rises by step to V, the classic pre-cadential approach.",
    },
    {
      title: "Picardy third",
      source: "Common ending of minor-key chorales",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=66
%%score {S B}
K:Gm
V:S clef=treble
V:B clef=bass
[V:S] [GB] [Gc] [^FA]2 | [G=B]4 |]
[V:B] "_i"[G,D] "_iv"[C,E] "_V"[D,D]2 | "_I"[G,,D]4 |]`,
      explanation:
        "A G-minor phrase ends on a G-major chord. The raised third (B♮) gives a minor-key piece a bright, resolved final sonority.",
    },
    {
      title: "Prelude in C — opening harmonies",
      source: "Well-Tempered Clavier I, Prelude in C major, BWV 846, bars 1–4",
      kind: "reduction",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=48
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] [Gce]4 | [Adf]4 | [Gdf]4 | [Gce]4 |]
[V:B] "_I"[CE]4 | "_ii4/2"[CD]4 | "_V6/5"[B,D]4 | "_I"[CE]4 |]`,
      explanation:
        "Bach arpeggiates each of these five-note chords across a bar. Block chords make the voice leading visible: the bass C holds while the upper voices move to ii4/2, then the bass falls to B for V6/5 and every voice returns by step to I.",
    },
  ],
  listening: [
    { work: "Well-Tempered Clavier, Book I", note: "Preludes show pure harmonic progression; fugues show counterpoint generating harmony." },
    { work: "St Matthew Passion, BWV 244", note: "The 'Passion chorale' harmonized several different ways." },
    { work: "Chaconne from Partita No. 2 for solo violin, BWV 1004", note: "A complete harmonic world implied by one melodic instrument." },
  ],
};
