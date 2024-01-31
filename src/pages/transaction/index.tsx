import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Skeleton from '@mui/material/Skeleton';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import LinkUnderline from '@src/components/link';
import { IBlock } from '@src/types/api';
import { Time } from '@src/utils';
import fetcher from '@src/utils/fetcher';

import Detail from '@components/detail';
import Row from '@components/row';

import { Container } from './styles';

function Transaction() {
  dayjs.extend(utc);
  const navigate = useNavigate();
  const location = useLocation();
  const [height, setHeight] = useState(location.pathname.split('/')[2]);

  const { data, error } = useSWR<IBlock>(`/api/block/${1}`, fetcher);
  const { data: lastBlock, error: totalDataErr } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 1000
  });

  const setTime = () => {
    const formatUnix = Time.formatUnixNano(data!.timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  };

  return (
    <Container>
      <Detail icon={<FilterNoneIcon />} title={location.pathname.split('/')[1].toUpperCase()} subheader={height}>
        {data && (
          <>
            <Row label="TX Type" content="Fee Delegated Smart Contract Execution"></Row>
            <Row label="Block">
              <LinkUnderline
                path={`/block/${location.pathname.split('/')[3]}`}
                underlink={location.pathname.split('/')[3]}
              ></LinkUnderline>
            </Row>
            <Row label="TxReceipt Status">
              <div className="badge">
                <CheckCircleIcon />
                <span>Success</span>
              </div>
            </Row>
            <Row label="Age" content={setTime()}></Row>
            <Row label="From">
              <span className="hash">{data.hash}</span>
            </Row>
            <Row label="To">
              <span className="hash">{data.hash}</span>
            </Row>

            <Row label="Token Transfers" content="-"></Row>
            <Row label="NFT Transfers" content="-"></Row>
            <Row label="Nonce" content="201"></Row>
          </>
        )}
      </Detail>
    </Container>
  );
}

export default Transaction;
