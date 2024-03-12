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
            "min-w-48 py-3 bg-[#F0C039] text-[#121420] rounded-xl font-medium",
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
            "min-w-48 py-[10px] border-2 border-[#121420] text-[#121420] rounded-xl text-center font-medium",
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
            "min-w-32 py-3 bg-[#F0C039] text-[#121420] rounded-xl font-medium",
            marginTop && `mt-${marginTop}`
          )}
        >
          {text}
        </button>
      )}
    </>
  );
};
