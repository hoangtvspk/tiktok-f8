import { useState, useEffect } from "react";

function useDebouce(value, delay) {
  const [debouceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouceValue(value), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);

  return debouceValue;
}

export default useDebouce;
