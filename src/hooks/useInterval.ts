import { MutableRefObject, useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number) {
  const savedCallback: MutableRefObject<(() => void) | undefined> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
