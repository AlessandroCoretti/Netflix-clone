import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Serie from "./pages/Serie";
import Film from "./pages/Film";
import NuoviEPopolari from "./pages/NuoviEPopolari";
import LaMiaLista from "./pages/LaMiaLista";
import Kids from "./pages/Kids";
import MainLayout from "./layouts/MainLayout";
import MovieProvider from "./context/MovieProvider";
import InfoModal from "./components/InfoModal";
import { InfoModalProvider } from "./context/InfoModalProvider";
import ProfileChoice from "./pages/ProfileChoice";
import ManageProfiles from "./pages/ManageProfiles";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (
    <ProfileProvider>
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
              <Route path="/kids" element={<Kids />} />
            </Route>
            <Route path="/" element={<ProfileChoice />} />
            <Route path="/manage-profiles" element={<ManageProfiles />} />
          </Routes>
        </InfoModalProvider>
      </MovieProvider>
    </ProfileProvider>
  );
}

export default App;
