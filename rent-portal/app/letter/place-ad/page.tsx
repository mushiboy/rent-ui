"use client";
import NumberCard from "@/app/ui/dashboard/number-card";
import { oswald } from "@/app/ui/fonts/fonts";
import RadioButton from "@/app/ui/forms/radioButton";
import Heading from "@/app/ui/heading";
import TextBox from "@/app/ui/textbox";
import { RadioProps, StringContext, propertyTypes } from "@/app/ui/types";
import clsx from "clsx";
import { ChangeEvent, createContext, useState } from "react";

const nameContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});

export default function PlaceAd() {
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState(propertyTypes[0].value);
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    country: "",
    city: "",
    postalCode: "",
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className={clsx("text-or text-4xl ", oswald.className)}>Place Ad</h1>
      <form className="w-5/6 flex flex-col items-center justify-center p-3 ">
        <div className="bg-bl w-full p-4 m-4 flex flex-col justify-evenly items-center">
          <Heading title={"A) Basic Property Information"} />
          <TextBox
            placeHolder={"1. Enter your Ad Title"}
            type={"text"}
            id={"name"}
            fullWidth={true}
            required={true}
            value={title}
            onChange={setTitle}
          />
          <RadioButton
            selectList={propertyTypes}
            title="2. Select Property Type"
            onChange={(e) => setPropertyType(e.target.value)}
          />
        </div>
        <div className="bg-bl w-full">
          <Heading title={"Second Heading"} />
        </div>
      </form>
    </div>
  );
}
