"use client";
import Link from "next/link";
import RHLogo from "../logo";
import clsx from "clsx";
import { useState } from "react";
import { navLinksLetter, navLinksRenter } from "./nav-links";
import { NavLink } from "../types";
import { oswald } from "../fonts/fonts";
import { animated, config, useSpring } from "@react-spring/web";
import {
  DestructureNavDesktop,
  DestructureNavMobile,
} from "./destructureNavBar";

export function NavBar() {
  const [userType, setUserType] = useState<string>("letter");
  return (
    <div>
      <nav className="bg-bl h-16  flow-row items-center justify-between hidden md:flex ">
        <RHLogo size={"5rem"} name={true} side={true} logo={false} />
        {userType == "letter"
          ? DestructureNavDesktop(navLinksLetter)
          : DestructureNavDesktop(navLinksRenter)}
      </nav>
      <nav className="md:hidden w-full">
        <div className="bg-bl text-or w-full">
          <RHLogo size={"2rem"} name={true} side={true} logo={false} />
        </div>
        <div className="flex h-10 w-10 z-50">
          {userType == "letter"
            ? DestructureNavMobile(navLinksLetter)
            : DestructureNavMobile(navLinksRenter)}
        </div>
      </nav>
    </div>
  );
}
