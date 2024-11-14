import { Saira } from "next/font/google";
import Link from "next/link";
import React from "react";

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8 lg:justify-around ${saira.className}`}
    >
      <div className="">
        <h4 className="text-2xl font-semibold text-white">FurniShop</h4>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-x-16">
          <li className="text-base font-semibold text-white">
            <Link href="#">Home</Link>
          </li>
          <li className="text-base text-white">
            <Link href="#">About</Link>
          </li>
          <li className="text-base text-white">
            <Link href="#">Features</Link>
          </li>
          <li className="text-base text-white">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <div className="flex flex-col items-end space-y-1">
          <div className="h-1 w-7 bg-white"></div>
          <div className="h-1 w-5 bg-white"></div>
          <div className="h-1 w-7 bg-white"></div>
        </div>
      </div>
    </nav>
  );
}
