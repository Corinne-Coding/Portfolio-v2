import { useState } from "react";

const useWindowDimensions = () => {
  const [windowDimensions] = useState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  });

  console.log(window.innerHeight);

  return windowDimensions;
};

export default useWindowDimensions;
