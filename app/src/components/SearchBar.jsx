import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = () => {
  return (
    <div className="flex items-center h-14 rounded-full border border-border w-3/5">
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        size="lg"
        style={{ padding: "0 16px", color: "#fa4f09" }}
      />
      <input
        type="search"
        className="h-full appearance-none bg-transparent outline-none text-white w-full pr-4"
        placeholder="Cerca"
      />
    </div>
  );
};
