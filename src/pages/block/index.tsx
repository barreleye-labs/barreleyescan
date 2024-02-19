import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import useSWR from 'swr';

import { useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import FilterNoneIcon from '@mui/icons-material/FilterNone';

import Detail from '@components/detail';
import Row from '@components/row';

import { IBlock } from '@src/types/api';

import { Time, fetcher } from '@utils';

function Block() {
  dayjs.extend(utc);
  const navigate = useNavigate();
  const location = useLocation();
  const { height } = useParams();

  const { data } = useSWR<IBlock>(`/api/blocks/${height}`, fetcher);
  const { data: lastBlock } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 1000
  });

  const changeBlockPage = useCallback(
    (setHeight: number) => {
      if (setHeight >= 0 && lastBlock?.block.height >= setHeight) {
        navigate(`/block/${setHeight}`);
      }
    },
    [lastBlock, navigate]
  );

  const setTime = useCallback(() => {
    const formatUnix = Time.formatUnixNano(data?.block.timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  }, [data]);

  if (!data) return <div>loading</div>;

  return (
    <Detail
      onClickPrev={() => changeBlockPage(Number(height) - 1)}
      onClickAfter={() => changeBlockPage(Number(height) + 1)}
      icon={<FilterNoneIcon />}
      title={location.pathname.split('/')[1].toUpperCase()}
      subheader={height as string}
      isAction={true}
    >
      <>
        <Row label="Time" content={setTime()}></Row>
        <Row label="Hash" content={data?.block.hash}></Row>
        <Row label="Prev Hash" content={data?.block.prevBlockHash}></Row>
        <Row label="Total TXs" content={`${data?.block.txCount.toString()} TXs`}>
          {/*{data?.block.txCount &&*/}
          {/*  data?.block.transactions.map((hash) => (*/}
          {/*    <LinkUnderline key={hash} path={`/transaction/${hash}`} underlink={hash}></LinkUnderline>*/}
          {/*  ))}*/}
        </Row>
        <Row label="Block Reward" content="-"></Row>
        <Row label="Block Size" content="-"></Row>
        <Row label="Base Fee" content="-"></Row>
        <Row label="Burnt Fees" content="-"></Row>
      </>
    </Detail>
  );
}

export default Block;
