import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if (window) {
    const { innerWidth: width } = window;
    return {
     width
   };
  }
  return {
    width: 530
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
