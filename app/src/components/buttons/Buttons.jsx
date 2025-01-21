import clsx from "clsx";
import { Link } from "react-router-dom";

export const Buttons = ({
  text,
  orange,
  route,
  addClass,
  onClick,
  type = "link",
  icon,
}) => {
  {
    return type === "link" ? (
      orange ? (
        <Link
          to={route}
          className="relative bg-primary p-4 text-secondary font-semibold rounded-full w-fit text-sm buttonFillWhite overflow-hidden will-change-transform"
        >
          {text}
        </Link>
      ) : (
        <Link
          to={route}
          className="relative bg-secondary p-4 text-primary font-semibold rounded-full w-fit text-sm buttonFillOrange overflow-hidden will-change-transform"
        >
          {text}
        </Link>
      )
    ) : orange ? (
      <button
        className={clsx(
          "relative bg-primary p-4 text-secondary font-semibold rounded-full text-sm buttonFillWhite overflow-hidden will-change-transform",
          addClass && addClass
        )}
        onClick={onClick}
      >
        {icon && icon}
        {text}
      </button>
    ) : (
      <button
        className={clsx(
          "relative bg-secondary p-4 text-primary font-semibold rounded-full text-sm buttonFillOrange overflow-hidden will-change-transform",
          addClass && addClass
        )}
        onClick={onClick}
      >
        {icon && icon}
        {text}
      </button>
    );
  }
};
