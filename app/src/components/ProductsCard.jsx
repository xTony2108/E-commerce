import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProduct } from "../store/productSlice";
import { ButtonLink } from "./ButtonLink";

export const ProductsCard = () => {
  const data = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  const dispatch = useDispatch();
  return (
    <>
      {!loading &&
        data &&
        data.map((product) => (
          <div
            key={product._id}
            className="relative flex flex-col basis-[calc(25%-2rem)] rounded-md justify-between p-4 shadow-lg shadow-black imageParent cardBg"
          >
            <div
              className="hideProduct relative z-20"
              onClick={() => dispatch(setProduct(product))}
              to={`./${product._id}`}
            >
              <div className="bg-white rounded-md min-h-60 flex items-center justify-center">
                <img
                  className="max-h-60 w-full object-contain p-2"
                  src={`http://localhost:3000${product.images[0]}`}
                />
              </div>
            </div>
            <div className="py-4 relative z-20">
              <span className="text-base line-clamp-2 mb-2 text-white font-semibold">
                {product.name}
              </span>
              <span className="text-xl text-white font-semibold">
                {product.price}€
              </span>
            </div>
            <ButtonLink
              addClass="text-white relative z-20 showButton hidden bg-primary max-w-fit self-center"
              filled={true}
              text="Dettagli"
              route={`./${product._id}`}
            />
          </div>
        ))}
    </>
  );
};
