import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

export const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={clsx(
          "bg-grayBg z-20 w-full overflow-hidden animate__animated sticky ",
          isSticky && " animate__fadeInDown top-0"
        )}
      >
        <div className="flex items-center justify-between max-w-screen-2xl m-auto py-6 gap-8">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-white font-semibold text-sm">
              Home
            </Link>
            <Link to="/products" className="text-white font-semibold text-sm">
              Prodotti
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
