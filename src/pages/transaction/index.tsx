import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Container } from './styles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterNoneIcon from '@mui/icons-material/FilterNone';

import Detail from '@components/detail';
import LinkUnderline from '@components/link';
import Row from '@components/row';

import { Crypto, Time } from '@utils';

import transactions from '@services/transactions.ts';

function Transaction() {
  dayjs.extend(utc);

  const location = useLocation();
  const { hash } = useParams();

  const { data } = transactions().GetOneById(hash as string);

  const setTime = useCallback(() => {
    const formatUnix = Time.formatUnixNano(data?.transaction.timestamp as string);
    const formatUtc = Time.formatUtc(formatUnix);
    const elapsedTime = Time.elapsedTime(formatUnix);
    return `${elapsedTime} (${formatUtc} +UTC)`;
  }, [data]);

  if (!data) return <div>loading...</div>;
  return (
    <Container>
      <Detail
        icon={<FilterNoneIcon />}
        title={location.pathname.split('/')[1].toUpperCase()}
        subheader={`0x${hash as string}`}
      >
        <>
          <Row label="TX Type" content="Transfer"></Row>
          <Row label="Block">
            <LinkUnderline
              path={`/block/${data.transaction.blockHeight}`}
              underlink={data.transaction.blockHeight}
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
            <LinkUnderline
              key={data.transaction.from}
              path={`/account/${data.transaction.from}`}
              underlink={`0x${data.transaction.from}`}
            ></LinkUnderline>
          </Row>
          <Row label="To">
            <LinkUnderline
              key={data.transaction.to}
              path={`/account/${data.transaction.to}`}
              underlink={`0x${data.transaction.to}`}
            ></LinkUnderline>
          </Row>

          <Row
            label="Value"
            content={`${Number(Crypto.hexToDecimal(data.transaction.value)).toLocaleString('ko-KR')} Barrel`}
          ></Row>
          <Row label="Signer PublicKey">
            <span> x: 0x{data.transaction.signer.x}</span>
            <br />
            <span> y: 0x{data.transaction.signer.y}</span>
          </Row>

          <Row label="Nonce">{Crypto.hexToDecimal(data.transaction.nonce)}</Row>
        </>
      </Detail>
    </Container>
  );
}

export default Transaction;
