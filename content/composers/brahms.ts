import type { Composer } from "@/content/types";

export const brahms: Composer = {
  slug: "brahms",
  name: "Johannes Brahms",
  dates: "1833–1897",
  era: "Romantic",
  summary:
    "Brahms combines Romantic harmonic richness with Classical and Baroque discipline. His music is dense and autumnal: chords borrowed from the parallel minor, metres that blur across the barline, and inner voices that are as carefully composed as the melody.",
  signatureTraits: [
    {
      dimension: "cadences",
      description:
        "Plagal and modally coloured cadences (I–iv–I), and cadences softened or delayed by hemiola.",
    },
    {
      dimension: "chromaticism",
      description:
        "Modal mixture is everywhere — minor iv and ♭VI inside major keys — along with major/minor ambiguity built into his themes.",
    },
    {
      dimension: "modulation",
      description:
        "Third relations and tonal ambiguity at the start of movements, but every move is anchored in a clear long-range key plan.",
    },
    {
      dimension: "voiceLeading",
      description:
        "Rigorous counterpoint learned from Bach. Bass lines often move in contrary motion to the melody, and inner voices are thick, carefully composed lines.",
    },
    {
      dimension: "texture",
      description:
        "Rich mid-to-low register: thirds and sixths doubled, wide-spaced arpeggios in the piano writing.",
    },
    {
      dimension: "rhythmHarmony",
      description:
        "Hemiola and syncopation shift the felt metre, so harmonic changes land against the written barline.",
    },
  ],
  examples: [
    {
      title: "Hemiola at the cadence",
      source: "A cadential device Brahms uses constantly in triple metre",
      kind: "illustration",
      abc: `X:1
M:3/4
L:1/4
Q:1/4=104
%%score {S B}
K:D
V:S clef=treble
V:B clef=bass
[V:S] f2 a | g2 f | "^hemiola"e2 d- | d c2 | d3 |]
[V:B] "_I"D,3 | "_IV"G,3 | "_ii6"G,2 "_I6/4"A,- | A, "_V"A,2 | "_I"D,3 |]`,
      explanation:
        "In bars 3–4 the half notes cut across the barline, so two bars of 3/4 are heard as one bar of 3/2. The cadence feels broadened and weighty without any change of tempo.",
    },
    {
      title: "The F–A♭–F motto",
      source: "After the motto of Symphony No. 3 in F major, Op. 90",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=60
%%score {S B}
K:F
V:S clef=treble
V:B clef=bass
[V:S] [Acf]4 | [=Bd_a]4 | [Acf]4 |]
[V:B] "_I"[F,,F,]4 | "_ct°7"[F,,F,]4 | "_I"[F,,F,]4 |]`,
      explanation:
        "The motto's middle note, A♭, contradicts the A♮ of F major. Brahms sets the major/minor ambiguity of the whole symphony in its opening notes. Here A♭ is harmonized as a common-tone diminished seventh (B–D–F–A♭) over the held tonic F.",
    },
    {
      title: "Plagal cadence with minor iv",
      source: "Modal mixture as in the choral works (e.g. A German Requiem)",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=56
%%score {S B}
K:D
V:S clef=treble
V:B clef=bass
[V:S] [Fd]4 | [Gd]2 [Gd]2 | [Fd]4 |]
[V:B] "_I"[D,A,]4 | "_IV"[G,,B,]2 "_iv"[G,,_B,]2 | "_I"[D,A,]4 |]`,
      explanation:
        "The tenor's B falls chromatically to B♭, turning IV into minor iv, and then to A. That melancholy half-step descent in an inner voice, inside a major key, is one of the most recognisable sounds in Brahms.",
    },
  ],
  listening: [
    {
      work: "Symphony No. 3 in F major, Op. 90",
      note: "The F–A♭–F motto and major/minor conflict.",
    },
    {
      work: "Ein deutsches Requiem, Op. 45",
      note: "Plagal cadences and modal mixture in the choral writing.",
    },
    {
      work: "Intermezzo in A major, Op. 118 No. 2",
      note: "Dense inner voices and intimate harmonic colour.",
    },
  ],
};
