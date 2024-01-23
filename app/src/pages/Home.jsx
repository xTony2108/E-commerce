import { HeroSection } from "../components/HeroSection";
import { Description } from "../components/Description";
import { SecondDescription } from "../components/SecondDescription";
import { ThirdDescription } from "../components/ThirdDescription";
import { FeedbackCard } from "../components/FeedbackCard";
import { Faq } from "../components/Faq";

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
        <div className="max-w-screen-2xl m-auto max-2xl:max-w-screen-lg">
          <Description />
          <SecondDescription />
          <ThirdDescription />
        </div>
      </div>
      <div className="bg-[#27303B] py-32">
        <div className="max-w-screen-2xl m-auto max-2xl:max-w-screen-lg">
          <h4 className="text-[#AEDFF7] font-bold text-3xl mb-12 text-center max-2xl:text-xl">
            Feedback degli acquirenti: il verdetto direttamente dai consumatori
          </h4>
          <div className="flex gap-4 pb-32">
            <FeedbackCard comment={firstComment} name="Marco" />
            <FeedbackCard comment={secondComment} name="Laura" />
            <FeedbackCard comment={thirdComment} name="Luca" />
          </div>
          <h5 className="text-[#AEDFF7] font-bold text-3xl mb-12 text-center max-2xl:text-xl">
            Domande Frequenti
          </h5>
          <div className="flex flex-col gap-8">
            <Faq
              question="Come posso effettuare un ordine sul vostro sito?"
              answer="Sfoglia il catalogo, aggiungi i prodotti al carrello, procedi al checkout, conferma l'ordine e completa il pagamento per ricevere una conferma e informazioni di tracciamento via e-mail. Per assistenza, contatta il nostro servizio clienti."
            />
            <Faq
              question="Quali sono le opzioni di spedizione disponibili?"
              answer="Offriamo diverse opzioni di spedizione, tra cui standard e express. I dettagli e i costi saranno presentati durante il processo di checkout. La spedizione è tracciabile, e riceverai informazioni aggiornate sull'avanzamento della consegna via e-mail. Per ulteriori dettagli, visita la nostra pagina delle opzioni di spedizione o contatta il nostro servizio clienti."
            />
            <Faq
              question="Posso restituire un prodotto e ottenere un rimborso?"
              answer="Sì, accettiamo resi entro un determinato periodo dall'acquisto. Assicurati che il prodotto sia nelle condizioni originali. Per ulteriori istruzioni e per avviare una restituzione, visita la nostra pagina delle politiche di reso o contatta il nostro servizio clienti. Il rimborso sarà elaborato dopo la ricezione e la verifica del prodotto restituito."
            />
            <Faq
              question="Avete programmi di sconti o offerte speciali?"
              answer="Sì, offriamo regolarmente promozioni, sconti e offerte speciali sui nostri prodotti. Per rimanere aggiornato sulle ultime offerte, controlla la nostra pagina delle promozioni o iscriviti alla nostra newsletter. Inoltre, seguici sui social media per accedere a offerte esclusive. Resta sintonizzato per risparmiare su componenti gaming di alta qualità!"
            />
          </div>
        </div>
      </div>
    </>
  );
};
