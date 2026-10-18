import type { Lesson } from "@/content/theory/types";

export const notes: Lesson = {
  slug: "notes",
  title: "Notes and note names",
  germanTitle: "Notennamen",
  summary:
    "Staff, clefs, letter names, accidentals and note values — and the places where German and English names part ways.",
  sections: [
    {
      heading: "Staff and clefs",
      paragraphs: [
        "Music is written on a five-line staff (Notensystem, Notenlinien). Notes too high or low for the staff sit on ledger lines (Hilfslinien).",
        "The treble clef (Violinschlüssel, G-Schlüssel) curls around the second line and fixes it as G above middle C. The bass clef (Bassschlüssel, F-Schlüssel) puts its two dots around the fourth line and fixes it as F below middle C.",
        "Internationally, octaves are numbered in scientific pitch notation: middle C is C4. German uses the Helmholtz system with strokes and capital letters instead.",
      ],
      table: {
        columns: ["Scientific (international)", "German (Helmholtz)"],
        rows: [
          ["C1", "Kontra-C (C₁)"],
          ["C2", "großes C"],
          ["C3", "kleines c"],
          ["C4 — middle C", "eingestrichenes c (c′)"],
          ["C5", "zweigestrichenes c (c″)"],
        ],
      },
    },
    {
      heading: "Letter names: B and H",
      paragraphs: [
        "English uses the seven letters A B C D E F G. German uses the same letters except one: the note English calls B is H in German, and German B means B♭ (B-flat).",
      ],
      falseFriend:
        "German B = English B♭. German H = English B. So 'h-Moll' is B minor and 'B-Dur' is B♭ major. Bach spelled his name in notes as B–A–C–H, which in English is B♭–A–C–B.",
      examples: [
        {
          title: "C major scale with letter names",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=100
K:C
"^C"C "^D"D "^E"E "^F"F | "^G"G "^A"A "^B (H)"B "^C"c | "^B (H)"B2 "^B♭ (B)"_B2 |]`,
          explanation:
            "Only one letter changes between the languages. The last bar plays B (German H) and then B♭ (German B) so you can hear the half step between them.",
        },
      ],
    },
    {
      heading: "Sharps, flats and naturals",
      paragraphs: [
        "A sharp (Kreuz, ♯) raises a note by a semitone (Halbton); a flat (b, ♭) lowers it by a semitone; a natural (Auflösungszeichen, ♮) cancels either. Double sharps (Doppelkreuz, 𝄪) and double flats (Doppel-b, 𝄫) move a note by two semitones.",
        "English adds a word: C-sharp, E-flat. German adds a syllable: -is for sharp, -es for flat (Cis, Fis, Des, Ges). The vowels E and A shorten to Es and As, and B♭ is simply B. Double accidentals use -isis and -eses (Fisis, Heses).",
        "Two spellings of the same key on the piano, such as F♯ and G♭, are enharmonic equivalents (enharmonische Verwechslung). They sound identical but play different roles in harmony.",
      ],
      table: {
        columns: ["English", "German"],
        rows: [
          ["C♯ (C-sharp)", "Cis"],
          ["D♯", "Dis"],
          ["F♯", "Fis"],
          ["G♯", "Gis"],
          ["A♯", "Ais"],
          ["D♭ (D-flat)", "Des"],
          ["E♭", "Es"],
          ["G♭", "Ges"],
          ["A♭", "As"],
          ["B♭", "B"],
        ],
      },
      examples: [
        {
          title: "Enharmonic pairs",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=80
K:C
"^C♯ (Cis)"^C2 "^D♭ (Des)"_D2 | "^F♯ (Fis)"^F2 "^G♭ (Ges)"_G2 | "^E♭ (Es)"_E2 "^A♭ (As)"_A2 |]`,
          explanation:
            "In each of the first two bars the two notes sound exactly the same; only the spelling differs. The last bar shows the two irregular German flat names, Es and As.",
        },
      ],
    },
    {
      heading: "Note values and rests",
      paragraphs: [
        "American English names note values by fractions of a whole note, like German does. British English uses older Italian-derived names, which you will meet in UK exam syllabuses and many older books.",
      ],
      table: {
        columns: ["American", "British", "German"],
        rows: [
          ["whole note", "semibreve", "ganze Note"],
          ["half note", "minim", "halbe Note"],
          ["quarter note", "crotchet", "Viertelnote"],
          ["eighth note", "quaver", "Achtelnote"],
          ["sixteenth note", "semiquaver", "Sechzehntelnote"],
          ["rest", "rest", "Pause"],
          ["dotted note", "dotted note", "punktierte Note"],
          ["tie", "tie", "Haltebogen"],
          ["measure / bar", "bar", "Takt"],
          ["time signature", "time signature", "Taktart (Taktangabe)"],
        ],
      },
      falseFriend:
        "British 'quaver' is an eighth note, not a quarter. The quarter note is a 'crotchet'.",
      examples: [
        {
          title: "From whole notes to eighths",
          abc: `X:1
M:4/4
L:1/8
Q:1/4=90
K:C
"^whole (ganze)"c8 | "^half (halbe)"c4 c4 | "^quarter (Viertel)"c2 c2 c2 c2 | "^eighth (Achtel)"c c c c c c c c | "^rests (Pausen)"c2 z2 c2 z2 |]`,
          explanation:
            "Each bar of 4/4 is divided into smaller values: one whole note, two halves, four quarters, eight eighths. The last bar replaces every other quarter note with a quarter rest.",
        },
      ],
    },
  ],
};
