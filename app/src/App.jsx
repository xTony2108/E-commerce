import { Route, Routes, useLocation } from "react-router-dom";
import { lazyLoad } from "./utility/lazyLoad";
import { useGetAllProductsQuery } from "./services/product/productSlice";
import { DisplayError } from "./components/layout/DisplayError";
import { Loader } from "./components/layout/Loader";
import { Suspense, useEffect } from "react";
import { ScrollTop } from "./components/layout/ScrollTop";

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

  if (isLoadingProducts) {
    return <Loader />;
  }

  if (isErrorProducts) {
    return <DisplayError error={productsError} />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
