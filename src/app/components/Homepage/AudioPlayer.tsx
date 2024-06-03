"use client";
import React, { useRef, useState } from "react";
import AudioVisualizer from "./AudioVisualizer";

interface Song {
  title: string;
  src: string;
}

const AdvancedAudioPlayer = () => {
  const audio = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>({
    title: "Axe",
    src: "/songs/axxxx.wav",
  });
  const [init, setInit] = useState(false);

  const togglePlay = () => {
    setInit(true);

    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  const play = () => {
    if (!audio.current) return;
    audio.current.play();
    setIsPlaying(true);
  };

  const stop = () => {
    if (!audio.current) return;
    audio.current.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        id={`audio`}
        ref={audio}
        src={currentSong.src}
        controls
        className="bg-transparent"
      ></audio>
      <AudioVisualizer audioID={`audio`} />

      <div className="flex justify-center items-center flex-row">
        <div className="flex justify-center items-center flex-col">
          {/* <h3 className="text-2xl text-center w-full">
            {init ? "Currently Playing:" : "Play Me!"}
          </h3>
          <h3 className="text-2xl text-center w-full">{currentSong.title}</h3> */}
        </div>
      </div>
    </>
  );
};

export default AdvancedAudioPlayer;
