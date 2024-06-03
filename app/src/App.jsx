import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { lazyLoad } from "./utility/lazyLoad";
import { useGetAllProductsQuery } from "./services/product/productSlice";
import { DisplayError } from "./components/layout/DisplayError";
import { Loader } from "./components/layout/Loader";
import { Suspense } from "react";
import { ScrollTop } from "./components/layout/ScrollTop";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazyLoad("Home", "Home");
const Login = lazyLoad("Login", "Login");
const Register = lazyLoad("Register", "Register");
const Cart = lazyLoad("Cart", "Cart");
const Products = lazyLoad("Products", "Products");
const ProductsList = lazyLoad("ProductsList", "ProductsList", "components");
const SingleProduct = lazyLoad("SingleProduct", "SingleProduct", "components");

export const App = () => {
  const {
    isLoading: isLoadingProducts,
    error: productsError,
    isError: isErrorProducts,
  } = useGetAllProductsQuery();

  const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    const location = useLocation();
    if (token) {
      return <Navigate to={location.state?.from?.pathname || "/"} replace />;
    } else {
      return children;
    }
  };

  if (isLoadingProducts) {
    return <Loader />;
  }

  if (isErrorProducts) {
    return <DisplayError error={productsError} />;
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "#080808", color: "white" }}
      />
      <Suspense fallback={<Loader />}>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path=":productName" element={<SingleProduct />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
