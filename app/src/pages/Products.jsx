import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export const Products = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-black min-h-screen relative">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
