import { CategoriesSection } from "../components/home/CategoriesSection";
import { HeroSection } from "../components/home/HeroSection";
import { LatestArrives } from "../components/home/LatestArrives";
import { AdSection } from "../components/home/AdSection";
import { Brands } from "../components/home/Brands";
import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        <AdSection />
        <LatestArrives />
        <Brands />
      </main>
      <Footer />
    </>
  );
};
