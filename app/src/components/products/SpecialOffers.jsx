import { useGetSpecialOffers } from "./hooks/useGetSpecialOffers";
import { SpecialOffersCard } from "./SpecialOffersCard";

export const SpecialOffers = () => {
  const { days, hours, minutes, seconds, specialOffers } =
    useGetSpecialOffers();

  return (
    <div className="bg-lightBg dark:bg-grayBg p-6 rounded-xl flex-1 basis-1/4">
      <span className="inline-block text-light dark:text-dark text-2xl font-semibold">
        Offerta speciale
      </span>
      <SpecialOffersCard arr={specialOffers} />
      <div className="mt-6">
        <span className="text-light dark:text-dark font-prosto text-lg font-medium mb-2 block">
          Affrettati!
        </span>
        <span className="text-light dark:text-dark font-prosto text-sm block mb-10">
          L'offerta scade in
        </span>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{days}
            </span>
            <span className="text-expiration font-prosto text-sm">Giorni</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{hours}
            </span>
            <span className="text-expiration font-prosto text-sm">Ore</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{minutes}
            </span>
            <span className="text-expiration font-prosto text-sm">Minuti</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{seconds}
            </span>
            <span className="text-expiration font-prosto text-sm">Secondi</span>
          </div>
        </div>
      </div>
    </div>
  );
};
