import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { oswald } from "../fonts/fonts";
import clsx from "clsx";
import { NavLink } from "../types";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid";

export function DestructureNavDesktop(links: Array<NavLink>) {
  const [currentKey, setCurrentKey] = useState(1);
  const props = useSpring({
    config: { tension: 120, friction: 14 },
    transform: `translateY(${(currentKey - 1) * 3.75}rem)`,
  });
  return (
    <div className="flex-col items-center justify-evenly relative sm:hidden lg:flex w-full">
      <animated.div
        style={props}
        className=" absolute top-0 w-full m-2 bg-or transform origin-[0] h-12 rounded-sm"
      ></animated.div>

      {links.map((content) => {
        const IconComponent = content.solidIcon;
        const OutlineIconComponent = content.outlineIcon;
        return (
          <div
            key={content.key}
            className={clsx(
              "w-full p-2 m-2 text-center text-or flex flex-row items-center justify-start z-10 cursor-pointer h-11",
              oswald.className
            )}
            onClick={() => setCurrentKey(content.key)}
          >
            {content.key == currentKey ? (
              <IconComponent className={clsx("w-6 h-6 mr-3 z-10", "text-wh")} />
            ) : (
              <OutlineIconComponent
                className={clsx("w-6 h-6 mr-3 z-10", "text-or")}
              />
            )}
            <h2
              className={clsx(
                "text-2xl z-10",
                content.key == currentKey ? "text-wh" : "text-or"
              )}
            >
              {content.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export function DestructureNavMobile(links: Array<NavLink>) {
  const [currentKey, setCurrentKey] = useState(1);
  const props = useSpring({
    config: { tension: 120, friction: 14 },
    transform: `translateX(${(currentKey - 1) * 6}rem)`,
  });
  const divElements = [];
  for (let i = 0; i < links.length - 1; i++) {
    divElements.push(<div key={i} className="w-24"></div>);
  }
  return (
    <>
      <div className="flex flex-row bg-bl h-20 w-screen fixed bottom-0 justify-center items-center">
        <div className="flex flex-row bg-transparent h-16 w-screen fixed justify-center items-center z-10">
          <animated.div
            style={props}
            className="w-24 m-2 bg-or transform origin-[0] h-full rounded-md"
          ></animated.div>
          {divElements}
        </div>
        {links.map((content) => {
          const IconComponent = content.solidIcon;
          const OutlineIconComponent = content.outlineIcon;
          return (
            <div
              key={content.key}
              className="flex flex-col justify-center items-center w-24 z-20"
              onClick={() => setCurrentKey(content.key)}
            >
              {content.key == currentKey ? (
                <IconComponent className={clsx("w-7 h-7", "text-wh")} />
              ) : (
                <OutlineIconComponent
                  className={clsx("w-7 h-7 z-50", "text-or")}
                />
              )}
              <h2
                className={clsx(
                  "text-lg",
                  oswald.className,
                  content.key == currentKey ? "text-wh" : "text-or"
                )}
              >
                {content.name}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
