import { useEffect, useState } from 'react';

export default function useMobile(width = '860px'): boolean {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${width})`);
    setIsMobile(!mediaQuery.matches);
    const handler = (e: MediaQueryListEvent): void => setIsMobile(!e.matches);
    mediaQuery.addEventListener('change', handler);

    () => mediaQuery.removeEventListener('change', handler);
  }, [width]);

  return isMobile;
}
