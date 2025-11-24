import { createContext, useContext } from "react";

export const MovieContext = createContext();

export function useMovies() {
  return useContext(MovieContext);
}
