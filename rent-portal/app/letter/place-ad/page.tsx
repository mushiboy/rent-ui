"use client";
import NumberCard from "@/app/ui/dashboard/number-card";
import { oswald } from "@/app/ui/fonts/fonts";
import Heading from "@/app/ui/heading";
import TextBox from "@/app/ui/textbox";
import { StringContext } from "@/app/ui/types";
import clsx from "clsx";
import { createContext, useState } from "react";

const nameContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
export default function PlaceAd() {
  const [title, setTitle] = useState("");
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className={clsx("text-or text-4xl ", oswald.className)}>Place Ad</h1>
      <form className="w-5/6 flex flex-col items-center justify-center p-3 ">
        <div className="bg-bl w-full p-4 m-4 flex flex-col justify-evenly items-center">
          <Heading title={"Basic Property Information"} />
          <nameContext.Provider value={{ value: title, setValue: setTitle }}>
            <TextBox
              placeHolder={"Enter your Ad Title"}
              type={"text"}
              id={"name"}
              context={nameContext}
              fullWidth={true}
              required={true}
            />
          </nameContext.Provider>
        </div>
        <div className="bg-bl w-full">
          <Heading title={"Second Heading"} />
        </div>
      </form>
    </div>
  );
}
