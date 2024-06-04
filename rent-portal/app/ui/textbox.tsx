"use client";
import { useState, useRef, ChangeEvent, forwardRef } from "react";
import { animated, config, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { orange, white } from "./colors";

interface TextBoxInterface {
  placeHolder: string;
  type: string;
  id: string;
  value: string | number;
  onChange: (value: string) => void;
  fullWidth?: boolean;
  required: boolean;
}

const TextBox = forwardRef<HTMLInputElement, TextBoxInterface>(
  ({ placeHolder, type, id, value, onChange, fullWidth, required }, ref) => {
    const [isSelected, setSelected] = useState(false);
    const localRef = useRef<HTMLInputElement>(null);

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
      if (typeof ref === "function") {
        ref(localRef.current);
      } else if (ref?.current) {
        ref.current.focus();
      } else {
        localRef.current?.focus();
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <div
        className={clsx(
          "relative flex items-center justify-center sm:w-[85%] lg:w-2/3",
          fullWidth ? "sm:w-full lg:w-full my-2" : "w-2/3 m-2"
        )}
      >
        <animated.input
          ref={ref || localRef}
          id={id}
          type={type}
          className="block h-12 border-b-2 border-or w-full pt-3 pl-2 focus:outline-none text-wh bg-transparent"
          value={value}
          onChange={handleChange}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          required={required}
        />
        <animated.label
          htmlFor={id}
          className={clsx(
            "absolute left-2 -z-0 cursor-text duration-150 transform origin-[0]",
            {
              "text-or": isSelected,
              "text-wh": !isSelected,
            }
          )}
          style={props}
          onClick={handleLabelClick}
        >
          {placeHolder}
        </animated.label>
      </div>
    );
  }
);

TextBox.displayName = "TextBox";

export default TextBox;
