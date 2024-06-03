"use client";
import { useState } from "react";
import SoundCloud from "./components/SoundCloud";
import Tracks from "./components/Tracks";
import Navbar from "./components/Homepage/Navbar";
import LineBlur from "./components/Homepage/LineBlur";
import Link from "next/link";
import AdvancedAudioPlayer from "./components/Homepage/AudioPlayer";
import AudioVisualizer from "./components/Homepage/AudioVisualizer";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <LineBlur />
      <LineBlur />
      <canvas
        id="canvas"
        className=" absolute  h-screen w-screen z-[0] pointer-events-none max-h-2xl max-h-[1200px]"
      ></canvas>

      <img
        src="/hero-bg.svg"
        className="absolute h-screen w-screen z-[0] bot-0 object-cover max-h-2xl max-h-[1200px]"
      />
      <Navbar />

      {/* hero */}
      <div className="flex h-screen relative items-center justify-between text-white font-bold flex-col pt-20 px-4 md:px-0 xl:bg-none w-full max-h-[1200px]">
        <div className="flex flex-col items-center justify-center   ">
          <h1 className="text-center text-7xl z-[1] ">
            <span className="gradient-text">Nullart</span> Music
          </h1>
          <p className="text-center text-xl z-[1] my-4">
            Custom music for your projects
          </p>
        </div>
        <div className="flex flex-col items-center justify-center m-4">
          <h3 className="text-4xl text-center w-full m-3">Play Me!</h3>
          <AdvancedAudioPlayer />
          <div className="flex flex-row items-center justify-center m-4">
            <button className="btn btn-secondary text-lg m-2 text-white ">
              Get a Quote -&gt;
            </button>
            <button className="btn btn-ghost text-lg m-2">
              View Tracks -&gt;
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
