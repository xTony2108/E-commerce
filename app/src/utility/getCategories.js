import { useMemo } from "react";
import { useGetAllProductsQuery } from "../services/product/productSlice";

export const getCategories = (capitalize = false) => {
  const { data: products = [] } = useGetAllProductsQuery();

  if (capitalize) {
    const categories = useMemo(() => {
      return products
        .map(
          (product) =>
            product.category.charAt(0).toUpperCase() + product.category.slice(1)
        )
        .filter((category, index, array) => array.indexOf(category) === index);
    }, [products]);

    return categories;
  } else {
    const categories = useMemo(() => {
      return products
        .map((product) => product.category)
        .filter((category, index, array) => array.indexOf(category) === index);
    }, [products]);

    return categories;
  }
};
