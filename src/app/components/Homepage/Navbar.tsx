export const Navbar = () => {
  return (
    <div className="navbar  fixed z-[999]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src="/nullart.jpg" className="w-6 h-6 rounded-xl" />
          Nullart
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
