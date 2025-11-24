import { createContext, useContext } from "react";

export const InfoModalContext = createContext();

export function useInfoModal() {
  return useContext(InfoModalContext);
}
