import bg from "../assets/images/HeroSection/bg.png";
import cta from "../assets/images/HeroSection/cta.png";
import { Button } from "./Button";
import { Navbar } from "./Navbar";

export const HeroSection = () => {
  return (
    <header className="relative">
      <Navbar />
      <div className="absolute top-0 left-0 right-0 bottom-0 after:hero-section max-h-screen">
        <img src={bg} className="w-full object-cover relative h-full" />
      </div>
      <div className="relative max-w-screen-2xl m-auto display flex items-center min-h-[calc(100svh-112px)] gap-16 max-2xl:max-w-screen-lg">
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="font-black text-5xl text-[#AEDFF7] max-2xl:text-4xl">
            GamerGear Hub: potenzia il tuo gioco, vivi la vittoria!
          </h1>
          <p className="text-white text-lg font-normal max-2xl:text-base">
            Scopri il potenziale del tuo setup gaming con GamerGear Hub! Scegli
            i componenti di ultima generazione per un'esperienza di gioco
            straordinaria. Entra nel mondo dell'alta performance, acquista
            adesso e solca il tuo cammino verso la vittoria!
          </p>
          <div className="flex gap-4">
            <Button text="Iscriviti" filled={true} route="/register" />
            <Button text="Prodotti" filled={false} route="/products" />
          </div>
        </div>
        <div className="flex-1">
          <img src={cta} alt="man gaming on a chair" className="object-cover" />
        </div>
      </div>
    </header>
  );
};
