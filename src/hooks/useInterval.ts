import { MutatorCallback } from 'swr';

import { MutableRefObject, useEffect, useRef } from 'react';

function useInterval(callback: MutatorCallback, delay: number) {
  const savedCallback: MutableRefObject<MutatorCallback> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
