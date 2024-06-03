import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";
import { useGetUserDataQuery } from "../../services/product/userSlice";
import { internalMemory } from "../../utility/internalMemory";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Flip, toast } from "react-toastify";
import { useEffect } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const token = internalMemory.get("token");

  const { data: userInfo, error } = useGetUserDataQuery(undefined, {
    skip: token ? false : true,
    pollingInterval: 3600000,
  });

  useEffect(() => {
    if (error && error?.status == 401) {
      console.log(error);
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
      <header className="bg-black">
        <div className="flex items-center justify-between max-w-screen-2xl m-auto py-6 relative z-50 gap-8">
          <div className="flex items-center gap-10 flex-grow">
            <div className="min-w-fit">
              <p className="text-2xl text-white w-full font-bold">
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
                  style={{ color: "white" }}
                />
              </div>
              <div className="h-full text-white px-6">
                <span>{userInfo ? userInfo.name : "Profilo"}</span>
              </div>
            </Link>
            <div className="flex items-center bg-transparent rounded-full border border-[#414141]">
              <Link className="flex items-center">
                <div className="py-3.5 px-5 rounded-l-full">
                  <FontAwesomeIcon
                    icon="fa-solid fa-cart-shopping"
                    style={{ color: "#fa4f09" }}
                  />
                </div>
                <div className="h-full text-white pr-5">
                  <span>€ 0.00</span>
                </div>
              </Link>
              <div className="bg-primary py-3.5 px-5 rounded-r-full text-white">
                0
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
