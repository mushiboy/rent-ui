import Image from "next/image";
import Logo from "../../public/logo/Logo.svg";
import { black } from "./colors";
import clsx from "clsx";

export default function RHLogo({
  size,
  name,
  side = false,
  logo = true,
}: {
  size: string;
  name: boolean;
  side?: boolean;
  logo?: boolean;
}) {
  return (
    <div
      className={clsx("flex   text-or", {
        "flex-col items-center": !side,
        "flex-row items-end": side,
      })}
    >
      {logo && (
        <Image
          priority
          src={Logo}
          alt="Logo"
          className={clsx({ "scale-75": side })}
          style={{ width: size, height: size }}
        />
      )}
      {name && <p className={clsx("text-[44px]", { "ml-2": side })}>RentHub</p>}
    </div>
  );
}
