import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCategories } from "../../utility/getCategories";
import { useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../features/category/categorySlice";

export const ProductsDropdown = ({ pagination, state }) => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const { setPage } = pagination;
  const { query, setQuery } = state;
  const categories = getCategories(true);

  const handleSelectFilter = (e) => {
    dispatch(removeCategory());
    setQuery(e.target.value);
    setPage(1);
  };
  return (
    <div
      onClick={() => setShowMenu(!showMenu)}
      className="flex items-center text-light dark:text-dark outline-none text-center bg-transparent border min-w-44 border-border px-[1px] rounded-md py-1 relative select-none cursor-pointer"
    >
      <span className="flex-1 px-4">
        {query === "default" ? "Mostra tutto" : query}
      </span>
      <FontAwesomeIcon
        icon="fa-solid fa-caret-down"
        style={{ padding: "0 8px" }}
        size="xs"
        className={clsx(
          "rotate-0 transition-all text-light dark:text-dark",
          showMenu ? "-rotate-180" : "rotate-0"
        )}
      />
      <div
        className={clsx(
          "z-20 absolute w-full min-w-full top-full border border-border rounded-md mt-1 bg-white dark:bg-black transition-all duration-200 will-change-transform ease-out origin-top",
          showMenu
            ? "opacity-1 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none -translate-y-5 scale-75"
        )}
      >
        <button
          onClick={handleSelectFilter}
          value="default"
          className="bg-transparent text-light dark:text-dark py-2 text-sm block text-center w-full"
        >
          Mostra tutto
        </button>
        {categories &&
          categories.map((category, i) => {
            return (
              <button
                className="bg-transparent text-light dark:text-dark py-2 text-sm block text-center w-full"
                key={category + i}
                value={category}
                onClick={handleSelectFilter}
              >
                {category}
              </button>
            );
          })}
      </div>
    </div>
  );
};
