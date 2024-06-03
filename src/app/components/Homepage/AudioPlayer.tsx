"use client";
import React, { useRef, useState, useEffect } from "react";
import AudioVisualizer from "./AudioVisualizer";

interface Song {
  title: string;
  src: string;
}

const AdvancedAudioPlayer = () => {
  const audio = useRef<HTMLAudioElement>(null);

  const [init, setInit] = useState(false);

  const [currentSong, setCurrentSong] = useState<Song>({
    title: "Axe",
    src: "/songs/axxxx.wav",
  });

  useEffect(() => {
    const audioElement = audio.current;
    if (audioElement) {
      audioElement.src = currentSong.src;
      audioElement.volume = 0.5; // Set the volume to 0.5
    }
  }, [currentSong]);

  return (
    <div
      className={`audio-before flex flex-row  items-center ${
        init ? "hide-before" : ""
      }`}
    >
      <audio
        id={`audio`}
        ref={audio}
        src={currentSong.src}
        controls
        className="bg-transparent "
        onPlay={() => setInit(true)}
      ></audio>
    </div>
  );
};

export default AdvancedAudioPlayer;
