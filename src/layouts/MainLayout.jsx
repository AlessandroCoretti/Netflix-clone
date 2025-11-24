import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <header className="mb-[4rem]">
        <Navbar />
      </header>
      <main style={{ height: "100%", marginBottom: "6rem" }}>
        <Outlet />
      </main>
      <footer className="mb-5">
        <Footer />
      </footer>
    </>
  );
}
