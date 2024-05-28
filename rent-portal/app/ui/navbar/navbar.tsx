"use client";
import RHLogo from "../logo";
import clsx from "clsx";
import { useState } from "react";
import { navLinksLetter, navLinksRenter } from "./nav-links";
import { oswald } from "../fonts/fonts";
import {
  DestructureNavDesktop,
  DestructureNavMobile,
} from "./destructureNavBar";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";

export function NavBar() {
  const [userType, setUserType] = useState<string>("letter");
  return (
    <div className="md:w-72">
      <nav className="bg-bl w-72 flex-col items-center justify-between hidden md:flex border-b-2 border-or fixed left-0 h-screen p-2">
        <RHLogo size={"5rem"} name={true} />
        {userType == "letter"
          ? DestructureNavDesktop(navLinksLetter)
          : DestructureNavDesktop(navLinksRenter)}
        <div className="w-full text-center text-or flex flex-row items-center justify-start z-10 cursor-pointer h-11">
          <div
            className={clsx(
              "w-full p-2 text-center text-or flex flex-row items-center justify-start z-10 cursor-pointer h-11 bg-or rounded-md",
              oswald.className
            )}
          >
            <ArrowRightStartOnRectangleIcon
              className={clsx("w-6 h-6 mr-3 z-10", "text-wh")}
            />
            <h2 className={clsx("text-2xl z-10 text-wh")}>Sign out</h2>
          </div>
        </div>
      </nav>
      <nav className="md:hidden w-full">
        <div className="bg-bl text-or w-full fixed top-0 border-b-2 border-or">
          <RHLogo size={"2rem"} name={true} side={true} logo={false} />
        </div>
        <div className="flex h-10 w-10 z-50 fixed bottom-0 ">
          {userType == "letter"
            ? DestructureNavMobile(navLinksLetter)
            : DestructureNavMobile(navLinksRenter)}
        </div>
      </nav>
    </div>
  );
}
