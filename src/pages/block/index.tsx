import FilterNoneIcon from '@mui/icons-material/FilterNone';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { Time } from '@src/utils';
import fetcher from '@src/utils/fetcher';

import Detail from '@components/detail';
import Row from '@components/row';

function Block() {
  dayjs.extend(utc);
  const navigate = useNavigate();
  const location = useLocation();
  const [height, setHeight] = useState(Number(location.pathname.split('/')[2]));

  const { data, error } = useSWR(`/api/block/${height}`, fetcher);

  const changeBlockPage = (height: number) => {
    if (height) {
      setHeight(height);
      navigate(`/block/${height}`);
    }
  };

  const setTime = () => {
    const formatUnix = Time.formatUnixNano(data.Timestamp);
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
          <Row label="Hash" content={data.Hash}></Row>
          <Row label="Prev Hash" content={data.PrevBlockHash}></Row>
          <Row label="Total TXs" content={data.TxResponse.count}></Row>
          <Row label="Block Reward" content={data.Timestamp}></Row>
          <Row label="Block Size" content={data.Timestamp}></Row>
          <Row label="Base Fee" content={data.Timestamp}></Row>
          <Row label="Burnt Fees" content={data.Timestamp}></Row>
        </>
      )}
    </Detail>
  );
}

export default Block;
