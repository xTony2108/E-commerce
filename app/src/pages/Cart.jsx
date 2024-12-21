import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";
import { PageHeading } from "../components/layout/PageHeading";
import { PageLocation } from "../components/layout/PageLocation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductQuantity } from "../components/buttons/ProductQuantity";
import { Buttons } from "../components/buttons/Buttons";
import {
  addToCart,
  removeFromCart,
  removeQnt,
  showMaxQnt,
} from "../features/cart/cartSlice";
import { FormInput } from "../components/shared/FormInput";

export const Cart = () => {
  const products = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const removeQuantity = (product) => {
    dispatch(removeQnt({ id: product.id }));
  };

  const showQuantity = (e, product) => {
    dispatch(showMaxQnt({ id: product.id, value: e.target.value }));
  };

  const addQuantity = (product) => {
    console.log(product);

    dispatch(addToCart({ id: product.id }));
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-black min-h-fullWithoutBars">
        <div className="min-h-fullWithoutBars max-w-screen-2xl m-auto flex flex-col items-center py-20">
          <PageHeading page={"Carrello"} />
          <PageLocation pages={["Carrello"]} />
          {products && products.length > 0 ? (
            <div className="w-full border border-border rounded-lg">
              {products.map((product) => {
                return (
                  <div className="flex flex-col p-4" key={product.id}>
                    <div className="flex items-center gap-8 py-4">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="max-w-56 aspect-square object-contain"
                      />
                      <Link
                        to={`/products/${product.name}`}
                        className="text-primary font-semibold text-lg"
                      >
                        {product.name}
                      </Link>
                    </div>
                    <div className="border-t border-border p-4 text-end text-white flex items-center justify-end gap-12">
                      <ProductQuantity
                        add={() => addQuantity(product)}
                        remove={() => removeQuantity(product)}
                        quantity={product.cartQnt}
                        show={(e) => showQuantity(e, product)}
                      />
                      <button
                        className="flex items-center gap-3 hover:text-primary"
                        onClick={() =>
                          dispatch(removeFromCart({ id: product.id }))
                        }
                      >
                        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                        Rimuovi
                      </button>
                    </div>
                    <div className="flex justify-end border-t border-border pb-4 pt-8 gap-20">
                      <div className="flex gap-12">
                        <FormInput
                          type="text"
                          name="discount"
                          placeholder="Codice sconto"
                          autoComplete="discount"
                          addClass="text-sm w-56"
                        />
                        <Buttons type="button" text="Applica codice" />
                      </div>
                      <Buttons
                        type="button"
                        text="Procedi all'acquisto"
                        orange={true}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="min-h-fullWithoutBars w-full border border-border rounded-lg flex justify-center items-center p-20">
              <span className="text-white text-2xl font-bold">
                Nessun articolo nel carrello
              </span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
