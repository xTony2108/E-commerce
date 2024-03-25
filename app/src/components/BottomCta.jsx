import { Buttons } from "./Buttons";

export const BottomCta = () => {
  return (
    <section>
      <div className="bg-primary py-16 bg-bottomCta bg-blend-overlay bg-cover bg-center">
        <div className="flex flex-col items-center gap-5 max-w-screen-2xl m-auto">
          <h2 className="text-gghYellow font-bold text-3xl max-2xl:text-xl">
            Massimizza il tuo setup!
          </h2>
          <p className="text-white text-lg">
            Dai un'accelerata al tuo setup e vivi l'esperienza di gioco
            definitiva. Scegli la potenza, scegli la vittoria!
          </p>
          <Buttons text="Esplora ora" filled={true} route="/products" />
        </div>
      </div>
    </section>
  );
};
