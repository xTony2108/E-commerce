import pc from "../assets/images/feature-benefits/pc.jpg";

export const SecondDescription = () => {
  return (
    <div className="py-32 flex items-center gap-16">
      <div className="flex-1">
        <h3 className="text-[#AEDFF7] font-bold text-2xl mb-4">
          Scopri l'eccellenza tecnologica: un mondo di prestazioni straordinarie
          ti aspetta!
        </h3>
        <p className="text-white">
          Esplora il nostro vasto assortimento di hardware PC di alta qualità,
          progettato per soddisfare le esigenze di ogni appassionato di
          tecnologia. Con una gamma diversificata di prodotti, offriamo:
        </p>
        <ul className="text-white list-disc">
          <li>
            Prestazioni Straordinarie: Processori e schede grafiche
            all'avanguardia per un'esperienza di gioco e produttività senza
            compromessi.
          </li>
          <li>
            Affidabilità senza Paragoni: Componenti selezionati attentamente per
            garantire una durata nel tempo e una stabilità superiore.
          </li>
          <li>
            Stile e Design: Componenti che non solo esaltano le prestazioni, ma
            aggiungono anche un tocco di eleganza al tuo setup.
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <img src={pc} alt="gaming pc" className="rounded-2xl" />
      </div>
    </div>
  );
};
