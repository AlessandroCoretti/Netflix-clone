import { useState } from "react";
import { InfoModalContext } from "./InfoModalContext";

export function InfoModalProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  function openModal(movie) {
    setSelectedMovie(movie);
  }

  function closeModal() {
    setSelectedMovie(null);
  }

  return <InfoModalContext.Provider value={{ selectedMovie, openModal, closeModal }}>{children}</InfoModalContext.Provider>;
}
