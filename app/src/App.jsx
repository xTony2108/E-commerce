import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import "react-toastify/dist/ReactToastify.min.css";
import { Products } from "./pages/Products";
import { ProductsList } from "./components/ProductsList";
import { SingleProduct } from "./components/SingleProduct";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </>
  );
};
