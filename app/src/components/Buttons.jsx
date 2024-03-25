import clsx from "clsx";
import { Link } from "react-router-dom";

export const Buttons = ({
  text,
  filled,
  route,
  addClass,
  onClick,
  type = "link",
}) => {
  {
    return type === "link" ? (
      filled ? (
        <Link
          to={route}
          onClick={onClick}
          className={clsx(
            "min-w-32 text-center text-base py-1 px-5 rounded-lg font-semibold active:translate-y-0.5 text-white bg-gghViolet",
            addClass && addClass
          )}
        >
          {text}
        </Link>
      ) : (
        <Link
          to={route}
          onClick={onClick}
          className={clsx(
            "min-w-32 text-center text-base py-1 px-5 rounded-lg font-semibold active:translate-y-0.5 text-white border border-gghViolet",
            addClass && addClass
          )}
        >
          {text}
        </Link>
      )
    ) : filled ? (
      <button
        className={clsx(
          "min-w-32 text-center text-base py-1 px-5 rounded-lg font-semibold active:translate-y-0.5 text-white bg-gghViolet",
          addClass && addClass
        )}
        onClick={onClick}
      >
        {text}
      </button>
    ) : (
      <button
        className={clsx(
          "min-w-32 text-center text-base py-1 px-5 rounded-lg font-semibold active:translate-y-0.5 text-white border border-gghViolet",
          addClass && addClass
        )}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
};
