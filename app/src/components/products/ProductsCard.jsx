import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/autoplay";
import { Stars } from "../products/SVG/Stars";
import { AddToCartButton } from "../buttons/AddToCartButton";

export const ProductsCard = ({ productsArray, isSwiper }) => {
  return (
    <>
      {!isSwiper ? (
        productsArray &&
        productsArray.map((product) => (
          <div
            key={product._id}
            className="flex flex-col justify-between  border border-border rounded-xl basis-[calc(33.333333%-1.25rem)] hover:-translate-y-2 transition-all ease-in-out duration-300 will-change-transform"
          >
            <div className="mt-5">
              <div className="flex max-w-72 h-72 mx-auto">
                <img
                  alt={`${product.name}`}
                  src={`${product.frontImage}`}
                  className="object-contain aspect-square select-none"
                />
              </div>
              <div className="p-10 py-4">
                <Link
                  to={`/products/${encodeURIComponent(
                    product.name.replaceAll(" ", "_")
                  )}`}
                  className="text-secondary text-lg font-medium font-prosto line-clamp-1 hover:text-primary"
                >
                  {product.name}
                </Link>
                {product.offers.isActive ? (
                  <div className="pt-4 flex items-center gap-3">
                    <span className="text-fullPrice font-semibold text-lg line-through decoration-2">
                      {product.price}€
                    </span>
                    <span className="text-primary font-semibold text-xl">
                      {(
                        product.price *
                        (1 - product.offers.discountPercentage / 100)
                      ).toFixed(2)}
                      €
                    </span>
                    <span className="text-discount font-semibold">
                      {-(product.price * (10 / 100)).toFixed(2)}€
                    </span>
                  </div>
                ) : (
                  <div className="pt-4">
                    <span className="text-primary font-semibold text-xl">
                      {product.price}€
                    </span>
                  </div>
                )}
                <Stars product={product} />
                {product.qnt <= 6 && (
                  <span
                    className={"text-discount font-semibold text-xs my-5 block"}
                  >
                    {product.qnt > 0
                      ? `Disponibilità: solo ${product.qnt}`
                      : "Non disponibile"}
                  </span>
                )}
              </div>
            </div>
            <div className="border-t border-border flex items-center justify-center addToCart relative z-20 rounded-b-xl overflow-hidden">
              <AddToCartButton product={product} />
            </div>
          </div>
        ))
      ) : (
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          spaceBetween="24"
        >
          {productsArray &&
            productsArray.map((product) => (
              <SwiperSlide key={product._id} className="!flex !h-auto">
                <div className="flex flex-col flex-grow border border-border rounded-xl basis-[calc(33.333333%-1.5rem)]">
                  <div className="mt-5">
                    <div className="flex h-64 max-w-64 mx-auto">
                      <img
                        alt={`${product.name}`}
                        src={`${product.frontImage}`}
                        className="object-contain aspect-square select-none"
                      />
                    </div>
                    <div className="p-10 py-4">
                      <Link
                        to={`/products/${product.name}`}
                        className="text-secondary text-lg font-medium font-prosto line-clamp-1 hover:text-primary"
                      >
                        {product.name}
                      </Link>
                      {product.offers.isActive ? (
                        <div className="pt-5 flex items-center gap-3">
                          <span className="text-fullPrice font-semibold text-lg line-through decoration-2">
                            {product.price}€
                          </span>
                          <span className="text-primary font-semibold text-xl">
                            {(product.price * (1 - 10 / 100)).toFixed(2)}€
                          </span>
                          <span className="text-discount font-semibold">
                            {-(product.price * (10 / 100)).toFixed(2)}€
                          </span>
                        </div>
                      ) : (
                        <div className="pt-5">
                          <span className="text-primary font-semibold text-xl">
                            {product.price}€
                          </span>
                        </div>
                      )}
                      <Stars product={product} />
                      {product.qnt <= 6 && (
                        <span
                          className={
                            "text-discount font-semibold text-xs block"
                          }
                        >
                          {product.qnt > 0
                            ? `Disponibilità: solo ${product.qnt}`
                            : "Non disponibile"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};
