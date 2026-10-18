import type { Lesson } from "@/content/theory/types";

export const chords: Lesson = {
  slug: "chords",
  title: "Chords",
  germanTitle: "Akkorde",
  summary:
    "The four kinds of triad, inversions and their figured-bass names, and the seventh chords you will meet most often.",
  sections: [
    {
      heading: "Four kinds of triad",
      paragraphs: [
        "A triad (Dreiklang) stacks two thirds: a root (Grundton), a third (Terz) and a fifth (Quinte). Which thirds you stack decides its quality.",
        "Major (Durdreiklang): major third + minor third, perfect fifth. Minor (Molldreiklang): minor third + major third, perfect fifth. Diminished (verminderter Dreiklang): two minor thirds, diminished fifth. Augmented (übermäßiger Dreiklang): two major thirds, augmented fifth.",
        "In a major key, the chords on degrees 1, 4 and 5 are major, on 2, 3 and 6 minor, and on 7 diminished. The augmented triad appears on the third degree of harmonic minor.",
      ],
      table: {
        columns: ["Chord symbol", "English", "German", "Notes"],
        rows: [
          ["C", "C major triad", "C-Dur-Dreiklang", "C–E–G"],
          ["Cm", "C minor triad", "c-Moll-Dreiklang", "C–E♭–G"],
          [
            "C° / Cdim",
            "C diminished triad",
            "verminderter Dreiklang auf C",
            "C–E♭–G♭",
          ],
          [
            "C+ / Caug",
            "C augmented triad",
            "übermäßiger Dreiklang auf C",
            "C–E–G♯",
          ],
        ],
      },
      examples: [
        {
          title: "Major, minor, diminished, augmented",
          abc: `X:1
M:6/4
L:1/4
Q:1/4=100
K:C
"^major (Dur)"C E G [CEG]3 | "^minor (Moll)"C _E G [C_EG]3 | "^diminished (vermindert)"C _E _G [C_E_G]3 | "^augmented (übermäßig)"C E ^G [CE^G]3 |]`,
          explanation:
            "Each triad is played as a broken chord, then together. Major sounds bright and settled; minor darker; diminished tense and unstable, wanting to move; augmented hovering and unresolved, because its two equal thirds give it no clear root.",
        },
      ],
    },
    {
      heading: "Inversions",
      paragraphs: [
        "A chord with its root in the bass is in root position (Grundstellung). With the third in the bass it is in first inversion (erste Umkehrung); with the fifth in the bass, second inversion (zweite Umkehrung).",
        "English names inversions by number; German names them after the figured-bass intervals above the bass (Generalbass-Bezifferung). First inversion is a Sextakkord (figure 6) and second inversion a Quartsextakkord (figure 6/4). The same figures are used in English Roman-numeral analysis: I6, I6/4.",
      ],
      table: {
        columns: ["English", "Figure", "German"],
        rows: [
          ["root position", "5/3 (usually omitted)", "Grundstellung"],
          ["first inversion", "6", "Sextakkord"],
          ["second inversion", "6/4", "Quartsextakkord"],
          ["seventh chord, root position", "7", "Septakkord"],
          ["seventh chord, first inversion", "6/5", "Quintsextakkord"],
          ["seventh chord, second inversion", "4/3", "Terzquartakkord"],
          ["seventh chord, third inversion", "4/2 or 2", "Sekundakkord"],
        ],
      },
      examples: [
        {
          title: "C major in three positions",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
K:C
"^root position (Grundstellung)"[CEG]4 | "^first inversion (Sextakkord)"[EGc]4 | "^second inversion (Quartsextakkord)"[Gce]4 |]`,
          explanation:
            "Same three notes, different bass. Root position sounds the most stable; first inversion lighter and more mobile; second inversion the least stable, which is why it usually appears as a passing or cadential chord.",
        },
      ],
    },
    {
      heading: "Seventh chords",
      paragraphs: [
        "Adding another third on top of a triad gives a seventh chord (Septakkord). The most important is the dominant seventh (Dominantseptakkord): a major triad with a minor seventh, built on the fifth degree of the key.",
        "The diminished seventh chord (verminderter Septakkord) stacks three minor thirds. Because it divides the octave evenly it can resolve to many keys, which made it a favourite of composers for drama and sudden modulation.",
      ],
      table: {
        columns: ["Symbol", "English", "German", "Notes"],
        rows: [
          ["G7", "dominant seventh", "Dominantseptakkord", "G–B–D–F"],
          [
            "Cmaj7",
            "major seventh",
            "Durseptakkord mit großer Septime",
            "C–E–G–B",
          ],
          ["Dm7", "minor seventh", "Mollseptakkord", "D–F–A–C"],
          [
            "Bø7",
            "half-diminished seventh",
            "halbverminderter Septakkord",
            "B–D–F–A",
          ],
          ["B°7", "diminished seventh", "verminderter Septakkord", "B–D–F–A♭"],
        ],
      },
      examples: [
        {
          title: "Five seventh chords",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
K:C
"^G7"[GBdf]4 | "^Cmaj7"[CEGB]4 | "^Dm7"[DFAc]4 | "^Bø7"[Bdfa]4 | "^B°7"[Bdf_a]4 |]`,
          explanation:
            "The dominant seventh has a strong pull; the major seventh sounds soft and jazzy; the minor seventh mellow. The half-diminished and fully diminished chords differ by just one note (A against A♭), but the diminished seventh is far more tense.",
        },
        {
          title: "The dominant seventh resolves",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=66
K:C
"^G7"[GBdf]4 | "^C"[Gce]4 |]`,
          explanation:
            "Every note has a job: the leading tone B (Leitton) rises to C, the seventh F falls to E, D falls to C and G stays put. This is the strongest resolution in tonal music.",
        },
      ],
    },
  ],
};
