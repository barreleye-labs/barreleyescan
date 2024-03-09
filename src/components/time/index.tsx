import { useState } from 'react';

import { Time } from '@utils';

import useInterval from '@hooks/useInterval.ts';

interface Props {
  data: number;
}
const IntervalTimestamp = ({ data }: Props) => {
  const [timestamp, setTimestamp] = useState<string>(Time.elapsedTime(Time.formatUnixNano(data)));

  useInterval(() => {
    setTimestamp(Time.elapsedTime(Time.formatUnixNano(data)));
  }, 1000);

  return <>{timestamp}</>;
};

export default IntervalTimestamp;
