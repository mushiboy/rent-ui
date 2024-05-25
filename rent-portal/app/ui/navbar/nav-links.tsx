import {
  ArrowRightStartOnRectangleIcon,
  ComputerDesktopIcon,
  NewspaperIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ComputerDesktopIcon as ComputerDesktopIconOutline,
  NewspaperIcon as NewPaperIconOutline,
  UserCircleIcon as UserCircleIconOutline,
  ArrowRightStartOnRectangleIcon as ArrowRightStartOnRectangleIconOutline,
} from "@heroicons/react/24/outline";

import { NavLink } from "../types";

export const navLinksLetter: Array<NavLink> = [
  {
    key: 1,
    name: "Dashboard",
    link: "/dashboard",
    solidIcon: ComputerDesktopIcon,
    outlineIcon: ComputerDesktopIconOutline,
  },
  {
    key: 2,
    name: "Place Ad",
    link: "/place-ad",
    solidIcon: NewspaperIcon,
    outlineIcon: NewPaperIconOutline,
  },

  {
    key: 3,
    name: "Profile",
    link: "",
    solidIcon: UserCircleIcon,
    outlineIcon: UserCircleIconOutline,
  },
  {
    key: 4,
    name: "Sign Out",
    link: "/signout",
    solidIcon: ArrowRightStartOnRectangleIcon,
    outlineIcon: ArrowRightStartOnRectangleIconOutline,
  },
];
export const navLinksRenter: Array<NavLink> = [
  {
    key: 1,
    name: "Place Ad",
    link: "/place-ad",
    solidIcon: NewspaperIcon,
    outlineIcon: NewPaperIconOutline,
  },
  {
    key: 2,
    name: "Dashboard",
    link: "/dashboard",
    solidIcon: ComputerDesktopIcon,
    outlineIcon: ComputerDesktopIconOutline,
  },

  {
    key: 3,
    name: "Profile",
    link: "",
    solidIcon: UserCircleIcon,
    outlineIcon: UserCircleIconOutline,
  },
  {
    key: 4,
    name: "Sign Out",
    link: "/signout",
    solidIcon: ArrowRightStartOnRectangleIcon,
    outlineIcon: ArrowRightStartOnRectangleIconOutline,
  },
];
