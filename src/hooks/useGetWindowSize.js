import { useEffect, useState } from "react";

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowSize]);

  return windowSize;
};

export default useGetWindowSize;
