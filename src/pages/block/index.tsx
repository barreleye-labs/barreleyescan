import FilterNoneIcon from '@mui/icons-material/FilterNone';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { IBlock } from '@src/types/api';
import { Time } from '@src/utils';
import fetcher from '@src/utils/fetcher';

import Detail from '@components/detail';
import Row from '@components/row';

function Block() {
  dayjs.extend(utc);
  const navigate = useNavigate();
  const location = useLocation();
  const [height, setHeight] = useState(Number(location.pathname.split('/')[2]));

  const { data, error } = useSWR<IBlock>(`/api/block/${height}`, fetcher);
  const { data: lastBlock, error: totalDataErr } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 1000
  });

  const changeBlockPage = (height: number) => {
    if (height >= 0 && lastBlock!.height >= height) {
      setHeight(height);
      navigate(`/block/${height}`);
    }
  };

  const setTime = () => {
    const formatUnix = Time.formatUnixNano(data!.timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  };

  return (
    <Detail
      onClickPrev={() => changeBlockPage(height - 1)}
      onClickAfter={() => changeBlockPage(height + 1)}
      icon={<FilterNoneIcon />}
      title={location.pathname.split('/')[1].toUpperCase()}
      subheader={height}
      isAction={true}
    >
      {data && (
        <>
          <Row label="Time" content={setTime()}></Row>
          <Row label="Hash" content={data.hash}></Row>
          <Row label="Prev Hash" content={data.prevBlockHash}></Row>
          <Row label="Total TXs" content={`${data.txResponse.txCount.toString()} TXs`}></Row>
          <Row label="Block Reward" content="-"></Row>
          <Row label="Block Size" content="-"></Row>
          <Row label="Base Fee" content="-"></Row>
          <Row label="Burnt Fees" content="-"></Row>
        </>
      )}
    </Detail>
  );
}

export default Block;
