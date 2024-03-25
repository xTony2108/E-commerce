import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Buttons } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SingleProduct = () => {
  const [image, setImage] = useState("");

  const bigImageRef = useRef();

  const param = useParams();
  const products = useSelector((state) => state.product._products);

  const product =
    useSelector((state) => state.product.singleProduct) ||
    (products && products.find((product) => product._id === param.id));

  const loading = useSelector((state) => state.product.loading);

  const handleMouseHover = (e) => {
    const { src } = e.target;

    const originalImage = bigImageRef.current.src;

    setImage(originalImage);

    bigImageRef.current.src = src;
  };

  const handleMouseLeave = () => {
    bigImageRef.current.src = image;
  };

  const getDate = product && new Date(product.releaseDate);
  const releaseDate = getDate && getDate.getFullYear();

  return (
    <>
      {!loading && product && (
        <div className="max-w-screen-2xl m-auto flex flex-col py-8 min-h-[calc(100svh-112px)]">
          <Link
            to="/products"
            className="text-white text-2xl flex items-center hover:text-gghPink active:translate-y-0.5 w-fit"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              style={{ marginRight: "12px" }}
            />
            Indietro
          </Link>
          <div className="flex mt-8">
            <div className="flex flex-col gap-4 flex-1">
              <div className="rounded-md max-w-xl">
                <img
                  ref={bigImageRef}
                  src={product.frontImage}
                  className="rounded-md object-contain aspect-square bg-white"
                />
              </div>
              <div className="flex relative z-30">
                <div className="flex relative hover:barBg z-30">
                  {product &&
                    product.images.map((item) => (
                      <img
                        key={item._id}
                        src={item.image}
                        onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseLeave}
                        className="w-full max-w-28 aspect-square rounded-md relative z-30 object-contain bg-white cursor-pointer"
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <h1 className="flex text-gghYellow font-semibold text-2xl">
                {product?.name}
              </h1>
              <span className="text-white text-xl mt-8 flex justify-center gap-4">
                <span>Prezzo: {product.price}€</span>
                <span>Anno rilascio: {releaseDate}</span>
              </span>
              <div className="flex justify-center items-center mt-8">
                <span className="text-white font-semibold mr-4">Quantità:</span>
                {product.qnt > 0 ? (
                  <select
                    name="quantity"
                    className="outline-none rounded-md min-w-14"
                  >
                    {Array.from({ length: product.qnt }).map((_, index) => (
                      <option key={new Date() + index}>{index + 1}</option>
                    ))}
                  </select>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Non disponibile
                  </span>
                )}
              </div>
              <span className="flex gap-4 justify-center items-center mt-8">
                <Buttons type="button" text="Lista desideri" />
                {product && product.qnt > 0 ? (
                  <Buttons
                    type="button"
                    filled={true}
                    text="Aggiungi al carrello"
                  />
                ) : (
                  ""
                )}
              </span>

              <h2 className="text-xl text-gghYellow text-center mt-8 font-semibold">
                Descrizione
              </h2>
              <ul className="text-white list-disc list-inside font-semibold">
                {product.info.map((desc) => (
                  <li key={desc._id} className="my-4">
                    {desc.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
