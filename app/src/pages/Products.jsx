import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAxios } from "../hooks/useAxios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, setLoading } from "../store/productSlice";
import PacmanLoader from "react-spinners/PacmanLoader";

export const Products = () => {
  const dispatch = useDispatch();

  const { data, error, loading } = useAxios("/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    dispatch(getProducts(data));
    dispatch(setLoading(loading));
  }, [data, loading]);
  return (
    <>
      <Navbar />
      <div className="bg-primary pb-20 relative">
        <Outlet />
      </div>
      {loading && (
        <div className="absolute top-0 left-0 h-screen w-full flex justify-center items-center bg-primary">
          <PacmanLoader
            color={"#F0C039"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!loading && error && (
        <div className="absolute top-0 left-0 h-screen w-full flex justify-center items-center bg-primary">
          <h1 className="text-white font-bold text-3xl text-center">
            Si è verificato un errore durante l'operazione. Per favore, riprova
            più tardi.
          </h1>
        </div>
      )}
    </>
  );
};
