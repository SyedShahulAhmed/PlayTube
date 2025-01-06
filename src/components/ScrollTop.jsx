import React, { useEffect } from 'react';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return null; 
};

export default ScrollTop;
