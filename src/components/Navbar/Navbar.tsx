"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full">
      <div className="justify-between md:w-5/6  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <img
                src="/logo.png"
                alt="logo"
                style={{ height: "30px", maxWidth: "100%" }}
              />
            </a>
            <div className="md:hidden">
              <div className=" flex justify-center items-center gap-2">
                <Link
                  className=" bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full text-white font-dmSans"
                  href="/placa-pix"
                >
                  Gerar Placa Pix
                </Link>
                <button
                  className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="#000"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#000"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 h-screen md:h-auto ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-600 font-semibold text-md">
              <li className="">
                <Link href="/blog" className=" hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li className="">
                <Link
                  href="mailto:contato@qr-code-pix.com.br"
                  className=" hover:text-blue-600"
                >
                  Contato
                </Link>
              </li>
              <li className="">
                <Link
                  className=" bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-full text-white font-dmSans hidden md:block"
                  href="/placa-pix"
                >
                  Gerar Placa Pix
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
