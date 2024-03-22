import { ProductsCard } from "./ProductsCard";

export const ProductsList = () => {
  return (
    <>
      <div className="max-w-screen-2xl m-auto flex flex-wrap pt-16 gap-10">
        <ProductsCard />
      </div>
    </>
  );
};
