import { useGetSpecialOffers } from "./hooks/useGetSpecialOffers";
import { SpecialOffersCard } from "./SpecialOffersCard";

export const SpecialOffers = () => {
  const { days, hours, minutes, seconds, specialOffers } =
    useGetSpecialOffers();
  return (
    <div className="bg-[#191919] p-6 rounded-xl flex-1 basis-1/4">
      <span className="inline-block text-white text-2xl font-semibold">
        Offerta speciale
      </span>
      <SpecialOffersCard arr={specialOffers} />
      <div className="mt-6">
        <span className="text-white font-prosto text-lg font-medium mb-2 block">
          Affrettati!
        </span>
        <span className="text-white font-prosto text-sm block mb-10">
          L'offerta scade in
        </span>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{days}
            </span>
            <span className="text-[#a6a6a6] font-prosto text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{hours}
            </span>
            <span className="text-[#a6a6a6] font-prosto text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{minutes}
            </span>
            <span className="text-[#a6a6a6] font-prosto text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-black flex items-center justify-center bg-primary rounded-full w-[4rem] h-[4rem] font-semibold">
              -{seconds}
            </span>
            <span className="text-[#a6a6a6] font-prosto text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
