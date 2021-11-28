import { useState } from "react";

const useWindowDimensions = () => {
  const [windowDimensions] = useState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  });

  return windowDimensions;
};

export default useWindowDimensions;
