// Button.js
import React from "react";
import clsx from "clsx";
import { animated, config, useSpring } from "@react-spring/web";
import { black, orange } from "./colors";
import Link from "next/link";

export default function Button({
  text,
  href,
  type = "button",
  handleClick,
  handleSubmit,
  width = 6,
}: {
  text: string;
  href?: string;
  type?: "reset" | "button" | "submit" | undefined;
  handleClick?: () => void;
  handleSubmit?: () => void;
  width?: number;
}) {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    background: hovered ? black : orange,
    borderWidth: hovered ? "2px" : "0px",
    borderStyle: "solid",
    borderColor: orange,
    width: hovered ? `${width * 1.05}rem` : `${width}rem`,
    config: config.stiff,
  });

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <animated.button
            type={type}
            className={clsx(
              "p-3 bg-or mx-10 rounded-md text-wh w-20 m-2",
              `w-${width}`
            )}
            style={springProps}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {text}
          </animated.button>
        </Link>
      ) : type === "submit" ? (
        <animated.button
          type={type}
          className={clsx(
            "p-3 bg-or mx-10 rounded-md text-wh w-20 m-2",
            `w-${width}`
          )}
          style={springProps}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onSubmit={handleSubmit}
        >
          {text}
        </animated.button>
      ) : (
        <animated.button
          type={type}
          className={clsx(
            "p-3 bg-or mx-10 rounded-md text-wh w-20 m-2",
            `w-${width}`
          )}
          style={springProps}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick}
        >
          {text}
        </animated.button>
      )}
    </>
  );
}
