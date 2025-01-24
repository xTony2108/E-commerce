import clsx from "clsx";
import { Link } from "react-router-dom";

export const FormButton = ({ text, isButton, addClass, path, handler }) => {
  return (
    <>
      {isButton ? (
        <button
          onClick={handler}
          className={clsx(
            "w-full py-4 bg-primary text-light dark:text-dark rounded-xl font-semibold border border-transparent hover:text-primary hover:bg-black hover:border-border transition-all duration-300",
            addClass && addClass
          )}
        >
          {text}
        </button>
      ) : (
        <Link
          to={path}
          className={clsx(
            "w-full py-4 block border border-border text-light dark:text-dark rounded-xl text-center font-semibold hover:text-primary transition-all duration-300",
            addClass && addClass
          )}
        >
          {text}
        </Link>
      )}
    </>
  );
};
