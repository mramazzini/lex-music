"use client";
import React, { useRef, useState } from "react";

interface Song {
  title: string;
  src: string;
}

const songs: Song[] = [
  {
    title: "Dreamscape",
    src: "/songs/dreamscape.wav",
  },
  {
    title: "Axe",
    src: "/songs/axxxx.wav",
  },
  {
    title: "Cookup",
    src: "/songs/4-18cookup.wav",
  },
];

const AdvancedAudioPlayer = () => {
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [init, setInit] = useState(false);

  const togglePlay = () => {
    setInit(true);

    if (isPlaying) {
      stop();
    } else {
      playCurrent();
    }
  };

  const stop = () => {
    setIsPlaying(false);
    audioRefs.current.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };
  const playCurrent = () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    audioRefs.current[currentSongIndex].play();
    setIsPlaying(true);
  };
  const nextSong = () => {
    stop();
    const currentSongIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSong(songs[nextSongIndex]);
    playCurrent();
  };
  const prevSong = () => {
    stop();
    const currentSongIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevSongIndex]);
    playCurrent();
  };
  return (
    <>
      {songs.map((song, index) => (
        <audio
          key={index}
          ref={(el) => {
            if (el) {
              audioRefs.current.push(el);
            }
          }}
          src={song.src}
        ></audio>
      ))}
      <div className="flex justify-center items-center flex-row">
        <button onClick={prevSong} className="btn-ghost btn">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-rounded/48/ffffff/arrow.png"
            alt="arrow"
            className="transform rotate-180"
          />
        </button>
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-2xl text-center w-full">
            {init ? "Currently Playing:" : "Play Me!"}
          </h3>
          <button
            onClick={togglePlay}
            className="w-[100px] h-[100px] flex justify-center items-center"
          >
            <img
              src="/mute.svg"
              className={`w-[100px] h-[100px] hover:bg-white/10 rounded-full p-2 absolute transition-opacity transition-transform ${
                !isPlaying ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
              }`}
            ></img>

            <img
              src="/sound.svg"
              className={`w-[100px] h-[100px] hover:bg-white/10 rounded-full p-2 absolute transition-opacity transition-transform ${
                !isPlaying ? "opacity-0 rotate-45" : "opacity-100 rotate-0"
              }`}
            ></img>
          </button>
          <h3 className="text-2xl text-center w-full">{currentSong.title}</h3>
        </div>
        <button onClick={nextSong} className="btn-ghost btn">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/material-rounded/48/ffffff/arrow.png"
            alt="arrow"
          />
        </button>
      </div>
    </>
  );
};

export default AdvancedAudioPlayer;
