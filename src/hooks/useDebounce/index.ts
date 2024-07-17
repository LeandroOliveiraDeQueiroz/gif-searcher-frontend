import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value, milliSeconds]);

  return debouncedValue;
};

export default useDebounce;
