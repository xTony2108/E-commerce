import { Link } from "react-router-dom";

export const Button = ({ text, filled, route }) => {
  return filled ? (
    <Link
      to={route}
      className="text-lg text-white bg-[#A70B0B] px-5 rounded-lg"
    >
      {text}
    </Link>
  ) : (
    <Link
      to={route}
      className="text-lg text-white border border-[#A70B0B] px-5 rounded-lg"
    >
      {text}
    </Link>
  );
};
