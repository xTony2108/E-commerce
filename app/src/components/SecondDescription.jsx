import pc from "../assets/images/feature-benefits/pc.jpg";

export const SecondDescription = () => {
  return (
    <section>
      <div className="py-32 flex items-center gap-16">
        <div className="flex-1">
          <h2 className="text-[#AEDFF7] font-bold mb-4 text-3xl max-2xl:text-xl">
            Scopri l'eccellenza tecnologica: un mondo di prestazioni
            straordinarie ti aspetta!
          </h2>
          <p className="text-white text-lg">
            Esplora il nostro vasto assortimento di hardware PC di alta qualità,
            progettato per soddisfare le esigenze di ogni appassionato di
            tecnologia. Con una gamma diversificata di prodotti, offriamo:
          </p>
          <ul className="text-white text-lg list-disc">
            <li>
              Prestazioni straordinarie: processori e schede grafiche
              all'avanguardia per un'esperienza di gioco e produttività senza
              compromessi.
            </li>
            <li>
              Affidabilità senza paragoni: componenti selezionati attentamente
              per garantire una durata nel tempo e una stabilità superiore.
            </li>
            <li>
              Stile e design: componenti che non solo esaltano le prestazioni,
              ma aggiungono anche un tocco di eleganza al tuo setup.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img src={pc} alt="gaming pc" className="rounded-2xl w-full" />
        </div>
      </div>
    </section>
  );
};
