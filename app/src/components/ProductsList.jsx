import { ProductsCard } from "./ProductsCard";
import { SearchBar } from "./SearchBar";

export const ProductsList = () => {
  return (
    <>
      <SearchBar />
      <div className="max-w-screen-2xl m-auto flex flex-wrap py-16 gap-10 min-h-[calc(100svh-152px)]">
        <ProductsCard />
      </div>
    </>
  );
};
