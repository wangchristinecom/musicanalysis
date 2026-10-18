import type { Lesson } from "@/content/theory/types";

export const intervals: Lesson = {
  slug: "intervals",
  title: "Intervals",
  germanTitle: "Intervalle",
  summary:
    "The distance between two notes: how to count it, how to name its quality, and how augmented and diminished intervals translate.",
  sections: [
    {
      heading: "Counting intervals",
      paragraphs: [
        "An interval (Intervall) is the distance between two notes. Its number counts letter names, including both ends: C up to E is a third because it spans C–D–E. Notes played one after another form a melodic interval (melodisches Intervall); notes played together form a harmonic interval (harmonisches Intervall).",
        "The smallest step in Western music is the semitone (Halbton); two semitones make a whole tone (Ganzton). The number tells you the letter distance, and the quality — perfect, major, minor, augmented or diminished — tells you the exact number of semitones.",
      ],
      table: {
        columns: ["Semitones", "English", "German", "From C"],
        rows: [
          ["0", "perfect unison (P1)", "reine Prime", "C–C"],
          ["1", "minor second (m2)", "kleine Sekunde", "C–D♭"],
          ["2", "major second (M2)", "große Sekunde", "C–D"],
          ["3", "minor third (m3)", "kleine Terz", "C–E♭"],
          ["4", "major third (M3)", "große Terz", "C–E"],
          ["5", "perfect fourth (P4)", "reine Quarte", "C–F"],
          [
            "6",
            "augmented fourth (A4) / diminished fifth (d5) — the tritone",
            "übermäßige Quarte / verminderte Quinte — Tritonus",
            "C–F♯ / C–G♭",
          ],
          ["7", "perfect fifth (P5)", "reine Quinte", "C–G"],
          ["8", "minor sixth (m6)", "kleine Sexte", "C–A♭"],
          ["9", "major sixth (M6)", "große Sexte", "C–A"],
          ["10", "minor seventh (m7)", "kleine Septime", "C–B♭"],
          ["11", "major seventh (M7)", "große Septime", "C–B"],
          ["12", "perfect octave (P8)", "reine Oktave", "C–C′"],
        ],
      },
      examples: [
        {
          title: "Every interval above C",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=80
K:C
"^m2"[C_D]2 "^M2"[C=D]2 | "^m3"[C_E]2 "^M3"[C=E]2 | "^P4"[CF]2 "^A4/d5"[C^F]2 | "^P5"[CG]2 "^m6"[C_A]2 | "^M6"[C=A]2 "^m7"[C_B]2 | "^M7"[C=B]2 "^P8"[Cc]2 |]`,
          explanation:
            "Each interval grows by one semitone. Listen for the smooth, stable sound of thirds, sixths, fifths and octaves against the rub of seconds, sevenths and the tritone.",
        },
      ],
    },
    {
      heading: "Perfect, major and minor",
      paragraphs: [
        "Unisons, fourths, fifths and octaves are perfect (rein). They have only one 'normal' size.",
        "Seconds, thirds, sixths and sevenths come in two normal sizes: major (groß) and minor (klein). A minor interval is one semitone smaller than the major one.",
        "Perfect intervals and thirds and sixths are consonances (Konsonanzen): they sound stable. Seconds, sevenths and the tritone are dissonances (Dissonanzen): they create tension that wants to resolve (sich auflösen).",
      ],
      examples: [
        {
          title: "Major third vs minor third",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=80
K:C
"^major third (große Terz)"C E [CE]2 | "^minor third (kleine Terz)"C _E [C_E]2 |]`,
          explanation:
            "Both are thirds (C–E), but the minor third is one semitone narrower. This single semitone is what separates a major chord from a minor one — the major third sounds open and bright, the minor third darker.",
        },
      ],
    },
    {
      heading: "Augmented and diminished",
      paragraphs: [
        "Make a perfect or major interval one semitone larger and it becomes augmented (übermäßig). Make a perfect or minor interval one semitone smaller and it becomes diminished (vermindert). So C–E♯ is an augmented third (übermäßige Terz) and C♯–E♭ is a diminished third (verminderte Terz).",
        "The spelling matters even when the sound is the same. C–G♯ is an augmented fifth (übermäßige Quinte) because it spans five letters; C–A♭ is a minor sixth (kleine Sexte) because it spans six. On the piano they are the same keys.",
        "Two augmented and diminished intervals appear constantly in real music: the augmented second (übermäßige Sekunde) between the sixth and seventh notes of harmonic minor, and the diminished seventh (verminderte Septime) that gives the diminished seventh chord its name.",
      ],
      table: {
        columns: ["English", "Abbreviation", "German"],
        rows: [
          ["perfect", "P", "rein"],
          ["major", "M", "groß"],
          ["minor", "m", "klein"],
          ["augmented", "A / aug / +", "übermäßig"],
          ["diminished", "d / dim / °", "vermindert"],
        ],
      },
      examples: [
        {
          title: "Same sound, different names",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
K:C
"^augmented fourth (übermäßige Quarte)"[C^F]4 | "^diminished fifth (verminderte Quinte)"[C_G]4 | "^augmented fifth (übermäßige Quinte)"[C^G]4 | "^minor sixth (kleine Sexte)"[C_A]4 |]`,
          explanation:
            "Bars 1 and 2 sound identical, and so do bars 3 and 4. The name depends on the letters: F♯ is a kind of fourth above C, G♭ a kind of fifth. In context, the augmented fourth usually resolves outward and the diminished fifth inward.",
        },
      ],
    },
    {
      heading: "Inverting intervals",
      paragraphs: [
        "Inverting an interval (Umkehrung) means moving the lower note up an octave. The two numbers always add up to nine — a third becomes a sixth, a second becomes a seventh — and the quality flips: major ↔ minor, augmented ↔ diminished, while perfect stays perfect. German calls the pair Komplementärintervalle.",
      ],
    },
  ],
};
