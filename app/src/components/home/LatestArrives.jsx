import { useMemo } from "react";
import { useGetAllProductsQuery } from "../../services/product/productSlice";
import { ProductsCard } from "../products/ProductsCard";
import { SpecialOffers } from "../products/SpecialOffers";

export const LatestArrives = () => {
  const { data: products } = useGetAllProductsQuery();

  const recentProducts = useMemo(() => {
    if (products && products.length > 0) {
      return [...products]
        .filter((product) => product.qnt > 0)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
    }
  }, [products]);

  return (
    <div className="bg-black py-20">
      <div className=" max-w-screen-2xl m-auto">
        <div className="flex items-center justify-center gap-3 border-b border-border pb-8">
          <span className="relative orangeDot"></span>
          <h2 className="text-white text-4xl font-semibold">Ultimi arrivi</h2>
          <span className="relative orangeDot"></span>
        </div>
        <div className="flex py-20 gap-5 items-start">
          <SpecialOffers />
          <div className="flex flex-wrap gap-5 flex-1 basis-3/4">
            <ProductsCard productsArray={recentProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
