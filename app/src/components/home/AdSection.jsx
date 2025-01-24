import { Ad } from "./Ad";

export const AdSection = () => {
  return (
    <div className="flex gap-6 relative bg-white dark:bg-black py-10">
      <Ad
        heading="Scopri la potenza!"
        paragraph="Esplora la nostra vasta gamma di componenti PC di alta qualità per
          prestazioni eccezionali."
        bgImage="bg-adLeft"
      />
      <Ad
        heading="Massimizza le prestazioni!"
        paragraph="Trova i componenti PC migliori per garantire un'esperienza
            informatica fluida e reattiva."
        bgImage="bg-adRight"
      />
    </div>
  );
};
