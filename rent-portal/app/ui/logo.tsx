import Image from "next/image";
import Logo from "../../public/logo/Logo.svg";

export default function RHLogo({
  h,
  w,
  name,
}: {
  h: number;
  w: number;
  name: boolean;
}) {
  return (
    <div className="flex flex-col items-center leading-none text-or">
      <Image height={h} width={w} priority src={Logo} alt="Logo" />
      {name && <p className="text-[44px]">RentHub</p>}
    </div>
  );
}
