import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="border-b-2 border-black">
          <div className="flex justify-between items-center max-w-screen-2xl m-auto py-2">
            <div>
              <p className="text-3xl">Logo</p>
            </div>
            <div className="flex gap-8">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
