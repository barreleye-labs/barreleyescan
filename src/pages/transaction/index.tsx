import FilterNoneIcon from '@mui/icons-material/FilterNone';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import LinkUnderline from '@src/components/link';
import { Time } from '@src/utils';
import fetcher from '@src/utils/fetcher';

import Detail from '@components/detail';
import Row from '@components/row';

function Transaction() {
  dayjs.extend(utc);
  const location = useLocation();
  const [height, setHeight] = useState(location.pathname.split('/')[2]);

  const { data, error } = useSWR(`/api/block/${1}`, fetcher);

  const setTime = () => {
    const formatUnix = Time.formatUnixNano(data.Timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  };

  return (
    <Detail icon={<FilterNoneIcon />} title={location.pathname.split('/')[1].toUpperCase()} subheader={height}>
      {data && (
        <>
          <Row label="TX Hash" content={data.Hash}></Row>
          <Row label="Block" content={<LinkUnderline path={`/block/${1}`} underlink="1"></LinkUnderline>}></Row>
          <Row label="From" content={data.Hash}></Row>
          <Row label="To" content={data.Hash}></Row>
          <Row label="Age" content={setTime()}></Row>
          <Row label="Token Transfers" content={data.Timestamp}></Row>
          <Row label="NFT Transfers" content={data.Timestamp}></Row>
          <Row label="Nonce" content={data.Timestamp}></Row>
        </>
      )}
    </Detail>
  );
}

export default Transaction;
