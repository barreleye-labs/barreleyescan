import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Container, DashboardTable, Highlight } from './styles';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PolylineIcon from '@mui/icons-material/Polyline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import Link from '@components/link';
import Logo from '@components/logo';

import Blocks from '@pages/blocks';
import Transactions from '@pages/transactions';

import BlocksService from '@services/blocks.ts';

const Dashboard = () => {
  const navigate = useNavigate();

  const { data } = BlocksService().GetAll({ size: 5, page: 1 });

  const BlockHeightCard = useCallback(() => {
    return (
      <Highlight>
        <h2>#{data ? Number(data?.totalCount) - 1 : '0'}</h2>
      </Highlight>
    );
  }, [data]);

  const SupplyCard = useCallback(() => {
    return (
      <Highlight>
        <h2>
          {data ? ((Number(data?.totalCount) - 1) * 10).toLocaleString('ko-KR') : '0'}
          <span>Barrel</span>
        </h2>
      </Highlight>
    );
  }, [data]);

  return (
    <Container>
      <Grid container spacing={2} className="margin-spacing">
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <div className="wrapper purple">
              <div className="icon-wrapper ">
                <ViewInArIcon />
              </div>
              <div>
                <BlockHeightCard />
                <h4>Block Height</h4>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Card>
            <div className="wrapper purple">
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

        <Grid xs={12} sm={6} md={3}>
          <Card>
            <div className="wrapper yellow">
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
        <Grid xs={12} sm={6} md={3}>
          <Card>
            <div className="wrapper blue">
              <div className="icon-wrapper ">
                <PolylineIcon />
              </div>
              <div>
                <h2>3</h2>
                <h4>Consensus Nodes</h4>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="margin-spacing">
        <Grid xs={16}>
          <Card>
            <div className="signature">
              <img src="src/assets/barreleye.png" />
              <Logo />
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="margin-spacing">
        <Grid xs={16} md={5.5}>
          <Card>
            <DashboardTable>
              <div>
                <div className="header">
                  <h2>Recent Blocks</h2>

                  <Link underlink="View All" onClick={() => navigate('/blocks')}>
                    <KeyboardArrowRightIcon />
                  </Link>
                </div>
                <Blocks isSimpleData={true} isPagination={false} size={5} />
              </div>
            </DashboardTable>
          </Card>
        </Grid>

        <Grid xs={16} md={6.5}>
          <Card>
            <DashboardTable>
              <div>
                <div className="header">
                  <h2>Recent Transactions</h2>
                  <Link underlink="View All" onClick={() => navigate('/transactions')}>
                    <KeyboardArrowRightIcon />
                  </Link>
                </div>
                <Transactions isSimpleData={true} isPagination={false} size={5} />
              </div>
            </DashboardTable>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
