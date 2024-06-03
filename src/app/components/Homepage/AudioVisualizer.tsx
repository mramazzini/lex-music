"use client";
import { Wave } from "@foobar404/wave";
import { useEffect } from "react";
const AudioVisualizer = ({ audioID }: { audioID: string }) => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const audio = document.getElementById(audioID) as HTMLAudioElement;

    let wave = new Wave(audio, canvas);

    wave.addAnimation(
      new wave.animations.Lines({
        count: window.innerWidth / 10,
        frequencyBand: "highs",
        top: true,
        lineColor: "#e761e5",
      })
    );

    wave.addAnimation(
      new wave.animations.Circles({
        lineColor: { gradient: ["#FAD961", "#FAD961", "#F76B1C"], rotate: 90 },
        lineWidth: 4,
        diameter: 20,
        count: 10,
        frequencyBand: "base",
      })
    );
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }, []);

  return <div></div>;
};

export default AudioVisualizer;