"use client";
import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import SignIn from "@/components/ui/SignIn";
import ThemeToggler from "./ui/ThemeToggler";
import { useState } from "react";

const Navbar = () => {
  const [isAuthenticated] = useState(false);
  return (
    <nav className="navbar justify-between bg-base-100 shadow-sm px-10">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          SPACE
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Contact me</Link>
          </li>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isAuthenticated ? (
          <Avatar
            alt="Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        ) : (
          <SignIn />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
