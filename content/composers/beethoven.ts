import type { Composer } from "@/content/types";

export const beethoven: Composer = {
  slug: "beethoven",
  name: "Ludwig van Beethoven",
  dates: "1770–1827",
  era: "Classical to early Romantic",
  summary:
    "Beethoven uses harmony as drama. He builds tension with long dominant preparations, shocks with sudden key shifts, and treats a single dissonant chord as a motive that shapes a whole movement.",
  signatureTraits: [
    {
      dimension: "cadences",
      description:
        "Extended, emphatic cadences — codas that hammer the tonic — and deceptive cadences that postpone arrival.",
    },
    {
      dimension: "chromaticism",
      description:
        "Diminished-seventh chords for tension and the Neapolitan (♭II) for pathos, both used as structural events rather than colour.",
    },
    {
      dimension: "modulation",
      description:
        "Expands Classical key plans with third relations (I → ♭VI, I → III), often moving abruptly without a pivot chord.",
    },
    {
      dimension: "voiceLeading",
      description:
        "Classical voice-leading rules underneath, but bass lines and sforzando accents push hard against them.",
    },
    {
      dimension: "texture",
      description:
        "Wide registers, thick low chords, and sudden contrasts of dynamics and texture.",
    },
    {
      dimension: "rhythmHarmony",
      description:
        "Harmonic rhythm used for momentum: long static stretches (dominant pedals) that suddenly speed up into the cadence.",
    },
  ],
  examples: [
    {
      title: "Diminished seventh as dramatic gesture",
      source: "In the manner of the Pathétique Sonata, Op. 13, introduction",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=50
%%score {S B}
K:Cm
V:S clef=treble
V:B clef=bass
[V:S] [Gce]2 [=Ace]2 | [G=Bd]2 [Gce]2 |]
[V:B] "_i"[C,,C,]2 "_vii°7/V"[^F,,^F,]2 | "_V"[G,,G,]2 "_i"[C,,C,]2 |]`,
      explanation:
        "The upper voices barely move — G rises to A♮ — while the bass slides chromatically from C to F♯. The resulting diminished seventh leans hard toward the dominant. Beethoven's slow introductions use these chords to create suspense before the fast music begins.",
    },
    {
      title: "Sudden shift to ♭VI",
      source: "Third-related key motion, as heard throughout the middle-period works",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=60
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] [Ec]4 | [_Ec]4 | [Fd]4 | [Ec]4 |]
[V:B] "_I"[C,G,]4 | "_♭VI"[_A,,C]4 | "_V7"[G,,=B,]4 | "_I"[C,C]4 |]`,
      explanation:
        "C major drops to A♭ major, a chord borrowed from C minor. C, its common tone, is held throughout. The A♭ then falls a half step to G, so ♭VI works like a dramatic substitute for IV on the way to the dominant. The doubled C in ♭VI avoids parallel fifths into V7.",
    },
    {
      title: "Neapolitan sixth",
      source: "In the key of the Appassionata Sonata, Op. 57 (F minor)",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=56
%%score {S B}
K:Fm
V:S clef=treble
V:B clef=bass
[V:S] [FA]4 | [_GB]4 | [=EB]4 | [FA]4 |]
[V:B] "_i"[F,C]4 | "_N6"[B,,D]4 | "_V7"[C,C]4 | "_i"[F,,C]4 |]`,
      explanation:
        "G♭ major over its third (B♭) — the Neapolitan sixth — sits a half step above the tonic. G♭ falls a diminished third to E♮, the leading tone. The Appassionata opens by stating its theme in F minor and then repeating it in G♭ major, putting this relationship into the sonata's structure.",
    },
  ],
  listening: [
    { work: "Piano Sonata No. 8 'Pathétique', Op. 13", note: "Grave introduction full of diminished sevenths." },
    { work: "Piano Sonata No. 23 'Appassionata', Op. 57", note: "Neapolitan relationships drive the whole first movement." },
    { work: "Symphony No. 5, Op. 67", note: "The long dominant build-up linking the third and fourth movements." },
  ],
};
