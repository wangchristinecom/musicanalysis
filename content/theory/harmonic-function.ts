import type { Lesson } from "@/content/theory/types";

export const harmonicFunction: Lesson = {
  slug: "harmonic-function",
  title: "Roman numerals and harmonic function",
  germanTitle: "Stufentheorie und Funktionstheorie",
  summary:
    "How the Roman numerals used internationally map onto the T–S–D symbols of German Funktionstheorie.",
  sections: [
    {
      heading: "Two systems for the same chords",
      paragraphs: [
        "International (English-language) analysis labels chords with Roman numerals for the scale degree they are built on. This is scale-degree theory — in German, Stufentheorie. Upper case means a major chord (I, IV, V), lower case minor (ii, iii, vi), ° diminished (vii°) and + augmented (III+). The composer pages on this site use Roman numerals.",
        "German music education mostly teaches Riemann's function theory (Funktionstheorie). Instead of a degree, each chord gets a function: tonic (Tonika, T), subdominant (Subdominante, S) or dominant (Dominante, D). The other chords are treated as relatives of these three, such as the tonic relative (Tonikaparallele, Tp).",
        "The two systems mostly describe the same thing, so you can translate between them chord by chord.",
      ],
      table: {
        columns: [
          "Degree",
          "Chord in C major",
          "Roman numeral",
          "Funktionstheorie",
          "English degree name",
        ],
        rows: [
          ["1", "C", "I", "T (Tonika)", "tonic"],
          ["2", "Dm", "ii", "Sp (Subdominantparallele)", "supertonic"],
          [
            "3",
            "Em",
            "iii",
            "Dp (Dominantparallele) or Tg (Tonikagegenklang)",
            "mediant",
          ],
          ["4", "F", "IV", "S (Subdominante)", "subdominant"],
          ["5", "G", "V", "D (Dominante)", "dominant"],
          ["6", "Am", "vi", "Tp (Tonikaparallele)", "submediant"],
          [
            "7",
            "B°",
            "vii°",
            "Đ⁷ (verkürzter Dominantseptakkord)",
            "leading-tone chord",
          ],
        ],
      },
      falseFriend:
        "German 'Parallele' (Tp, Sp, Dp) is the English relative chord — a third away, sharing two notes. It has nothing to do with English 'parallel keys' (same tonic, German Variante).",
    },
    {
      heading: "Minor keys, inversions and sevenths",
      paragraphs: [
        "In minor, Roman numerals use lower case for the minor chords (i, iv) and keep V major because of the raised leading tone. Funktionstheorie does the same with letters: t and s are minor, D is major. The major relatives become tP (III), sP (VI) and dP (VII).",
        "Roman numerals show inversions with figures beside the numeral: V6/5 is a dominant seventh with its third in the bass. Funktionstheorie writes the bass note as a small number below the symbol and added tones above: V6/5 is D⁷ with a 3 below (D⁷₃), V4/2 is D⁷ with a 7 below.",
        "The cadential six-four is a useful test case. English calls it I6/4 — a tonic chord in second inversion — and resolves it to V. Funktionstheorie hears the same sound as a dominant whose sixth and fourth are suspensions resolving to the fifth and third: the Quartsextvorhalt, written D with 6–5 over 4–3.",
      ],
    },
    {
      heading: "A progression in both systems",
      paragraphs: [
        "The example prints function symbols above the staff and Roman numerals below, so you can read the same progression both ways.",
      ],
      examples: [
        {
          title: "T – Tp – Sp – D⁷ – T",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] "^T"[Ec]2 "^Tp"[Ec]2 | "^Sp"[Fd]2 "^D7"[Fd]2 | "^T"[Ec]4 |]
[V:B] "_I"[C,G,]2 "_vi"[A,,A,]2 | "_ii6"[F,,A,]2 "_V7"[G,,B,]2 | "_I"[C,C]4 |]`,
          explanation:
            "Tonic, its relative, a subdominant-family chord, dominant seventh, tonic. Notice how the alto's F is held from ii6 into V7, where it becomes the seventh, then falls to E — the same move you will meet in the Bach chorale cadence.",
        },
      ],
    },
    {
      heading: "Secondary dominants",
      paragraphs: [
        "Any major or minor chord in a key can be approached by its own dominant. English calls these secondary dominants and writes them as 'V of' the target: V/V, V7/ii, V/vi. German calls them Zwischendominanten and writes (D) in brackets before the target chord.",
        "The dominant of the dominant is so common that German gives it its own name and symbol: the Doppeldominante (DD). In C major it is D major (D–F♯–A), usually with a seventh C added.",
        "Two other chromatic chords to recognise: the Neapolitan sixth (N6 or ♭II6, German Neapolitaner or neapolitanischer Sextakkord, sN) and the augmented sixth chords (übermäßige Sextakkorde) — for example the German sixth, which German calls the übermäßiger Quintsextakkord.",
      ],
      examples: [
        {
          title: "The Doppeldominante (V/V)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] "^T"[Ec]2 "^DD7"[^Fd]2 | "^D"[Gd]2 "^T"[Ec]2 |]
[V:B] "_I"[C,G,]2 "_V4/2/V"[C,A,]2 | "_V6"[B,,G,]2 "_I"[C,G,]2 |]`,
          explanation:
            "The F♯ is borrowed from G major: it acts as a temporary leading tone and rises to G. Meanwhile the bass C, now the seventh of the D7 chord, falls to B. In English: V4/2 of V (a secondary dominant); in German: the Doppeldominante with its seventh in the bass.",
        },
      ],
    },
  ],
};
