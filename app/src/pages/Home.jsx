import { HeroSection } from "../components/HeroSection";
import { Description } from "../components/Description";
import { SecondDescription } from "../components/SecondDescription";
import { ThirdDescription } from "../components/ThirdDescription";
import { FeedbackCard } from "../components/FeedbackCard";

export const Home = () => {
  const firstComment = `Ho recentemente acquistato un processore dal vostro e-commerce e sono
  rimasto estremamente soddisfatto. Le prestazioni sono al di là delle mie
  aspettative, e il servizio clienti è stato impeccabile. Consiglio
  vivamente questo negozio a tutti gli appassionati di tecnologia!`;

  const secondComment = `Ho ordinato una scheda grafica dal vostro sito e sono rimasta colpita dalla rapidità della consegna e dalla qualità del prodotto. La scheda grafica ha notevolmente migliorato le prestazioni del mio PC, rendendo l'esperienza di gioco estremamente fluida. Grazie per il servizio eccellente!`;

  const thirdComment = `Il mio ultimo acquisto di un disco SSD è stata una decisione vincente. La consegna è stata veloce, e il prodotto ha davvero rivoluzionato le prestazioni del mio computer. Avvio istantaneo e trasferimenti di dati veloci. Sono davvero soddisfatto e non vedo l'ora di esplorare altri prodotti nel vostro assortimento.`;

  return (
    <>
      <HeroSection />
      <div className="bg-[#121420] py-32">
        <div className="max-w-screen-lg m-auto">
          <Description />
          <SecondDescription />
          <ThirdDescription />
        </div>
      </div>
      <div className="bg-[#1C1E22] py-32">
        <div className="max-w-screen-lg m-auto">
          <h4 className="text-[#AEDFF7] font-bold text-2xl mb-12 text-center">
            Feedback degli acquirenti: il verdetto direttamente dai consumatori
          </h4>
          <div className="flex gap-4 pb-32">
            <FeedbackCard comment={firstComment} name="Marco" />
            <FeedbackCard comment={secondComment} name="Laura" />
            <FeedbackCard comment={thirdComment} name="Luca" />
          </div>
        </div>
      </div>
    </>
  );
};
