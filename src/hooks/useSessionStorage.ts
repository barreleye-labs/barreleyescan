type UseSessionStorage<T> = [() => T | string | undefined, (value: T) => void, () => void];

function useSessionStorage<T>(key: string): UseSessionStorage<T> {
  const getSession = (): T | string | undefined => {
    try {
      const item = window.sessionStorage.getItem(key);

      if (item === null) return undefined;
      console.log(typeof item, item);

      return item;
    } catch (error) {
      return undefined;
    }
  };

  const setSession = (value: T): void => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const removeSession = (): void => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return [getSession, setSession, removeSession];
}

export default useSessionStorage;
