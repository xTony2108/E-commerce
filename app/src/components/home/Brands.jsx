import amd from "../../assets/images/logos/amd.webp";
import nvidia from "../../assets/images/logos/nvidia.webp";
import intel from "../../assets/images/logos/intel.webp";
import msi from "../../assets/images/logos/msi.webp";
import razer from "../../assets/images/logos/razer.webp";
import asus from "../../assets/images/logos/asus.webp";
import { BrandBox } from "./BrandBox";

export const Brands = () => {
  return (
    <div className="bg-bg pb-32">
      <div className="max-w-screen-2xl m-auto">
        <div className="flex justify-center items-center gap-3 mb-12">
          <span className="orangeDot"></span>
          <h2 className="text-secondary text-4xl font-semibold">
            I nostri top brand
          </h2>
          <span className="orangeDot"></span>
        </div>
        <div className="flex gap-6 px-12 bg-bg">
          <BrandBox image={amd} alt="amd logo" />
          <BrandBox image={nvidia} alt="nvidia logo" className="px-4" />
          <BrandBox image={intel} alt="intel logo" />
          <BrandBox image={msi} alt="msi logo" className="px-4" />
          <BrandBox image={razer} alt="razer logo" className="px-4" />
          <BrandBox image={asus} alt="asus logo" className="px-4" />
        </div>
      </div>
    </div>
  );
};
