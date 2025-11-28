import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Serie from "./pages/Serie";
import Film from "./pages/Film";
import NuoviEPopolari from "./pages/NuoviEPopolari";
import LaMiaLista from "./pages/LaMiaLista";
import MainLayout from "./layouts/MainLayout";
import MovieProvider from "./context/MovieProvider";
import InfoModal from "./components/InfoModal";
import { InfoModalProvider } from "./context/InfoModalProvider";
import ProfileChoice from "./pages/ProfileChoice";

function App() {
  return (
    <MovieProvider>
      <InfoModalProvider>
        <InfoModal />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/serie-tv" element={<Serie />} />
            <Route path="/film" element={<Film />} />
            <Route path="/new" element={<NuoviEPopolari />} />
            <Route path="/my-list" element={<LaMiaLista />} />
          </Route>
          <Route path="/" element={<ProfileChoice />} />
        </Routes>
      </InfoModalProvider>
    </MovieProvider>
  );
}

export default App;
