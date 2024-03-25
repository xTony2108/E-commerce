import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = () => {
  const products = useSelector((state) => state.product.products);
  const _products = useSelector((state) => state.product._products);

  const [selectedHw, setSelectedHw] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const productsHardware = useMemo(
    () =>
      _products && _products.map((product) => product.hardware.toUpperCase()),
    [_products]
  );

  const hardwareType = useMemo(
    () =>
      productsHardware &&
      productsHardware.filter(
        (hardware, index) => productsHardware.indexOf(hardware) === index
      ),
    [productsHardware]
  );

  const dispatch = useDispatch();

  const applyFilter = (e) => {
    const { value, type } = e.target;
    let filteredItems;
    if (type === "search") {
      setSelectedHw("default");

      setSearchQuery(value);
      filteredItems =
        _products &&
        _products.filter(
          (product) =>
            product.name.toLowerCase().includes(value.toLowerCase()) ||
            product.hardware.toLowerCase().includes(value.toLowerCase()) ||
            product.releaseDate.toLowerCase().includes(value.toLowerCase())
        );
    } else {
      setSearchQuery("");

      setSelectedHw(value);
      filteredItems =
        _products &&
        _products.filter((product) =>
          value != "default"
            ? product.hardware.toUpperCase() === value
            : products
        );
    }
    dispatch(setProducts(filteredItems));
  };

  return (
    <div className="relative z-20 flex items-center max-w-screen-2xl m-auto bg-white rounded-md w-1/2 barBg">
      <select
        name="hardware"
        id="hardware"
        value={selectedHw}
        onChange={applyFilter}
        className="relative z-20 outline-none bg-white min-h-10 px-2 rounded-md text-primary font-semibold"
      >
        <option value="default">Tutti gli hardware</option>
        {hardwareType &&
          hardwareType.map((product) => {
            return (
              <option key={product} value={product}>
                {product}
              </option>
            );
          })}
      </select>
      <div className="flex items-center h-full w-full relative z-20 bg-white ml-1 border-primary rounded-md font-semibold">
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          size="xl"
          style={{ padding: "0 8px", color: "#121420" }}
        />
        <input
          type="search"
          placeholder="Cerca..."
          value={searchQuery}
          onChange={applyFilter}
          className="relative z-20 rounded-r-md min-h-10 w-full outline-none pl-2 appearance-none text-primary"
        />
      </div>
    </div>
  );
};
