import React, { useState } from "react";
import clsx from "clsx";
import { animated, config, useSpring } from "@react-spring/web";
import { black, black2, orange, white } from "./colors";

export default function Button({
  text,
  href,
  width = 6,
}: {
  text: string;
  href: string;
  width?: number;
}) {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    scale: hovered ? 1.1 : 1,
    background: hovered ? black : orange,
    borderWidth: hovered ? "3px" : "0px",
    borderStyle: hovered ? "dashed" : "solid",
    borderColor: orange,
    width: hovered ? `${width * 1.05}rem` : `${width}rem`, // Adjust width
    config: config.stiff,
  });

  return (
    <a href={href}>
      <animated.button
        type="button"
        className={clsx(
          "p-3 bg-or mx-10 rounded-md text-wh w-20",
          `w-${width}`
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={springProps}
      >
        {text}
      </animated.button>
    </a>
  );
}
