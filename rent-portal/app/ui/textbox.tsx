"use client";

import { animated, config, useSpring } from "@react-spring/web";
import clsx from "clsx";
import {
  useState,
  useRef,
  useContext,
  ServerContextJSONArray,
  ServerContextJSONValue,
  ServerContext,
} from "react";
import { StringContext } from "./types";
import { orange, white } from "./colors";

export default function TextBox({
  placeHolder,
  type,
  id,
  context,
  fullWidth,
  required,
}: {
  placeHolder: string;
  type: string;
  id: string;
  context: any;
  fullWidth?: boolean;
  required: boolean;
}) {
  const { value, setValue } = useContext<StringContext>(context);
  const [isSelected, setSelected] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const props = useSpring({
    transform:
      isSelected || value
        ? "translateY(-15px) scale(0.75)"
        : "translateY(0) scale(1)",
    color: isSelected || value ? orange : white,
    config: { ...config.gentle, duration: 100 },
  });

  const handleLabelClick = () => {
    setSelected(true);
  };

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center ",
        fullWidth ? "w-full my-2" : "w-2/3 m-2"
      )}
    >
      <animated.input
        ref={inputRef}
        id={id}
        type={type}
        className="block h-12 border-b-2 border-or w-full pt-3 pl-2 focus:outline-none text-wh bg-transparent"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
        placeholder={value}
        autoComplete={type === "password" ? "current-password" : "email"}
        required={required}
      />
      <animated.label
        htmlFor={id}
        className={clsx(
          "absolute left-2 -z-0 cursor-text duration-150 transform origin-[0] ",
          { "text-or": isSelected, "text-wh": !isSelected }
        )}
        style={props}
        onClick={handleLabelClick}
      >
        {placeHolder}
      </animated.label>
    </div>
  );
}
