import React from "react";
import Image from "next/image";
import logoImg from "@/assets/images/logoImg.png";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { inter } from "@/utils/fonts";

const Navbar = () => {
  return (
    <div
      className={`navbar fixed top-0 bg-opacity-5 bg-white backdrop-filter backdrop-blur-sm  shadow-sm z-20 !p-0 ${inter.className} !font-[400]`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="pl-2 lg:hidden">
            <RiMenu4Line size={25} color="#fff" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#161616]"
          >
            <li className="text-white">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-white">
              <Link href={"/"}>Services</Link>
            </li>
            <li className="text-white">
              <Link href={"/"}>Carrers</Link>
            </li>
            <li className="text-white">
              <Link href={"/"}>Our Portfolio</Link>
            </li>
            <li className="text-white">
              <Link href={"/"}>About Us</Link>
            </li>
          </ul>
        </div>
        <Image
          src={logoImg}
          width={100}
          alt="deventia logo"
          className="lg:ml-6"
        />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li className="text-white">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-white/70">
            <Link href={"/"}>Services</Link>
          </li>
          <li className="text-white/70">
            <Link href={"/"}>Carrers</Link>
          </li>
          <li className="text-white/70">
            <Link href={"/"}>Our Portfolio</Link>
          </li>
          <li className="text-white/70">
            <Link href={"/"}>About Us</Link>
          </li>

          <Link
            href={"/"}
            className="p-4 bg-[#7471E680] text-white/70 flex items-center gap-2"
          >
            Contact Us <MdOutlineArrowOutward size={25} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
