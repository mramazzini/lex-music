import Link from "next/link";

export const Navbar = ({ fixed }: { fixed?: boolean }) => {
  return (
    <div className={`navbar  z-[999] px-4 ${fixed ? "fixed" : "relative"}`}>
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <img src="/nullart.jpg" className="w-6 h-6 rounded-xl" />
          Nullart
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link href="/contact" className="btn btn-ghost">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/tracks" className="btn btn-ghost">
              My Tracks
            </Link>
          </li>
          <li>
            <Link href="/about" className="btn btn-ghost">
              About
            </Link>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-1 flex md:hidden">
          <li>
            <details>
              <summary className="bg-black">More Info</summary>
              <ul className=" rounded-t-none bg-black">
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/tracks">Tracks</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
