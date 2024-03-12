import axios from "axios";
import { useEffect, useState } from "react";

const defaultOptions = {
  method: "GET",
  headers: {},
  data: {},
};

export const useAxios = (url, options = { ...defaultOptions }) => {
  options = { ...defaultOptions, ...options };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axios(url, options);
      const data = await response.data;

      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    if (options.method === "GET") update();
  }, [url]);

  return { data, error, loading, update };
};
