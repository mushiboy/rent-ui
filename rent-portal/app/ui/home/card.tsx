"use client";
import clsx from "clsx";
import { oswald } from "../fonts/fonts";
import Search from "./search-box";
import { useEffect, useRef, useState } from "react";
import {
  SpringValue,
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
} from "@react-spring/web";
import { orange, white } from "../colors";

const headerClass = clsx(
  oswald.className,
  "text-bl",
  "text-center text-2xl -z-20"
);
export default function HomeCard() {
  const [isRentSelected, setRentSelected] = useState<boolean>(true);
  const [isPlaceAdHovered, setPlaceAdHovered] = useState<boolean>(false);

  const { width } = useSpring({
    config: config.stiff,
    from: { width: "50%", background: "hotpink" },
    to: {
      width: !isRentSelected ? "100%" : "50%",
    },
  });

  return (
    <div className="relative flex flex-col sm:h-1/3 sm:w-5/6 bg-wh md:h-1/3 md:w-1/2 rounded-t-md">
      <header className="flex flex-row items-center justify-between h-20 p-2 shadow-md rounded-md md:mb-16 sm:mb-11 z-10">
        <animated.div
          className="top-2 rounded-md h-16 bg-or -z-10"
          style={{ width: width }}
        ></animated.div>
        <div
          className="flex flex-col w-1/2 rounded-md h-full items-center justify-center -z-10 absolute"
          onMouseEnter={() => setPlaceAdHovered(true)}
          onMouseLeave={() => setPlaceAdHovered(false)}
          onClick={() => {
            setRentSelected(true);
            console.log(isRentSelected);
          }}
        >
          <p className={headerClass}>Rent</p>
        </div>
        <div
          className="flex flex-col w-1/2 rounded-md h-full items-center justify-center -z-10 absolute right-0"
          onMouseEnter={() => setPlaceAdHovered(true)}
          onMouseLeave={() => setPlaceAdHovered(false)}
          onClick={() => {
            setRentSelected(true);
            console.log(isRentSelected);
          }}
        >
          <p className={headerClass}>Place AD</p>
        </div>
      </header>
      <Search placeholder="Type something" />
    </div>
  );
}
