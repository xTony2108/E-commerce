import { useMemo, useRef, useState } from "react";
import { ProductsCard } from "./ProductsCard";
import { SpecialOffers } from "./SpecialOffers";
import { PaginatedButtons } from "./PaginatedButtons";
import { useGetAllProductsQuery } from "../../services/product/productSlice";
import { PageLocation } from "../layout/PageLocation";
import { ProductsDropdown } from "./ProductsDropdown";
import { useSelector } from "react-redux";
export const ProductsList = () => {
  const { data: products = [] } = useGetAllProductsQuery();
  const linkCategory = useSelector((state) => state.category.categoryName);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(linkCategory || "default");
  console.log(query);
  const scrollRef = useRef();

  const itemsPerPage = 9;

  const paginatedProducts = useMemo(() => {
    const startIndex = itemsPerPage * (page - 1);
    const endIndex = itemsPerPage + startIndex;

    if (products && query === "default") {
      return products.slice(startIndex, endIndex);
    } else {
      return products
        .filter(
          (product) => product.category.toLowerCase() === query.toLowerCase()
        )
        .slice(startIndex, endIndex);
    }
  }, [products, page, query]);

  const totalPages = useMemo(() => {
    if (query !== "default") {
      return Math.ceil(paginatedProducts.length / itemsPerPage);
    } else return Math.ceil(products.length / itemsPerPage);
  }, [paginatedProducts, query]);

  return (
    <>
      <div className="bg-black py-20">
        <div className="max-w-screen-2xl m-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="relative orangeDot"></span>
            <h2 className="text-white text-4xl font-semibold">Prodotti</h2>
            <span className="relative orangeDot"></span>
          </div>
          <PageLocation pages={["Prodotti"]} />
          <div className="flex justify-between items-center border-b border-border pb-8 text-white font-semibold">
            <span>
              Mostrando 1-{paginatedProducts.length} di{" "}
              {paginatedProducts.length} risultati
            </span>
            <ProductsDropdown
              pagination={{ setPage }}
              state={{ setQuery, query }}
            />
          </div>
          <div className="flex py-20 gap-5 items-start" ref={scrollRef}>
            <SpecialOffers />
            <div className="flex flex-col gap-12 flex-1 basis-3/4">
              <div className="flex flex-wrap gap-5 justify-between">
                <ProductsCard productsArray={paginatedProducts} />
              </div>
              <PaginatedButtons
                pagination={{ page, setPage, totalPages }}
                ref={scrollRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
