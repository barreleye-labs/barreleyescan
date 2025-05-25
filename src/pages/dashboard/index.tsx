import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PolylineIcon from '@mui/icons-material/Polyline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Grid from '@mui/material/Grid';
import useBlocksQuery from '@queries/useBlocksQuery';
import useTransactionsQuery from '@queries/useTransactionsQuery';

import Blocks from '@pages/blocks';
import Transactions from '@pages/transactions';

import Link from '@components/link';
import Logo from '@components/logo';

import { Char } from '@utils';

import nodesConfig from '@config/nodeConfig';

import { Card, Container, DashboardTable, Highlight } from './styles';

const Dashboard = () => {
  const navigate = useNavigate();

  const { data } = useBlocksQuery().GetAll({ size: 7, page: 1 });
  const { data: txData } = useTransactionsQuery().GetAll({ size: 7, page: 1 });

  const BlockHeightCard = useCallback(() => {
    const height = Number(data?.totalCount) - 1;
    return (
      <Highlight>
        <Link onClick={() => navigate(`/block/${height}`)}>
          <h2>#{data ? height : '0'}</h2>
        </Link>
      </Highlight>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const SupplyCard = useCallback(() => {
    return (
      <Highlight>
        <h2>
          {data ? ((Number(data.totalCount) - 1) * 10).toLocaleString('ko-KR') : '0'}
          <span>Barrel</span>
        </h2>
      </Highlight>
    );
  }, [data]);

  const BlockProposerCard = useCallback(() => {
    const extra = data ? data.blocks[0].extra : '-';
    return (
      <Highlight>
        <Link
          onClick={() =>
            navigate(
              data
                ? `/account/${Char.add0x(nodesConfig[`${extra}Config` as keyof typeof nodesConfig].ADDRESS)}`
                : `/account`
            )
          }
        >
          <h2 style={{ fontSize: '20px' }}>{extra.toUpperCase()}</h2>
        </Link>
      </Highlight>
    );
  }, [data]);

  const TotalTxCountCard = useCallback(() => {
    return (
      <Highlight>
        <Link onClick={() => navigate(`/transactions`)}>
          <h2 style={{ fontSize: '20px' }}>{txData ? txData.totalCount : '0'}</h2>
        </Link>
      </Highlight>
    );
  }, [txData]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
          <Card>
            <div className="wrapper">
              <div className="icon-wrapper">
                <ViewInArIcon />
              </div>
              <div>
                <BlockHeightCard />
                <h4>Block Height</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
          <Card>
            <div className="wrapper">
              <div className="icon-wrapper">
                <AccessTimeIcon />
              </div>
              <div>
                <SupplyCard />
                <h4>Circulating Supply</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
          <Card>
            <div className="wrapper">
              <div className="icon-wrapper ">
                <AccessAlarmIcon />
              </div>
              <div>
                <h2>
                  10<span>S</span>
                </h2>
                <h4>Avg Block Time</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3, xl: 3 }}>
          <Card>
            <div className="wrapper">
              <div className="icon-wrapper ">
                <PolylineIcon />
              </div>
              <div>
                <Highlight>
                  <Link onClick={() => navigate('/nodes')}>
                    <h2>3</h2>
                  </Link>
                </Highlight>
                <h4>Consensus Nodes</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
          <Card>
            <div className="signature">
              <div>
                <img src="/images/barreleye.png" alt={'barreleye image'} />
                <Logo />
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}>
          <Card>
            <div className="wrapper">
              <div className="icon-wrapper">
                <FlagIcon />
              </div>
              <div>
                <BlockProposerCard />
                <h4 className="proposer-letter-spacing">Current Block Proposer</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3, xl: 3 }}>
          <Card>
            <div className="wrapper">
              <div className="icon-wrapper">
                <ReceiptLongIcon />
              </div>
              <div>
                <TotalTxCountCard />
                <h4>Total Tx Count</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Card>
            <DashboardTable>
              <div className="header">
                <h2>Recent Blocks</h2>
                <Link underlink="View All" onClick={() => navigate('/blocks')}>
                  <KeyboardArrowRightIcon />
                </Link>
              </div>
              <Blocks isSimpleData={true} isPagination={false} size={7} />
            </DashboardTable>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Card>
            <DashboardTable>
              <div className="header">
                <h2>Recent Transactions</h2>
                <Link underlink="View All" onClick={() => navigate('/transactions')}>
                  <KeyboardArrowRightIcon />
                </Link>
              </div>
              <Transactions isSimpleData={true} isPagination={false} size={7} />
            </DashboardTable>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
