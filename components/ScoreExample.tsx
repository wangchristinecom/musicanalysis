"use client";

import { useEffect, useRef, useState } from "react";
import type { MidiBuffer, TuneObject } from "abcjs";

export function ScoreExample({ abc }: { abc: string }) {
  const scoreRef = useRef<HTMLDivElement>(null);
  const tuneRef = useRef<TuneObject | null>(null);
  const synthRef = useRef<MidiBuffer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("abcjs").then((abcjs) => {
      if (cancelled || !scoreRef.current) return;
      tuneRef.current = abcjs.renderAbc(scoreRef.current, abc, {
        responsive: "resize",
        add_classes: true,
        paddingleft: 0,
        paddingright: 0,
      })[0];
    });
    return () => {
      cancelled = true;
      synthRef.current?.stop();
    };
  }, [abc]);

  async function togglePlayback() {
    if (isPlaying) {
      synthRef.current?.stop();
      setIsPlaying(false);
      return;
    }
    if (!tuneRef.current) return;
    const abcjs = await import("abcjs");
    const synth = new abcjs.synth.CreateSynth();
    await synth.init({
      visualObj: tuneRef.current,
      onEnded: () => setIsPlaying(false),
    });
    await synth.prime();
    synthRef.current = synth;
    synth.start();
    setIsPlaying(true);
  }

  return (
    <div>
      <div ref={scoreRef} className="score" />
      <button
        type="button"
        onClick={togglePlayback}
        className="mt-2 rounded-full border border-line px-4 py-1.5 text-sm font-medium hover:bg-accent hover:text-paper hover:border-accent transition-colors"
      >
        {isPlaying ? "■ Stop" : "▶ Play"}
      </button>
    </div>
  );
}
