import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center ">
      <Link href="/soundcloud" className="w-24 mx-2 btn-ghost btn">
        <img
          src="https://img.icons8.com/color/48/soundcloud.png"
          alt="soundcloud"
        />
      </Link>

      <Link className="mx-2 btn-ghost btn w-24" href="youtube">
        <img
          src="https://img.icons8.com/color/48/youtube-play.png"
          alt="youtube-play"
        />
      </Link>
      <Link className="mx-2 btn-ghost btn w-24  h-12" href="spotify">
        <img
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo.png"
          alt="external-spotify-a-swedish-audio-streaming-platform-that-provides-drm-protected-logo-color-tal-revivo"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
};

export default Footer;
