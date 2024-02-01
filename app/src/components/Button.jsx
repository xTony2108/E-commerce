import { Link } from "react-router-dom";

export const Button = ({ text, filled, route }) => {
  return filled ? (
    <Link
      to={route}
      className="min-w-32 text-center text-lg text-white bg-[#00C6C1] px-5 rounded-lg"
    >
      {text}
    </Link>
  ) : (
    <Link
      to={route}
      className="min-w-32 text-center text-lg text-white border border-[#00C6C1] px-5 rounded-lg"
    >
      {text}
    </Link>
  );
};
