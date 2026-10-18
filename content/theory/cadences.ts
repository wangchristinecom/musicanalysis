import type { Lesson } from "@/content/theory/types";

export const cadences: Lesson = {
  slug: "cadences",
  title: "Cadences",
  germanTitle: "Kadenzen und Schlüsse",
  summary:
    "How phrases end: authentic, half, plagal and deceptive cadences, with American, British and German names side by side.",
  sections: [
    {
      heading: "What a cadence is",
      paragraphs: [
        "A cadence is the chord progression that ends a phrase, like punctuation in a sentence. Some sound final, like a full stop; others pause, like a comma or a question mark.",
        "American and British textbooks use different names for the same cadences, and German has its own set. The table lines them up.",
      ],
      falseFriend:
        "In German, 'Kadenz' often means the whole model progression T–S–D–T (the vollständige Kadenz). English 'cadence' means only the ending of a phrase; the German word for that is Schluss (Ganzschluss, Halbschluss, Trugschluss).",
      table: {
        columns: ["American", "British", "German", "Progression"],
        rows: [
          [
            "perfect authentic cadence (PAC)",
            "perfect cadence",
            "Ganzschluss (authentische Kadenz)",
            "V–I",
          ],
          ["half cadence (HC)", "imperfect cadence", "Halbschluss", "… –V"],
          [
            "plagal cadence",
            "plagal cadence",
            "Plagalschluss (plagale Kadenz)",
            "IV–I",
          ],
          ["deceptive cadence", "interrupted cadence", "Trugschluss", "V–vi"],
          [
            "Phrygian half cadence",
            "Phrygian cadence",
            "phrygischer Halbschluss",
            "iv6–V in minor",
          ],
        ],
      },
    },
    {
      heading: "Authentic and half cadences",
      paragraphs: [
        "The perfect authentic cadence moves from V to I with both chords in root position and the tonic in the top voice. It is the most final-sounding ending in tonal music. If the top voice ends on the third or fifth instead, or a chord is inverted, it is an imperfect authentic cadence (unvollkommener Ganzschluss).",
        "A half cadence stops on V. It sounds open and unfinished — the phrase asks a question that the next phrase answers.",
      ],
      falseFriend:
        "British 'imperfect cadence' means a half cadence (ending on V), not an imperfect authentic cadence.",
      examples: [
        {
          title: "Perfect authentic cadence (Ganzschluss)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] [Fc]2 [DB]2 | [Ec]4 |]
[V:B] "_IV"[F,,A,]2 "_V"[G,,G,]2 | "_I"[C,G,]4 |]`,
          explanation:
            "The bass falls from G to C, and the soprano's leading tone B rises to C. Both chords are in root position and the melody ends on the tonic, so the phrase feels completely closed.",
        },
        {
          title: "Half cadence (Halbschluss)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] [Ec]2 [Fc]2 | !fermata![DB]4 |]
[V:B] "_I"[C,G,]2 "_IV"[F,,A,]2 | "_V"[G,,G,]4 |]`,
          explanation:
            "The phrase stops on the dominant. Listen to how the leading tone B is left hanging — you expect a C to follow.",
        },
      ],
    },
    {
      heading: "Plagal and deceptive cadences",
      paragraphs: [
        "The plagal cadence moves from IV to I. It is softer than an authentic cadence and is familiar as the 'Amen' at the end of hymns, often added after an authentic cadence has already closed the music.",
        "The deceptive cadence sets up V as if heading for I, then moves to vi instead. The bass rises a step instead of falling a fifth, and the music has to continue. Compare it directly with the perfect authentic cadence above: the first two chords are identical.",
      ],
      examples: [
        {
          title: "Plagal cadence (Plagalschluss)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=66
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] [Ec]2 [Fc]2 | [Ec]4 |]
[V:B] "_I"[C,G,]2 "_IV"[F,,A,]2 | "_I"[C,G,]4 |]`,
          explanation:
            "The soprano holds C throughout while the inner voices step down from IV to I. There is no leading tone, so the ending is gentle rather than emphatic.",
        },
        {
          title: "Deceptive cadence (Trugschluss)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] [Fc]2 [DB]2 | [Cc]4 |]
[V:B] "_IV"[F,,A,]2 "_V"[G,,G,]2 | "_vi"[A,,E,]4 |]`,
          explanation:
            "Exactly the same start as the perfect authentic cadence, but the bass steps up to A. The soprano still reaches C, yet the A-minor chord underneath turns the expected full stop into a surprise.",
        },
      ],
    },
    {
      heading: "The Phrygian half cadence",
      paragraphs: [
        "In minor keys, Baroque composers often end a slow movement on a special half cadence: iv6–V, with the bass falling a semitone (in D minor, B♭–A). Its name comes from the semitone step down to the final, typical of the Phrygian mode. You can hear it on the Handel page.",
      ],
    },
  ],
};
