import clsx from "clsx";
import { Link } from "react-router-dom";

export const ButtonLink = ({ text, filled, route, addClass, onClick }) => {
  return filled ? (
    <Link
      to={route}
      onClick={onClick}
      className={clsx(
        "min-w-32 text-center text-base py-1 px-5 rounded-lg font-semibold",
        addClass ? addClass : "text-white bg-gghViolet"
      )}
    >
      {text}
    </Link>
  ) : (
    <Link
      to={route}
      onClick={onClick}
      className={clsx(
        "min-w-32 text-center text-base py-1 px-5 rounded-lg",
        addClass ? addClass : "text-white border border-gghViolet"
      )}
    >
      {text}
    </Link>
  );
};
