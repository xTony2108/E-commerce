import clsx from "clsx";
import { Link } from "react-router-dom";

export const FormButton = ({
  text,
  isButton,
  marginTop,
  path,
  singleButton,
  handler,
}) => {
  return (
    <>
      {isButton && singleButton && (
        <button
          className={clsx(
            "min-w-48 py-3 bg-gghYellow text-black rounded-xl font-semibold",
            marginTop && `mt-${marginTop}`
          )}
        >
          {text}
        </button>
      )}
      {path && (
        <Link
          to={path}
          className={clsx(
            "min-w-48 py-[10px] border-2 border-black text-black rounded-xl text-center font-semibold",
            marginTop && `mt-4`
          )}
        >
          {text}
        </Link>
      )}
      {isButton && !singleButton && (
        <button
          onClick={handler}
          type="button"
          className={clsx(
            "min-w-32 py-3 bg-gghYellow text-black rounded-xl font-semibold",
            marginTop && `mt-${marginTop}`
          )}
        >
          {text}
        </button>
      )}
    </>
  );
};
