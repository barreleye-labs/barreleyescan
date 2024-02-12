import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import useSWR from 'swr';

import { useLocation, useParams } from 'react-router-dom';

import { Container } from './styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

import Detail from '@components/detail';
import LinkUnderline from '@components/link';
import Row from '@components/row';

import { IBlock } from '@src/types/api';

import { Time, fetcher } from '@utils';

function Transaction() {
  dayjs.extend(utc);

  const location = useLocation();
  const { hash, height } = useParams();

  const { data } = useSWR<IBlock>(`/api/blocks/${height}`, fetcher);

  const setTime = () => {
    const formatUnix = Time.formatUnixNano(data!.timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  };

  return (
    <Container>
      <Detail
        icon={<FilterNoneIcon />}
        title={location.pathname.split('/')[1].toUpperCase()}
        subheader={hash as string}
      >
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
