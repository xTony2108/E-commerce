import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Buttons } from "../buttons/Buttons";
import { useGetAllProductsQuery } from "../../services/product/productSlice";
import { Stars } from "./SVG/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { PageLocation } from "../layout/PageLocation";
import { ShareLinks } from "../buttons/ShareLinks";
import { ProductQuantity } from "../buttons/ProductQuantity";
import { useAddToCart } from "./hooks/useAddToCart";

export const SingleProduct = () => {
  const { data: products = [] } = useGetAllProductsQuery();
  const param = useParams();

  const product = useMemo(
    () =>
      products.find(
        (product) =>
          product.name === decodeURI(param.productName).replaceAll("_", " ")
      ),
    [param]
  );
  
  const { handleAddToCart } = useAddToCart();
  
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState("description");
  const bigImageRef = useRef();

  const handleMouseHover = (e) => {
    const { src } = e.target;

    const originalImage = bigImageRef.current.src;

    setImage(originalImage);

    bigImageRef.current.src = src;
  };

  const handleMouseLeave = () => {
    bigImageRef.current.src = image;
  };

  const removeQuantity = () => {
    setQuantity((prevstate) => (prevstate <= 1 ? 1 : prevstate - 1));
  };

  const showQuantity = (e) => {
    setQuantity(
      e.target.value >= product.qnt ? product.qnt : Number(e.target.value)
    );
  };

  const addQuantity = () => {
    setQuantity((prevState) =>
      prevState >= product.qnt ? product.qnt : prevState + 1
    );
  };
  
  
  return (
    <>
      {product && (
        <div className="max-w-screen-2xl m-auto flex flex-col py-8 min-h-[calc(100svh-112px)]">
          <PageLocation pages={["Prodotti", "Dettagli"]} />
          <div className="flex mt-8 gap-6 px-12">
            <div className="flex flex-col gap-4 flex-1 basis-2/5 ">
              <div className="rounded-md flex items-center justify-center aspect-square bg-lightBg dark:bg-grayBg ">
                <img
                  ref={bigImageRef}
                  src={product.frontImage}
                  className="rounded-md object-contain h-96 w-96"
                />
              </div>
              <div className="flex relative z-30">
                <div className="flex relative hover:barBg z-30">
                  {product.images.length > 0 &&
                    product.images.map((item) => (
                      <img
                        key={item._id}
                        src={item.image}
                        onMouseEnter={handleMouseHover}
                        onMouseLeave={handleMouseLeave}
                        className="w-full max-w-28 aspect-square rounded-md relative z-30 object-contain bg-lightBg dark:bg-grayBg cursor-pointer"
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 basis-3/5">
              <h1 className="flex text-primary font-semibold text-2xl">
                {product?.name}
              </h1>
              <Stars product={product} />
              {product.offers.isActive ? (
                <div className="flex items-center gap-3">
                  <span className="text-fullPrice font-prosto text-3xl line-through decoration-2">
                    {product.price}€
                  </span>
                  <span className="text-light dark:text-dark font-prosto text-4xl">
                    {(
                      product.price *
                      (1 - product.offers.discountPercentage / 100)
                    ).toFixed(2)}
                    €
                  </span>
                  <span className="text-discount font-prosto text-2xl">
                    {-(product.price * (10 / 100)).toFixed(2)}€
                  </span>
                </div>
              ) : (
                <span className="text-light dark:text-dark text-4xl font-prosto font-normal">
                  {product.price}€
                </span>
              )}
              <h2 className="text-primary text-lg my-4">
                Descrizione prodotto
              </h2>
              <p className="text-light dark:text-dark max-h-36 overflow-auto text-ellipsis line-clamp-5 scrollText">
                {product.details.length > 0
                  ? product.details
                  : "Nessuna descrizione per il prodotto"}
              </p>
              <span className="text-light dark:text-dark text-lg leading-none border-y border-border my-6 py-6 gap-2 font-prosto w-2/3">
                Categorie:
                <Link
                  to="../"
                  className="text-light dark:text-dark hover:text-primary transition-all leading-none text-base ml-2"
                >
                  {product.category}
                </Link>
              </span>
              <ShareLinks />
              {
              product && product.qnt ?
              <ProductQuantity
                add={addQuantity}
                remove={removeQuantity}
                show={showQuantity}
                quantity={quantity}
              />
              :
              <span className="text-discount font-medium text-xl">Non disponibile</span>
              }
              <div className="flex-grow flex items-end">
                <Buttons
                  type="button"
                  icon={
                    <FontAwesomeIcon
                      icon="fa-solid fa-basket-shopping"
                      style={{ marginRight: "6px" }}
                    />
                  }
                  text={"Aggiungi al carrello"}
                  addClass="w-2/3"
                  onClick={() => handleAddToCart({...product, cartQnt: quantity})}
                />
              </div>
            </div>
          </div>
          <div className="py-6 my-6 border-y border-border flex items-center gap-4 px-12">
            <button
              onClick={() => setShow("description")}
              className={clsx(
                "font-prosto text-lg",
                show === "description" ? "text-primary" : "text-light dark:text-dark"
              )}
            >
              DESCRIZIONE
            </button>
            <button
              onClick={() => setShow("reviews")}
              className={clsx(
                "font-prosto text-lg",
                show === "reviews" ? "text-primary" : "text-light dark:text-dark"
              )}
            >
              RECENSIONI ({product.reviews.length})
            </button>
          </div>
          {show === "description" ? (
            product.details.length > 0 ? (
              <div className="mt-4 text-grayBg dark:text-lightGray px-12">{product.details}</div>
            ) : (
              <div className="mt-4 text-grayBg dark:text-lightGray text-center">
                Nessuna descrizione per il prodotto
              </div>
            )
          ) : (
            <div className="mt-4 text-grayBg dark:text-lightGray px-12">
              {product.reviews.length > 0 ? (
                product.reviews.map((review) => (
                  <div className="flex flex-col border border-border rounded-xl p-6 px-12">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-primary text-lg">
                          {review.author.name}
                        </span>
                        <span className="text-light dark:text-dark font-medium">
                          {new Date(review.createdAt).toLocaleDateString(
                            "IT-it",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <Stars product={review} isReview={true} />
                    </div>
                    <span className="text-light dark:text-dark text-lg font-semibold">
                      {review.title}
                    </span>
                    <span className="text-light dark:text-dark">{review.comment}</span>
                  </div>
                ))
              ) : (
                <p className="text-center w-full">
                  Non ci sono ancora recensioni per questo prodotto
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
