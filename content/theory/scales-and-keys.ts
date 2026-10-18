import type { Lesson } from "@/content/theory/types";

export const scalesAndKeys: Lesson = {
  slug: "scales-and-keys",
  title: "Scales and keys",
  germanTitle: "Tonleitern und Tonarten",
  summary:
    "Major and the three forms of minor, relative and parallel keys, key signatures and the circle of fifths.",
  sections: [
    {
      heading: "Major and minor",
      paragraphs: [
        "A scale (Tonleiter) is a stepwise series of notes inside an octave. The major scale (Dur-Tonleiter) follows the pattern whole–whole–half–whole–whole–whole–half (Ganzton–Ganzton–Halbton–Ganzton–Ganzton–Ganzton–Halbton).",
        "The natural minor scale (natürliches or reines Moll, also äolisch) lowers the third, sixth and seventh notes of the major scale. The lowered third is what you hear first: it turns the bright major sound into the darker minor one.",
        "English writes keys the same way for both modes: 'C major', 'C minor'. German capitalises major keys and writes minor keys in lower case: C-Dur, c-Moll, Fis-Dur, fis-Moll.",
      ],
      examples: [
        {
          title: "C major vs C minor",
          abc: `X:1
M:4/4
L:1/8
Q:1/4=90
K:C
"^C major (C-Dur)"C D E F G A B c | "^C minor (c-Moll)"C D _E F G _A _B c |]`,
          explanation:
            "Both scales start on C. In the second bar E, A and B are lowered by a semitone, giving natural minor. Listen especially to the third note: E (major) against E♭ (minor).",
        },
      ],
    },
    {
      heading: "Three forms of minor",
      paragraphs: [
        "Natural minor has no leading tone (Leitton) — its seventh note is a whole tone below the tonic, which weakens the pull home. Harmonic minor (harmonisches Moll) raises the seventh to create one, at the cost of an augmented second (übermäßige Sekunde) between the sixth and seventh notes.",
        "Melodic minor (melodisches Moll) smooths that gap by raising both the sixth and seventh on the way up, and returns to natural minor on the way down.",
      ],
      examples: [
        {
          title: "A minor in three forms",
          abc: `X:1
M:4/4
L:1/8
Q:1/4=90
K:Am
"^natural (natürliches Moll)"A B c d e f g a | "^harmonic (harmonisches Moll)"A B c d e f ^g a | "^melodic, up (melodisches Moll, aufwärts)"A B c d e ^f ^g a | "^melodic, down (abwärts)"a =g =f e d c B A |]`,
          explanation:
            "Listen for the exotic leap F–G♯ in harmonic minor (the augmented second), and how melodic minor removes it by raising F as well. Coming down, melodic minor drops both notes back to natural minor.",
        },
      ],
    },
    {
      heading: "Relative and parallel keys",
      paragraphs: [
        "Every major key shares its key signature with a minor key a minor third lower: C major and A minor both have no sharps or flats. In English these are relative keys.",
        "Keys that share the same tonic — C major and C minor — are parallel keys in English.",
      ],
      falseFriend:
        "English 'relative' = German Parallele (a-Moll ist die Paralleltonart von C-Dur). English 'parallel' = German Variante or gleichnamige Tonart (c-Moll ist die Variante von C-Dur). The two words point in opposite directions.",
      examples: [
        {
          title: "Relative minor vs parallel minor",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
K:C
"^C major (C-Dur)"[CEG]4 | "^relative: A minor (Parallele a-Moll)"[A,CE]4 | "^C major (C-Dur)"[CEG]4 | "^parallel: C minor (Variante c-Moll)"[C_EG]4 |]`,
          explanation:
            "The A-minor chord shares two notes with C major (C and E) and lives in the same key signature. The C-minor chord keeps the same root but swaps E for E♭ — the same change as in the scale above.",
        },
      ],
    },
    {
      heading: "Key signatures and the circle of fifths",
      paragraphs: [
        "A key signature (Vorzeichnung, Generalvorzeichen) at the start of each line lists the sharps or flats of the key. Accidentals (Versetzungszeichen) written inside a bar apply only until the bar line.",
        "Sharps are added in the order F C G D A E B (Fis Cis Gis Dis Ais Eis His). Flats are added in the reverse order B E A D G C F — which in German reads B Es As Des Ges Ces Fes, because the first flat, B♭, is German B.",
        "Each step up a fifth adds a sharp; each step down a fifth adds a flat. Arranged in a circle this is the circle of fifths (Quintenzirkel).",
      ],
      table: {
        columns: ["Key signature", "Major (Dur)", "Relative minor (Moll)"],
        rows: [
          ["none", "C major (C-Dur)", "A minor (a-Moll)"],
          ["1♯", "G major (G-Dur)", "E minor (e-Moll)"],
          ["2♯", "D major (D-Dur)", "B minor (h-Moll)"],
          ["3♯", "A major (A-Dur)", "F♯ minor (fis-Moll)"],
          ["4♯", "E major (E-Dur)", "C♯ minor (cis-Moll)"],
          ["5♯", "B major (H-Dur)", "G♯ minor (gis-Moll)"],
          ["6♯", "F♯ major (Fis-Dur)", "D♯ minor (dis-Moll)"],
          ["1♭", "F major (F-Dur)", "D minor (d-Moll)"],
          ["2♭", "B♭ major (B-Dur)", "G minor (g-Moll)"],
          ["3♭", "E♭ major (Es-Dur)", "C minor (c-Moll)"],
          ["4♭", "A♭ major (As-Dur)", "F minor (f-Moll)"],
          ["5♭", "D♭ major (Des-Dur)", "B♭ minor (b-Moll)"],
          ["6♭", "G♭ major (Ges-Dur)", "E♭ minor (es-Moll)"],
        ],
      },
    },
  ],
};
