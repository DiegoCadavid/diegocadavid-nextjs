import { createContext } from "react";

export type IScrollContext  = {
  isScrolled: boolean;  
} | null;

export const scrollContext = createContext<IScrollContext>(null);
