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

import { ITx } from '@src/types/api';

import { Time, fetcher } from '@utils';

function Transaction() {
  dayjs.extend(utc);

  const location = useLocation();
  const { hash } = useParams();

  const { data } = useSWR<ITx>(`/api/txs/${hash}`, fetcher);

  const setTime = () => {
    const formatUnix = Time.formatUnixNano(data.data?.transaction.timestamp);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  };
  if (!data) return <div>loading...</div>;
  return (
    <Container>
      <Detail
        icon={<FilterNoneIcon />}
        title={location.pathname.split('/')[1].toUpperCase()}
        subheader={hash as string}
      >
        <>
          <Row label="TX Type" content="Fee Delegated Smart Contract Execution"></Row>
          <Row label="Block">
            <LinkUnderline
              path={`/block/${data.data.transaction.blockHeight}`}
              underlink={data.data.transaction.blockHeight}
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
            <span className="hash">{data.data.transaction.from}</span>
          </Row>
          <Row label="To">
            <span className="hash">{data.data.transaction.to}</span>
          </Row>

          <Row label="Token Transfers" content="-"></Row>
          <Row label="NFT Transfers" content="-"></Row>
          <Row label="Nonce">{data.data.transaction.nonce}</Row>
        </>
      </Detail>
    </Container>
  );
}

export default Transaction;
