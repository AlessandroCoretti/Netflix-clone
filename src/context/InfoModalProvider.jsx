import { useState } from "react";
import { InfoModalContext } from "./InfoModalContext";

export function InfoModalProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOptions, setModalOptions] = useState({});

  function openModal(movie, options = {}) {
    setSelectedMovie(movie);
    setModalOptions(options);
  }

  function closeModal() {
    setSelectedMovie(null);
    setModalOptions({});
  }

  return <InfoModalContext.Provider value={{ selectedMovie, modalOptions, openModal, closeModal }}>{children}</InfoModalContext.Provider>;
}
