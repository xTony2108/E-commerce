import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchBar } from "../SearchBar";
import { Link } from "react-router-dom";

export const Header = () => {
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
                <span>Profilo</span>
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
