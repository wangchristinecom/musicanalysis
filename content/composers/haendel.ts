import type { Composer } from "@/content/types";

export const haendel: Composer = {
  slug: "haendel",
  name: "George Frideric Handel",
  dates: "1685–1759",
  era: "Late Baroque",
  summary:
    "Handel's harmony is written for the theatre and the big hall. Beside Bach's dense counterpoint he prefers broad diatonic progressions, a slower harmonic rhythm and bold contrasts: block-chord choral declamation against fugal passages, sudden silences, and cadences strong enough to carry to the back of the room.",
  signatureTraits: [
    {
      dimension: "cadences",
      description:
        "Emphatic, rhythmically broadened cadences — often a hemiola in triple time — and Phrygian half cadences (iv6–V) closing slow movements. A grand pause before the final cadence is a favourite dramatic gesture.",
    },
    {
      dimension: "chromaticism",
      description:
        "Largely diatonic. Chromaticism is saved for word-painting and pathos: lament basses, diminished sevenths and Neapolitan colour at moments of grief or suffering.",
    },
    {
      dimension: "modulation",
      description:
        "Closely related keys, reached directly and clearly. Ritornellos return in the tonic, dominant and relative keys, and contrast often comes from sudden shifts of texture rather than distant keys.",
    },
    {
      dimension: "voiceLeading",
      description:
        "Practical rather than strict: upper voices move in parallel thirds and sixths, inner parts double one another, and the bass line carries the harmonic weight.",
    },
    {
      dimension: "texture",
      description:
        "Alternates homophonic block chords with imitative or fugal entries, and operatic melody over continuo. Unison passages are used for dramatic force.",
    },
    {
      dimension: "rhythmHarmony",
      description:
        "Broader harmonic rhythm than Bach, often one or two chords per bar, with dotted French-overture rhythms and long pedal points that build tension.",
    },
  ],
  examples: [
    {
      title: "Hemiola cadence",
      source: "In the style of Handel's triple-time arias and dances",
      kind: "illustration",
      abc: `X:1
M:3/4
L:1/4
Q:1/4=96
%%score {S B}
K:G
V:S clef=treble
V:B clef=bass
[V:S] [GB]3 | [Gd]2 [Ac]- | [Ac] [FA]2 | [DG]3 |]
[V:B] "_I"[G,,D]3 | "_I6"[B,,D]2 "_ii6"[C,E]- | [C,E] "_V"[D,D]2 | "_I"[G,,B,]3 |]`,
      explanation:
        "In the two bars before the cadence the chords change every two beats, so two bars of 3/4 are heard as one broad bar of 3/2. The bass climbs B–C–D to the dominant, and the stretched rhythm makes the arrival on I feel weighty and final.",
    },
    {
      title: "Phrygian half cadence",
      source: "In the style of the slow movements of the concerti grossi",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=50
%%score {S B}
K:Dm
V:S clef=treble
V:B clef=bass
[V:S] [Fd]2 [Gd]2 | !fermata![A^c]4 |]
[V:B] "_i"[D,A,]2 "_iv6"[B,,D]2 | "_V"[A,,E]4 |]`,
      explanation:
        "The bass falls a half step (B♭–A) while an upper voice rises a whole step (G–A), opening a sixth out to an octave. The phrase stops on the dominant, and Handel often uses this cadence to end a slow movement and lead straight into the next, fast one.",
    },
    {
      title: "Grand pause and plagal close",
      source: "In the style of the ending of the Hallelujah chorus, Messiah",
      kind: "illustration",
      abc: `X:1
M:4/4
L:1/4
Q:1/4=88
%%score {S B}
K:D
V:S clef=treble
V:B clef=bass
[V:S] [Fd]2 [Ec]2 | [Fd]4 | !fermata!z4 | "^Adagio"[Gd]2 !fermata![Fd]2 |]
[V:B] "_I"[D,A,]2 "_V"[A,,A,]2 | "_I"[D,A,]4 | !fermata!z4 | "_IV"[G,,B,]2 "_I"[D,A,]2 |]`,
      explanation:
        "After a full cadence the whole ensemble falls silent for a bar. A slow plagal cadence (IV–I) then closes the movement: the soprano holds the tonic D while the inner voices step down, giving a broad, 'Amen'-like final arrival.",
    },
  ],
  listening: [
    {
      work: "Messiah, HWV 56",
      note: "Choruses alternate block-chord declamation with fugue; 'Surely he hath borne our griefs' shows his expressive chromaticism.",
    },
    {
      work: "Concerti grossi, Op. 6, HWV 319–330",
      note: "Short slow movements ending on Phrygian cadences, set between energetic ritornello movements.",
    },
    {
      work: "Zadok the Priest, HWV 258",
      note: "A long string build-up over repeated harmonies before the choir's massive homophonic entry.",
    },
  ],
};
