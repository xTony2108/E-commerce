import { useDispatch, useSelector } from "react-redux";
import { setSingleProduct } from "../store/productSlice";
import { ButtonLink } from "./ButtonLink";
import clsx from "clsx";

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
            className="relative flex flex-col basis-[calc(25%-2rem)] rounded-md justify-between p-4 shadow-lg shadow-black imageParent cardBg h-fit"
          >
            <div className="relative z-30 bg-white rounded-md min-h-60 flex items-center justify-center">
              <img
                className="hideProduct max-h-60 w-full object-contain p-2"
                src={`http://localhost:3000${product.images[0]}`}
              />
              <ButtonLink
                addClass="text-white absolute showButton opacity-0 bg-primary max-w-fit self-center"
                filled={true}
                text="Dettagli"
                onClick={() => dispatch(setSingleProduct(product))}
                route={`./${product._id}`}
              />
            </div>
            <div className="py-4 relative z-20">
              <span className="text-base line-clamp-2 mb-2 text-white font-semibold">
                {product.name}
              </span>
              <div className="flex justify-between items-end pt-4">
                <span className="text-xl text-white font-semibold">
                  {product.price}€
                </span>
                <span
                  className={clsx(
                    "text-lg font-semibold",
                    product.qnt > 0 ? "text-green-600" : "text-red-600"
                  )}
                >
                  {product.qnt > 0 ? "Disponibile" : "Non disponibile"}
                </span>
              </div>
            </div>
          </div>
        ))}
      {data && data.length <= 0 && (
        <div className="w-full flex items-center justify-center">
          <h1 className="text-center text-3xl text-white font-bold">
            Nessun prodotto trovato.
          </h1>
        </div>
      )}
    </>
  );
};
