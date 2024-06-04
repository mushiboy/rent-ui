import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import { useState } from "react";
import { oswald } from "../fonts/fonts";
import { RadioProps } from "../types";

interface RadioButtonProps {
  selectList: RadioProps[];
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  selectList,
  title,
  onChange,
}: RadioButtonProps) {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    onChange(event);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center mt-3 sm:space-y-2 lg:space-y-0">
      <h1
        className={clsx(
          oswald.className,
          "text-or text-xl lg:w-1/5 sm:w-full lg:mb-0 sm:mb-2"
        )}
      >
        {title}
      </h1>
      <div className="sm:w-full lg:w-4/5 flex flex-wrap lg:flex-nowrap sm:justify-around lg:justify-start lg:space-x-5 items-center">
        {selectList.map((button, index) => (
          <div
            key={index}
            className="flex items-center justify-start lg:flex-row sm:flex-col lg:space-x-3 sm:space-y-2 lg:space-y-0"
          >
            <input
              className="accent-or md:scale-150 lg:scale-[1.3] sm:scale-100 lg:w-auto text-center"
              type="radio"
              name={button.name}
              id={button.id}
              value={button.value}
              checked={selectedValue === button.value}
              onChange={handleRadioChange}
            />
            <label
              className={clsx(
                "lg:text-lg md:text-xl sm:text-sm sm:text-center lg:text-left",
                oswald.className,
                selectedValue === button.value ? "text-or" : "text-wh"
              )}
              htmlFor={button.id}
            >
              {button.value}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
