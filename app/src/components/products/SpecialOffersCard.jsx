import { Link } from "react-router-dom";

export const SpecialOffersCard = ({ arr }) => {
  const specialOffers = arr;
  return (
    specialOffers &&
    specialOffers.map((product) => (
      <div
        key={product._id}
        className="flex flex-col border-b border-border pt-8 last:border-none"
      >
        <div className="flex items-center justify-center">
          <img
            src={product.frontImage}
            alt={`${product.name}`}
            className="max-w-72 max-h-52 rounded-xl mb-6 object-contain select-none"
          />
        </div>
        <Link
          to={`/products/${product.name}`}
          className="text-xl text-secondary font-prosto line-clamp-2 hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="flex gap-2 py-4 items-center">
          <span className="text-xl font-semibold text-fullPrice line-through decoration-2">
            {product.price}€
          </span>
          <span className="text-xl font-semibold text-primary">
            {(
              Number(product.price) *
              (1 - product.offers.discountPercentage / 100)
            ).toFixed(2)}
            €
          </span>
          <span className="text-discount font-semibold">
            {-(product.price * (product.offers.discountPercentage / 100)).toFixed(2)}€
          </span>
        </div>
        <span className="text-xl text-secondary font-semibold pb-10">
          Disponibilità: {product.qnt}
        </span>
      </div>
    ))
  );
};
