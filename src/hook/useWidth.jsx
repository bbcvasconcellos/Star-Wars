import { useEffect, useState } from "react";

const getScreenWidth = () => {
  const { innerWidth: width } = window;
  
  return { width };
}

export const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getScreenWidth());

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(getScreenWidth());
    }

    window.addEventListener('resize', handleWidth);

    return () => window.removeEventListener('resize', handleWidth);
  }, [])

  return windowWidth;
}