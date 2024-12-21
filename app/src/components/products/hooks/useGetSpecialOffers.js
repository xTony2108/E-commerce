import { useEffect, useMemo, useState } from "react";
import { useGetAllProductsQuery } from "../../../services/product/productSlice";

export const useGetSpecialOffers = () => {
  const { data: products } = useGetAllProductsQuery();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [deadLine, setDeadLine] = useState("");

  const getTime = () => {
    const time = Date.parse(deadLine) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  const specialOffers = useMemo(() => {
    if (products && products.length > 0) {
      return (
        products &&
        products?.filter(
          (product) => product.offers.isSpecial === true
        ).sort((a,b) => a - b).slice(0,2)
      );
    }
  }, [products]);

  

  useEffect(() => {
    if (products && products.length > 0) {
      setDeadLine(specialOffers[0]?.offers?.endDate);
    }
  }, [specialOffers]);

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [deadLine]);

  return { days, hours, minutes, seconds, specialOffers };
};
