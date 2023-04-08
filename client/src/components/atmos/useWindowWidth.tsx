import { useHasMounted } from '@/lib/Helpers';
import { useCallback, useEffect, useState } from 'react';

const useWindowWidth = () => {
  const hasMounted = useHasMounted();
  const [windowWidth, setWindowWidth] = useState(
    hasMounted ? window.innerWidth : 1060,
  );

  const handleResize = useCallback(() => {
    const debounce = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 1000);
    return () => {
      clearTimeout(debounce);
    };
  }, []);

  useEffect(() => {
    if (hasMounted) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [hasMounted, handleResize]);

  return windowWidth;
};

export default useWindowWidth;
