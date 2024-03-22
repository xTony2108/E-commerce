import clsx from "clsx";
import { Link } from "react-router-dom";

export const ButtonLink = ({ text, filled, route, addClass }) => {
  return filled ? (
    <Link
      to={route}
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
      className="min-w-32 text-center text-base py-1 text-white border border-gghbg-gghViolet px-5 rounded-lg"
    >
      {text}
    </Link>
  );
};
