import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export default function useMobile(width = '860px'): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${width})`);
    setIsMobile(!mediaQuery.matches);
    const handler = (e: MediaQueryListEvent): void => setIsMobile(!e.matches);
    const debouncedHandler = debounce(handler, 250);
    mediaQuery.addEventListener('change', debouncedHandler);

    () => mediaQuery.removeEventListener('change', debouncedHandler);
  }, [width]);

  return isMobile;
}
