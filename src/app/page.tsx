"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Homepage/Navbar";

import AdvancedAudioPlayer from "./components/Homepage/AudioPlayer";
import AudioVisualizer from "./components/Homepage/AudioVisualizer";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSmallScreen(true);
    }
  }, []);
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar fixed />
      <AudioVisualizer />
      <div className="home-gradient max-h-[1200px] h-screen w-screen absolute top-0 left-0 z-0"></div>
      <img
        src="/hero-bg.svg"
        className="absolute h-screen w-screen bot-0 object-cover  max-h-[1200px] pointer-events-none z-[0]"
      />
      <canvas
        id="canvas"
        className="absolute h-screen w-screen  pointer-events-none  max-h-[1200px] top-0 left-0 pointer-events-none z-[1]"
      ></canvas>

      {/* hero */}
      <div className="flex h-screen relative items-center justify-between text-white font-bold flex-col pt-20 px-4 md:px-0 xl:bg-none w-full max-h-[1200px] z-[1] ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center text-7xl  ">
            <span className="gradient-text">Nullart</span> Music
          </h1>
          <p className="text-center text-xl  my-4">
            Custom music for your projects
          </p>
          <div className="flex-col items-center justify-center flex md:hidden">
            <div className="flex-row items-center justify-center  my-4">
              <Link
                href="/contact"
                className="btn btn-secondary text-md m-2 text-white "
              >
                Get a Quote -&gt;
              </Link>
              <Link href="/tracks" className="btn btn-ghost text-md m-2">
                View Tracks -&gt;
              </Link>
            </div>
            <Link
              href="https://soundcloud.com/nullxrt/may-wip-give-me-ideas"
              className="text-xl text-center w-full m-3 btn btn-ghost"
            >
              Now Playing: Axe
            </Link>

            {smallScreen && <AdvancedAudioPlayer />}
          </div>
        </div>

        <div className="flex-col items-center justify-center m-4 hidden md:flex ">
          <Link
            href="https://soundcloud.com/nullxrt/may-wip-give-me-ideas"
            className="text-xl text-center w-full m-3 btn btn-ghost"
          >
            Now Playing: Axe
          </Link>
          {!smallScreen && <AdvancedAudioPlayer />}

          <div className="flex-row items-center justify-center m-4  ">
            <Link
              href="/contact"
              className="btn btn-secondary text-lg m-2 text-white "
            >
              Get a Quote -&gt;
            </Link>
            <Link href="/tracks" className="btn btn-ghost text-lg m-2">
              View Tracks -&gt;
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
