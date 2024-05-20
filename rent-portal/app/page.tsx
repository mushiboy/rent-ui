"use client";
import Image from "next/image";
import HomeCard from "./ui/home/HomeCard";
import { NavBar } from "./ui/home/navbar";
import RHLogo from "./ui/logo";
import Button from "./ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-evenly bg-bl h-screen w-screen">
      <RHLogo h={100} w={100} name={true} />
      <HomeCard />
      <div className="flex flex-row items-center justify-center">
        <Button text="Log in" href="/login" />
        <Button text="Sign up" href="/sign-up" />
      </div>
    </main>
  );
}
