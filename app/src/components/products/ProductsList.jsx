import { useMemo, useRef, useState } from "react";
import { ProductsCard } from "./ProductsCard";
import { SpecialOffers } from "./SpecialOffers";
import { PaginatedButtons } from "./PaginatedButtons";
import { useGetAllProductsQuery } from "../../services/product/productSlice";
import { PageLocation } from "../layout/PageLocation";
import { ProductsDropdown } from "./ProductsDropdown";
import {  useSelector } from "react-redux";
import { PageHeading } from "../layout/PageHeading";

export const ProductsList = () => {
  const { data: products = [] } = useGetAllProductsQuery();
  const linkCategory = useSelector((state) => state.category.categoryName);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(linkCategory || "default");

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
      <div className="bg-white dark:bg-black py-20">
        <div className="max-w-screen-2xl m-auto">
          <PageHeading page="Prodotti" />
          <PageLocation pages={["Prodotti"]} />
          <div className="flex justify-between items-center border-b border-border pb-8 text-light dark:text-dark font-semibold px-12">
            <span>
              Mostrando 1-{paginatedProducts.length} di{" "}
              {paginatedProducts.length} risultati
            </span>
            <div className="flex gap-6 justify-center items-center">
              <ProductsDropdown
                pagination={{ setPage }}
                state={{ setQuery, query }}
              />
              <button className="text-light dark:text-dark border border-border py-1 px-10 rounded-lg text-md">Altri filtri</button>
            </div>
          </div>
          <div className="flex py-20 gap-5 items-start px-12" ref={scrollRef}>
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
