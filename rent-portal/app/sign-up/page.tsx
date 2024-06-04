"use client";
import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import RHLogo from "../ui/logo";
import { oswald } from "../ui/fonts/fonts";
import clsx from "clsx";
import TextBox from "../ui/textbox";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "../ui/schemas/formSchemas";

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
    },
  });

  function onSubmit(data: signUpType) {
    console.log("Submitted");
    console.log(data.email);
    console.log(data.confirmPassword);
    console.log(data.mobileNo);
  }

  return (
    <main className="w-screen min-h-screen bg-bl flex flex-col items-center justify-center py-10">
      <div className="flex flex-col sm:w-5/6 lg:w-1/3 h-[90%] bg-gr outline outline-or outline-4 rounded-lg items-center p-5 justify-evenly">
        <div className="">
          <RHLogo size="5rem" name={true} side={true} />
        </div>
        <h1 className={clsx("text-3xl text-or", oswald.className)}>Sign Up</h1>
        <form
          className="w-full flex flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextBox
                placeHolder="Enter your First Name"
                type="text"
                id="sign-up-first-name"
                required={true}
                {...field}
              />
            )}
          />
          {errors.firstName && (
            <span className="text-red-500">
              {errors.firstName?.message as string}
            </span>
          )}
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextBox
                placeHolder="Enter your Last Name"
                type="text"
                id="sign-in-last-name"
                required={true}
                {...field}
              />
            )}
          />
          {errors.lastName && (
            <span className="text-red-500">
              {errors.lastName?.message as string}
            </span>
          )}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextBox
                placeHolder="Enter your mail address"
                type="email"
                id="sign-up-email"
                required={true}
                {...field}
              />
            )}
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email?.message as string}
            </span>
          )}
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextBox
                placeHolder="Enter your password"
                type="password"
                id="sign-up-pwd"
                required={true}
                {...field}
              />
            )}
          />
          {errors.password && (
            <span className="text-red-500">
              {errors.password?.message as string}
            </span>
          )}
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <TextBox
                placeHolder="Re-enter your password"
                type="password"
                id="sign-up-confirm-pwd"
                required={true}
                {...field}
              />
            )}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword?.message as string}
            </span>
          )}
          <Controller
            control={control}
            name="mobileNo"
            render={({ field }) => (
              <TextBox
                placeHolder="Enter your Contact Number"
                type="tel"
                id="sign-in-contact-no"
                required={true}
                {...field}
              />
            )}
          />
          {errors.mobileNo && (
            <span className="text-red-500">
              {errors.mobileNo?.message as string}
            </span>
          )}

          <Button text="Sign Up" type="submit" />
        </form>
        <div className="flex flex-row items-center justify-center w-5/6">
          <div className="border-wh border-[1px] w-2/3"></div>
          <span className="text-wh text-sm mx-1">or</span>
          <div className="border-wh border-[1px] w-2/3"></div>
        </div>
        <Button text="Sign in with Google" type="button" width={15} />
        <div className="text-center">
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
