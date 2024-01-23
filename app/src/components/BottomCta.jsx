import { Button } from "./Button";

export const BottomCta = () => {
  return (
    <div className="bg-[#1C1E22] py-32">
      <div className="flex flex-col items-center gap-5 max-w-screen-2xl m-auto">
        <h6 className="text-[#AEDFF7] font-bold text-3xl max-2xl:text-xl">
          Massimizza il tuo setup!
        </h6>
        <p className="text-white">
          Dai un'accelerata al tuo setup e vivi l'esperienza di gioco
          definitiva. Scegli la potenza, scegli la vittoria!
        </p>
        <Button text="Esplora ora" filled={true} route="/products" />
      </div>
    </div>
  );
};
