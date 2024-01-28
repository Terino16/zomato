"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;
  console.log(status);
  const fullNameArray = session.data?.user?.name.split(' ')||[];
  const firstName = fullNameArray.length > 0 ? fullNameArray[0] : '';
  return (
    <header className="flex items-center justify-between p-8">
      <Link href={"/"} className="text-red-500 font-bold text-2xl">
        PizzaBoy
      </Link>
      <nav className="flex gap-4 items-center max-w-5xl">
        <Link href={"/"}>Home</Link>
        <Link href={"/Menu"}>Menu</Link>
        <Link href={"/Contact"}>Contact</Link>
        <Link href={"/About"}>About</Link>
      </nav>
      <nav className="flex gap-4 items-center">
        {status === "authenticated" && (
          <div className="flex items-center justify-between gap-3">
         <Link href={'/Profile'}> Hello {session.data?.user?.name.split(' ')[0] || firstName}</Link>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded-3xl bg-red-500 text-white">
              Logout
            </button>
          </div>
        )}
        {status !== "authenticated" && (
          <div className="">
            <Link
              href={"/Login"}
              className="px-4 py-2 mr-2 rounded-3xl bg-red-500 text-white"
            >
              Login
            </Link>
            <Link
              href={"/Register"}
              className="px-4 py-2 rounded-3xl bg-red-500 text-white"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
