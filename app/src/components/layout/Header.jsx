import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";
import { useGetUserDataQuery } from "../../services/product/userSlice";
import { internalMemory } from "../../utility/internalMemory";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Flip, toast } from "react-toastify";
import { useEffect } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const token = internalMemory.get("token");

  const lightMode = internalMemory.get("lightMode");

  const cart = useSelector(state => state.cart.cart)
  console.log(cart);
  
  const { data: userInfo, error } = useGetUserDataQuery(undefined, {
    skip: token ? false : true,
  });

  useEffect(() => {
    if (error && error?.status == 401) {
      dispatch(logout());
      toast.error("Sessione scaduta, effettua il login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip,
      });
    }
  }, [error, userInfo]);

  return (
    <>
      <header className="bg-bg">
        <div className="flex items-center justify-between max-w-screen-2xl m-auto py-6 relative z-50 gap-8 px-12">
          <div className="flex items-center gap-10 flex-grow">
            <div className="min-w-fit">
              <p className="text-2xl text-secondary w-full font-bold">
                GamerGear Hub
              </p>
            </div>
            <SearchBar />
          </div>
          <div className="flex items-center gap-10">
            <Link
              to="/login"
              className="flex items-center bg-transparent rounded-full border border-border"
            >
              <div className="bg-primary py-3.5 px-5 rounded-l-full">
                <FontAwesomeIcon
                  icon="fa-regular fa-user"
                  style={{ color: lightMode ? "black" : "white" }}
                />
              </div>
              <div className="h-full text-secondary px-6">
                <span>{userInfo ? userInfo.name : "Profilo"}</span>
              </div>
            </Link>
            <div className="flex items-center bg-transparent rounded-full border border-border">
              <Link to="/cart" className="flex items-center">
                <div className="py-3.5 px-5 rounded-l-full">
                  <FontAwesomeIcon
                    icon="fa-solid fa-cart-shopping"
                    style={{ color: "#fa4f09" }}
                  />
                </div>
                <div className="h-full text-secondary pr-5">
                  <span>
                    {
                      cart && cart.reduce((acc, val) => acc + (val.price * val.cartQnt), 0).toFixed(2)
                    } €
                  </span>
                </div>
              </Link>
              <div className="bg-primary py-3.5 px-5 rounded-r-full text-secondary">
                    {
                      cart && cart.reduce((acc, val) => acc + val.cartQnt, 0)
                    }
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
