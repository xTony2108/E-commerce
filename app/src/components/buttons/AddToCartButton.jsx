import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notifyError, notifySuccess } from "../../utility/toastifyNotification";
import { toast } from "react-toastify";

export const AddToCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = async (product) => {
    toast.dismiss();

    const price = product.offers.isActive
      ? (product.price * (1 - product.offers.discountPercentage / 100)).toFixed(
          2
        )
      : product.price;

    dispatch(
      addToCart({
        img: product.frontImage,
        name: product.name,
        id: product._id,
        price,
        qnt: product.qnt,
      })
    );

    notifySuccess("Prodotto aggiunto al carrello");
    //notifyError("Hai raggiunto la quantità massima per questo prodotto");
  };

  return (
    <button
      className="text-white font-semibold py-6 relative z-20 w-full"
      onClick={() => handleAddToCart(product)}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-cart-shopping"
        className="text-primary mr-2 addToCartIcon"
      />
      Aggiungi al carrello
    </button>
  );
};
