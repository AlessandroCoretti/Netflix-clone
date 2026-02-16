import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <>
      <header className="mb-18 md:mb-16">
        <Navbar />
      </header>

      <main style={{ height: "100%", marginBottom: "6rem" }}>
        <Outlet />
      </main>
      <footer className="hidden md:block mb-5">
        <Footer />
      </footer>
    </>
  );
}
