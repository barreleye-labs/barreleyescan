import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { useCallback } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Skeleton from '@mui/material/Skeleton';

import Detail from '@components/detail';
import LinkUnderline from '@components/link';
import Row from '@components/row';

import { Button } from '@pages/blocks/styles.tsx';

import { Time } from '@utils';

import BlocksService from '@services/blocks.ts';

function Block() {
  dayjs.extend(utc);
  const navigate = useNavigate();
  const location = useLocation();
  const { height } = useParams();

  const { data } = BlocksService().GetOneById(height as string);
  const { data: lastBlock } = BlocksService().GetLast();

  const changeBlockPage = useCallback(
    (setHeight: number) => {
      if (setHeight >= 0 && lastBlock?.block.height >= setHeight) {
        navigate(`/block/${setHeight}`);
      }
    },
    [lastBlock, navigate]
  );

  const setTime = useCallback(() => {
    const formatUnix = Time.formatUnixNano(data.block.timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  }, [data]);

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
        {!data ? (
          <>
            {[...new Array(3)].map(() => {
              return <Skeleton />;
            })}
          </>
        ) : (
          <>
            <Row label="Time" content={setTime()}></Row>
            <Row label="Hash" content={`0x${data?.block.hash}`}></Row>
            <Row label="Prev Hash" content={`0x${data?.block.prevBlockHash}`}></Row>
            <Row label="Total TXs" content={`${data?.block.txCount.toString()} TXs`}>
              {data?.block.txCount > 0
                ? data?.block.transactions.map((hash: string) => (
                    <LinkUnderline key={hash} path={`/transaction/${hash}`} underlink={hash}></LinkUnderline>
                  ))
                : ''}
            </Row>
            <Row label="Block Reward" content="10 Barrel"></Row>
            <Row label="Version" content={data?.block.version}></Row>
            <Row label="Datahash" content={`0x${data?.block.dataHash}`}></Row>
            <Row label="Extra">
              <Button onClick={() => navigate(`/account/${data?.block.signer}`)} size="small" variant="outlined">
                {data?.block.extra}
              </Button>
            </Row>
            <Row label="Block producer" content={`0x${data?.block.signer}`}></Row>
          </>
        )}
      </>
    </Detail>
  );
}

export default Block;
