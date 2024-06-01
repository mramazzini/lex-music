"use client";
import { useState } from "react";
import SoundCloud from "./components/SoundCloud";
import Tracks from "./components/Tracks";
import Navbar from "./components/Homepage/Navbar";
import LineBlur from "./components/Homepage/LineBlur";
import Link from "next/link";
import AdvancedAudioPlayer from "./components/Homepage/AudioPlayer";
export default function Home() {
  const [hoveredLink, setHoveredLink] = useState<string>("Social Media");

  const handleHover = (str: string) => {
    setHoveredLink(str);
  };
  return (
    <main>
      <Navbar />
      <div
        className="flex min-h-screen relative items-center justify-start text-white font-bold flex-col pt-20 px-4 md:px-0 xl:bg-none w-full"
        style={{
          backgroundImage: "url(/hero-bg.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          backgroundPosition: "left bottom",
        }}
      >
        <h1 className="text-center text-7xl z-[1] ">Nullart Music</h1>
        <p className="text-center text-xl z-[1] my-4">
          The best custom music for your projects
        </p>
        <LineBlur />
        <LineBlur />
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center justify-center z-[1] md:w-1/3 my-4">
            {" "}
            <h3 className="text-2xl">Follow me on</h3>
            <div className="flex flex-row items-center justify-center ">
              <Link
                onMouseEnter={() => handleHover("Soundcloud")}
                href="/soundcloud"
                className="w-24 mx-2 btn-ghost btn"
              >
                <img
                  src="https://img.icons8.com/color/48/soundcloud.png"
                  alt="soundcloud"
                />
              </Link>

              <Link
                className="mx-2 btn-ghost btn w-24"
                href="youtube"
                onMouseEnter={() => handleHover("Youtube")}
              >
                <img
                  src="https://img.icons8.com/color/48/youtube-play.png"
                  alt="youtube-play"
                />
              </Link>
              <Link
                className="mx-2 btn-ghost btn w-24  h-12"
                href="spotify"
                onMouseEnter={() => handleHover("Spotify")}
              >
                <img
                  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png"
                  alt="external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <h3 className="text-2xl">{hoveredLink}</h3>
          </div>
          <img
            src="/headphones.svg"
            alt="headphones"
            className=" w-[300px] animate-bobAndWobble svg "
          />
          <div className="flex flex-row items-center justify-center z-[1] w-1/3">
            <AdvancedAudioPlayer />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <button className="btn btn-primary text-lg m-2 text-white">
            Get a Quote -&gt;
          </button>
          <button className="btn btn-ghost text-lg m-2">
            View Tracks -&gt;
          </button>
        </div>
      </div>
    </main>
  );
}
