import clsx from "clsx";
import { Link } from "react-router-dom";

export const FormButton = ({ text, isFilled, marginTop, path }) => {
  return (
    <>
      {isFilled ? (
        <button
          className={clsx(
            "min-w-48 py-3 bg-[#F0C039] text-black rounded-xl",
            marginTop && `mt-${marginTop}`
          )}
        >
          {text}
        </button>
      ) : (
        <Link
          to={path}
          className={clsx(
            "min-w-48 py-[10px] border-2 border-black text-black rounded-xl text-center",
            marginTop && `mt-4`
          )}
        >
          {text}
        </Link>
      )}
    </>
  );
};
