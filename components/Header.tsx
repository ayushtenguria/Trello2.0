"use client";

import Image from "next/image";
import img from "@/public/MAil.png";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5  bg-gray-500/10 rounded-b-2xl">
        <div
          className="
         absolute
         top-0
         left-0
         w-full
         h-96
         bg-gradient-to-br
         from-pink-400
         to-[#0055d1]
         rounded-md
         filter
         blur-3xl
         -z-50
         opacity-50
         "
        />
        <Image
          src={img}
          alt="Sample Image"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex flex-1 space-x-5 items-center justify-end w-full">
          <form
            className="flex items-center space-x-5 rounded-md bg-white shadow-md p-2 flex-1 flex-initial"
            action=""
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 rounded-b-2xl" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Ayush Sharma" round color="#0055d1" size="50" />
        </div>
      </div>

      <div className="flex px-5 md:py-5 py-2 items-center justify-center">
        <p className="flex items-center text-sm font-light shadow-xl rounded-xl pr-5 max-w-3xl italic text-[#0055d1] p-5 w-fit bg-white">
          <UserCircleIcon className="h-10 w-10 inline-block mr-1 text-[#0055d1]" />
          GPT is summarizing your task for the day...
        </p>
      </div>
    </header>
  );
};
