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


//FORMS
export interface RadioProps {
  name: string;
  id: string;
  value: string | number;
  checked: boolean;
}

type Address = {
  line1: string;
  line2: string;
  country: string;
  city: string;
  postalCode: string;
}


export const propertyTypes: RadioProps[] = [
  {
    name: "propertyType",
    id: "letter-entireHome",
    value: "Home",
    checked: false,
  },
  {
    name: "propertyType",
    id: "letter-apartment",
    value: "Apartment",
    checked: false,
  },
  {
    name: "propertyType",
    id: "letter-sharedRoom",
    value: "Shared Room",
    checked: false,
  },
  {
    name: "propertyType",
    id: "letter-room",
    value: "Entire Room",
    checked: false,
  },
];
