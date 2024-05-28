import clsx from "clsx";
import { oswald } from "./fonts/fonts";

export default function Heading({ title }: { title: string }) {
  return (
    <h1 className={clsx("underline text-3xl text-or w-full", oswald.className)}>
      {title}
    </h1>
  );
}
