import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer items-center p-2 bg-black text-neutral-content relative z-[999]">
      {" "}
      <aside className="items-center grid-flow-col">
        <img src="/nullart.jpg" className="w-6 h-6 rounded-xl" />
        <p>Created by Matteo Ramazzini - Copyright © 2024</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          href="https://soundcloud.com/nullxrt"
          className="mx-2 btn-ghost btn"
        >
          <img
            src="https://img.icons8.com/color/48/soundcloud.png"
            alt="soundcloud"
          />
        </Link>

        <Link
          className="mx-2 btn-ghost btn "
          href="https://www.youtube.com/@nullxrt"
        >
          <img
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="youtube-play"
          />
        </Link>
        {/* <Link className="mx-2 btn-ghost btn w-24  h-12" href="spotify">
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png"
          alt="external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo"
          width={32}
          height={32}
        />
      </Link> */}
      </nav>
    </footer>
  );
};

export default Footer;
