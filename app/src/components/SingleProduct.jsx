import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const param = useParams();
  const products = useSelector((state) => state.product.products);
  const product =
    useSelector((state) => state.product.singleProduct) ||
    (products && products.find((product) => product._id === param.id));

  const loading = useSelector((state) => state.product.loading);
  return (
    <>
      {!loading && (
        <div className="flex text-white h-[calc(100svh-112px)]">
          {product?.name}
        </div>
      )}
    </>
  );
};
