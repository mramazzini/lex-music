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
    <main>
      <canvas
        id="canvas"
        className=" absolute h-screen w-screen z-[0] pointer-events-none "
      ></canvas>
      <img
        src="/hero-bg.svg"
        className="absolute w-full h-full z-[0] object-cover "
      />
      <Navbar />
      <LineBlur />
      <LineBlur />
      <div className="flex min-h-screen relative items-center justify-start text-white font-bold flex-col pt-20 px-4 md:px-0 xl:bg-none w-full ">
        <h1 className="text-center text-7xl z-[1] ">
          <span className="text-accent">Null</span>
          <span className="text-secondary">art </span> Music
        </h1>
        <p className="text-center text-xl z-[1] my-4">
          Custom music for your projects
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center w-full ">
          <div className="flex flex-row items-center justify-center z-[1] w-1/3 ">
            <AdvancedAudioPlayer />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center m-4">
          <button className="btn btn-secondary text-lg m-2 text-white ">
            Get a Quote -&gt;
          </button>
          <button className="btn btn-ghost text-lg m-2">
            View Tracks -&gt;
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
