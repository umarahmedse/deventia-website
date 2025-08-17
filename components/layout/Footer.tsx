import Image from "next/image";
import React from "react";
import logoImg from "@/assets/images/logoImg.gif";
import { euroStyle } from "@/utils/fonts";
const Footer = () => {
  return (
    <footer className="bg-[#161616] z-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image src={logoImg} alt="Cybitronix logo" width={250} unoptimized />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 lg:my-8" />
        <h1
          className={`1000px:text-[10rem] text-[3.2rem] text-center ${euroStyle.className} text-white/50 leading-none`}
        >
          CYBITRONIX.COM
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
