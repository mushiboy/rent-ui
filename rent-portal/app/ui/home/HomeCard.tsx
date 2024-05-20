"use client";
import clsx from "clsx";
import Search from "./search-box";
import { useState, useEffect, useContext } from "react";
import { animated, config, useSpring, useSpringRef } from "@react-spring/web";
import { oswald } from "../fonts/fonts";
import Button from "../Button";

const headerClass = clsx(
  oswald.className,
  "text-bl",
  "text-center text-2xl -z-20"
);

export default function HomeCard() {
  const [isRentSelected, setRentSelected] = useState(true);

  const [isPlaceAdHovered, setPlaceAdHovered] = useState<boolean>(false);
  const [isRentHovered, setRentHovered] = useState<boolean>(false);

  const widthRef = useSpringRef();
  const props = useSpring({
    ref: widthRef,
    config: config.stiff,
    from: {
      width: "50%",
    },
    to: {
      width: isRentSelected
        ? isPlaceAdHovered
          ? "55%"
          : "50%"
        : isRentHovered
        ? "55%"
        : "50%",
    },
  });

  useEffect(() => {
    widthRef.start({
      to: {
        width: isRentSelected
          ? isPlaceAdHovered
            ? "55%"
            : "50%"
          : isRentHovered
          ? "55%"
          : "50%",
      },
    });
  }, [isRentSelected, isPlaceAdHovered, isRentHovered, widthRef]);

  function handleSelect(rent: boolean) {
    widthRef.start({
      to: {
        width: "100%",
      },
    });
    setTimeout(() => {
      setRentSelected(rent);
      widthRef.start({
        to: {
          width: "50%",
        },
      });
    }, 340);
  }

  return (
    <div className="relative flex flex-col sm:h-1/3 sm:w-5/6 bg-wh md:h-1/3 md:w-1/2 rounded-t-md">
      <header className="flex flex-row items-center justify-between h-20 p-2 shadow-md rounded-md md:mb-16 sm:mb-11 z-10">
        <animated.div
          className={clsx("absolute rounded-md h-16 bg-or -z-10", {
            "left-2": isRentSelected,
            "right-2": !isRentSelected,
          })}
          style={props}
        ></animated.div>
        <div
          className="flex flex-col w-1/2 rounded-md items-center justify-center -z-10 absolute"
          onClick={() => handleSelect(true)}
          onMouseEnter={() => setRentHovered(true)}
          onMouseLeave={() => setRentHovered(false)}
        >
          <p className={headerClass}>Rent</p>
        </div>
        <div
          className="flex flex-col w-1/2 rounded-md items-center justify-center -z-10 absolute right-0"
          onClick={() => handleSelect(false)}
          onMouseEnter={() => setPlaceAdHovered(true)}
          onMouseLeave={() => setPlaceAdHovered(false)}
        >
          <p className={headerClass}>Place AD</p>
        </div>
      </header>
      <div className="flex flex-row items-center justify-center w-full">
        {isRentSelected ? (
          <Search placeholder="Type something" />
        ) : (
          <Button text="Sign in to Continue" width={12} href={"/login"} />
        )}
      </div>
    </div>
  );
}
