import type { Lesson } from "@/content/theory/types";

export const nonChordTones: Lesson = {
  slug: "non-chord-tones",
  title: "Non-chord tones",
  germanTitle: "Harmoniefremde Töne",
  summary:
    "Passing tones, neighbour tones, suspensions, appoggiaturas and pedal points — the notes that decorate harmony.",
  sections: [
    {
      heading: "Passing and neighbour tones",
      paragraphs: [
        "A non-chord tone (harmoniefremder Ton) is a melody note that does not belong to the chord sounding under it. Most are dissonant and resolve by step to a chord tone.",
        "A passing tone (Durchgangston) fills the gap between two different chord tones by step. A neighbour tone (Nebennote, also Wechselnote) steps away from a chord tone and returns to it — upper neighbour (obere Nebennote) or lower neighbour (untere Nebennote).",
      ],
      examples: [
        {
          title: "Passing tone and neighbour tone",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=80
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] E "^passing tone (Durchgangston)"F G2 | G "^neighbour tone (Nebennote)"A G2 |]
[V:B] "_I"[C,G,]4 | "_I"[C,G,]4 |]`,
          explanation:
            "The harmony is C major throughout. In bar 1, F connects the chord tones E and G. In bar 2, A decorates G by stepping up and back.",
        },
      ],
    },
    {
      heading: "Suspensions and appoggiaturas",
      paragraphs: [
        "A suspension holds a chord tone over into the next chord, where it becomes dissonant, and then resolves down by step. It has three stages: preparation (Vorbereitung), suspension (Vorhalt) and resolution (Auflösung). Suspensions are named after their intervals above the bass: 4–3 (Quartvorhalt), 7–6, 9–8 (Nonvorhalt).",
        "An appoggiatura is an accented dissonance approached by leap, without preparation, which then resolves by step. German calls both kinds Vorhalt: the suspension is a vorbereiteter Vorhalt and the appoggiatura a freier Vorhalt.",
        "An anticipation (Antizipation, Vorausnahme) does the reverse: it sounds a note of the next chord early, often just before a final cadence.",
      ],
      examples: [
        {
          title: "4–3 suspension (Quartvorhalt)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=66
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] c4- | "^4–3 (Quartvorhalt)"c2 B2 | c4 |]
[V:B] "_I"[C,G,]4 | "_V"[G,,D,]4 | "_I"[C,G,]4 |]`,
          explanation:
            "C is a chord tone in bar 1 (the preparation). It is tied over into the G chord, where it is a fourth above the bass and clashes (the suspension), then falls to B, the third (the resolution).",
        },
        {
          title: "Appoggiatura (freier Vorhalt)",
          abc: `X:1
M:4/4
L:1/4
Q:1/4=72
%%score {S B}
K:C
V:S clef=treble
V:B clef=bass
[V:S] G2 B2 | "^appoggiatura (freier Vorhalt)"e2 d2 | c4 |]
[V:B] "_V"[G,,D,]4 | "_V"[G,,D,]4 | "_I"[C,G,]4 |]`,
          explanation:
            "The melody leaps up to E, which does not belong to the G chord, and lands on the strong beat. It then sighs down by step to D. Unlike a suspension, nothing prepares it — the dissonance arrives unannounced.",
        },
      ],
    },
    {
      heading: "Pedal point",
      paragraphs: [
        "A pedal point (Orgelpunkt) is a long held note, usually in the bass, while the harmony above it changes, sometimes clashing with it. Tonic pedals settle the music; dominant pedals build expectation before a return. Bruch's slow movements are full of them.",
      ],
    },
  ],
};
