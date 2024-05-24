import Link from "next/link";
import RHLogo from "../logo";
import clsx from "clsx";

const h2 = clsx("w-32 p-2 m-2 border-or border border-3 text-center text-or");
export function NavBar() {
  return (
    <nav className="bg-bl h-20 flex flow-row items-center justify-between">
      <div>
        <RHLogo size={"5rem"} name={true} side={true} logo={false} />
      </div>
      <div className="flex flow-row items-center justify-evenly">
        <h2 className={h2}>Dashboard</h2>
        <h2 className={h2}>Place Ad</h2>
        <h2 className={h2}>Help</h2>
        <h2 className={h2}>Log Out</h2>
      </div>
    </nav>
  );
}
