import { createContext } from "react"

export interface StringContext {
    value: string,
    setValue: (password: string) => void,
  }
  type IconProps = {
    className?: string | any;
  };
  
  export type NavLink = {
    key: number;
    name: string;
    link: string;
    solidIcon: React.ComponentType<IconProps>;
    outlineIcon: React.ComponentType<IconProps>;
  };

