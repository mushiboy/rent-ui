"use client";
import { FormEvent, createContext, useState } from "react";
import Button from "../ui/Button";
import RHLogo from "../ui/logo";
import { oswald } from "../ui/fonts/fonts";
import clsx from "clsx";
import TextBox from "../ui/textbox";
import { StringContext } from "../ui/types";
import Link from "next/link";

const FirstNameContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
const LastNameContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
const EmailContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
const PasswordContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
const ConfirmPasswordContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});
const ContactNoContext = createContext<StringContext>({
  value: "",
  setValue: () => {},
});

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPWD] = useState("");
  const [confirmPwd, setConfirmPWD] = useState("");
  const [contactNo, setContactNo] = useState("");

  function handleSubmit() {
    console.log("Submitted");
    console.log(email);
    console.log(pwd);
  }

  return (
    <main className="w-screen h-screen bg-bl flex flex-col items-center justify-center ">
      <div className="flex flex-col  sm:w-5/6 lg:w-1/3 h-[90%] bg-gr outline outline-or outline-4 rounded-lg items-center p-5 justify-evenly">
        <div className="">
          <RHLogo size="5rem" name={true} side={true} />
        </div>
        <h1 className={clsx("text-3xl text-or", oswald.className)}>Sign Up</h1>
        <form
          className="w-full flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <FirstNameContext.Provider
            value={{ value: firstName, setValue: setFirstName }}
          >
            <TextBox
              placeHolder={"Enter your First Name"}
              type={"text"}
              id={"sign-up-first-name"}
              context={FirstNameContext}
            />
          </FirstNameContext.Provider>
          <LastNameContext.Provider
            value={{ value: lastName, setValue: setLastName }}
          >
            <TextBox
              placeHolder={"Enter your Last Name"}
              type={"text"}
              id={"sign-in-last-name"}
              context={LastNameContext}
            />
          </LastNameContext.Provider>
          <EmailContext.Provider value={{ value: email, setValue: setEmail }}>
            <TextBox
              placeHolder={"Enter your mail address"}
              type={"email"}
              id={"sign-up-email"}
              context={EmailContext}
            />
          </EmailContext.Provider>
          <PasswordContext.Provider value={{ value: pwd, setValue: setPWD }}>
            <TextBox
              placeHolder={"Enter your password"}
              type={"password"}
              id={"sign-up-pwd"}
              context={PasswordContext}
            />
          </PasswordContext.Provider>
          <ConfirmPasswordContext.Provider
            value={{ value: confirmPwd, setValue: setConfirmPWD }}
          >
            <TextBox
              placeHolder={"Re-enter your password"}
              type={"password"}
              id={"sign-up-confirm-pwd"}
              context={ConfirmPasswordContext}
            />
          </ConfirmPasswordContext.Provider>
          <ContactNoContext.Provider
            value={{ value: contactNo, setValue: setContactNo }}
          >
            <TextBox
              placeHolder={"Enter your Contact Number"}
              type={"tel"}
              id={"sign-in-contact-no"}
              context={ContactNoContext}
            />
          </ContactNoContext.Provider>
          <Button text={"Sign Up"} type="submit" handleSubmit={handleSubmit} />
        </form>
        <div className="flex flex-row items-center justify-center w-5/6">
          <div className="border-wh border-[1px] w-2/3"></div>
          <span className="text-wh text-sm mx-1">or</span>
          <div className="border-wh border-[1px] w-2/3"></div>
        </div>
        <Button text={"Sign in with Google"} type="submit" width={15} />
        <div>
          <p className="inline-block text-wh opacity-70 mx-1">
            Already Have an account?
          </p>
          <Link
            href="/login"
            className="inline-block text-blue-300 mx-1 underline underline-offset-2"
          >
            Click here to Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
