import Link from "next/link";
import Avatar from "@/components/ui/Avatar";

const Navbar = () => {
  return (
    <nav className="navbar justify-between bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          SPACE
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/ragac">asdas</Link>
          </li>
          <li>
            <Link href="/ragac">asdas</Link>
          </li>{" "}
          <li>
            <Link href="/ragac">asdas</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Avatar
          alt="Avatar"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
      </div>
    </nav>
  );
};

export default Navbar;
