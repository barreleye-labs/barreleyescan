import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnTypes<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialData: T): ReturnTypes<T> => {
  const [values, setValues] = useState(initialData);

  const handler = useCallback(
    (e) => {
      const { value, name } = e.target;

      typeof values === 'object' ? setValues({ ...values, [name]: value }) : setValues(value);
    },
    [values]
  );

  return [values, handler, setValues];
};

export default useInput;
