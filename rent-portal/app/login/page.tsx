"use client";
import { FormEvent, createContext, useState } from "react";
import Button from "../ui/Button";
import RHLogo from "../ui/logo";
import { oswald } from "../ui/fonts/fonts";
import clsx from "clsx";
import TextBox from "../ui/textbox";
import { StringContext } from "../ui/types";
import Link from "next/link";

const EmailContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
const PasswordContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");

  function handleSubmit() {
    console.log("Submitted");
    console.log(email);
    console.log(pwd);
    setTimeout(() => {
      console.log("bla");
    }, 1000);
  }

  return (
    <main className="w-screen h-screen bg-bl flex flex-col items-center justify-center ">
      <div className="flex flex-col  sm:w-5/6 lg:w-1/3 h-5/6 bg-gr outline outline-or outline-4 rounded-lg items-center p-5 justify-evenly">
        <div className="">
          <RHLogo size="5rem" name={true} />
        </div>
        <h1 className={clsx("text-3xl text-or", oswald.className)}>Log In</h1>
        <form
          className="w-full flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <EmailContext.Provider value={{ value: email, setValue: setEmail }}>
            <TextBox
              placeHolder={"Enter your mail address"}
              type={"email"}
              id={"sign-in-email"}
              context={EmailContext}
              required={true}
            />
          </EmailContext.Provider>
          <PasswordContext.Provider value={{ value: pwd, setValue: setPWD }}>
            <TextBox
              placeHolder={"Enter your password"}
              type={"password"}
              id={"sign-in-pwd"}
              context={PasswordContext}
              required={true}
            />
          </PasswordContext.Provider>
          <Button text={"Sign in"} type="submit" handleSubmit={handleSubmit} />
        </form>
        <div className="flex flex-row items-center justify-center w-5/6">
          <div className="border-wh border-[1px] w-2/3"></div>
          <span className="text-wh text-sm mx-1">or</span>
          <div className="border-wh border-[1px] w-2/3"></div>
        </div>
        <Button text={"Sign in with Google"} type="submit" width={15} />
        <div>
          <p className="inline-block text-wh opacity-70 mx-1">
            Don&#39;t Have an account?
          </p>
          <Link
            href="/sign-up"
            className="inline-block text-blue-300 mx-1 underline underline-offset-2"
          >
            Click here to Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
