import { createContext } from "react"

export interface StringContext {
    value: string,
    setValue: (password: string) => void,
  }

