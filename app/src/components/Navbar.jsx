import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div
          className="flex justify-between items-center max-w-screen-2xl m-auto py-10 relative z-50 max-2xl:max-w-screen-lg"
          role="presentation"
          aria-hidden="true"
        >
          <div role="presentation" aria-hidden="true">
            <p className="text-2xl text-white" role="logo">
              GamerGear Hub
            </p>
          </div>
          <div
            className="flex gap-8 text-white"
            role="presentation"
            aria-hidden="true"
          >
            <Link to="/">Home</Link>
            <Link to="/products">Prodotti</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
