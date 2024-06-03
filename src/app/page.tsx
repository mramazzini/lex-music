"use client";

import Navbar from "./components/Homepage/Navbar";

import AdvancedAudioPlayer from "./components/Homepage/AudioPlayer";
import AudioVisualizer from "./components/Homepage/AudioVisualizer";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black ">
      <Navbar />
      <AudioVisualizer />
      <img
        src="/hero-bg.svg"
        className="absolute h-screen w-screen bot-0 object-cover  max-h-[1200px] pointer-events-none z-[0]"
      />
      <canvas
        id="canvas"
        className="absolute h-screen w-screen  pointer-events-none  max-h-[1200px] top-0 left-0 pointer-events-none z-[0]"
      ></canvas>

      {/* hero */}
      <div className="flex h-screen relative items-center justify-between text-white font-bold flex-col pt-20 px-4 md:px-0 xl:bg-none w-full max-h-[1200px]">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center text-7xl  ">
            <span className="gradient-text">Nullart</span> Music
          </h1>
          <p className="text-center text-xl  my-4">
            Custom music for your projects
          </p>
          <div className="flex-col items-center justify-center flex md:hidden">
            <div className="flex-row items-center justify-center  my-4">
              <button className="btn btn-secondary text-md m-2 text-white ">
                Get a Quote -&gt;
              </button>
              <button className="btn btn-ghost text-md m-2">
                View Tracks -&gt;
              </button>
            </div>
            <h3 className="text-xl text-center w-full m-3">Now Playing: Axe</h3>
            {window.innerWidth < 768 && <AdvancedAudioPlayer />}
          </div>
        </div>

        <div className="flex-col items-center justify-center m-4 hidden md:flex my-48">
          {window.innerWidth > 768 && <AdvancedAudioPlayer />}

          <div className="flex-row items-center justify-center m-4  ">
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
