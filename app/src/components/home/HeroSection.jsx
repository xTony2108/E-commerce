import cta from "../../assets/images/heroSection/cta.webp";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";
import { Buttons } from "../buttons/Buttons";
import { useMemo } from "react";
import { useGetAllProductsQuery } from "../../services/product/productSlice";
import { ProductsCard } from "../products/ProductsCard";

export const HeroSection = () => {
  const { data: products = [] } = useGetAllProductsQuery();

  const discountedProducts = useMemo(() => {
    return products
      .filter((product) => product.offers.isActive === true)
      .slice(0, 6);
  }, [products]);

  return (
    <div className="relative bg-bg">
      <div className="max-w-screen-2xl m-auto flex min-h-[calc(100svh-172px)] pt-28 px-12">
        <div className="flex-1 min-w-0">
          <div className="relative mr-6">
            <img
              src={cta}
              alt="gaming room background image"
              className="select-none border border-border object-cover rounded-xl opacity-30 -w-full"
            />
            <div className="absolute flex flex-col top-1/2 pl-12 -translate-y-1/2 w-3/4">
              <span className="text-secondary text-lg font-semibold">
                OTTIENI IL <span className="text-primary">15% DI SCONTO </span>
                ADESSO!
              </span>
              <h1 className="text-secondary text-4xl font-black  pt-2 pb-16 leading-tight">
                Trova Qualsiasi Componente Per Il Tuo
                <span className="text-primary"> PC</span>
              </h1>
              <Buttons orange={true} text="Compra adesso" route="/products" />
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0 relative">
          <ProductsCard productsArray={discountedProducts} isSwiper={true} />
          <div className="mt-10 swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};
