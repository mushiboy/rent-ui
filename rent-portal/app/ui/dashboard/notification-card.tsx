import clsx from "clsx";
import { oswald } from "../fonts/fonts";

export default function NotificationCard({
  name,
  number,
  w = "16rem",
  h = "14rem",
}: {
  name: string;
  w?: string;
  h?: string;
  number: number;
}) {
  return (
    <div className={clsx("w-64 h-56 bg-bl rounded-md", `w-[${w}] h-[${h}]`)}>
      <div className="flex flex-col justify-evently">
        <h1
          className={clsx(
            "bg-or text-wh text-4xl rounded-t-md p-3",
            oswald.className
          )}
        >
          {name}
        </h1>
        <h2 className={clsx("text-or text-9xl p-3", oswald.className)}>
          {number}
        </h2>
      </div>
    </div>
  );
}
