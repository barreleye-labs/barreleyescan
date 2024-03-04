import { IBlock } from '@type/api';
import { useSWRConfig } from 'swr';

import { useNavigate } from 'react-router-dom';

import { Card, Container } from './styles';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Unstable_Grid2';

import Logo from '@components/logo';

import Blocks from '@pages/blocks';
import Transactions from '@pages/transactions';

import BlocksService from '@services/blocks.ts';

const Dashboard = () => {
  const navigate = useNavigate();

  const { data } = BlocksService().GetLast();

  if (!data)
    return (
      <div>
        <Skeleton />
        <Skeleton width="80%" />
        <Skeleton width="60%" />
        <Skeleton width="30%" />
      </div>
    );
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={16} sm={6} md={3}>
          <Card>
            <div className="dashboard-content-type">
              <div className="header">Block Height</div>
              <div className="content">#{data.block.height ?? '0'}</div>

              <div className="footer" onClick={() => navigate('/blocks')}>
                <div>
                  <span>See all blocks</span>
                  <ArrowForwardRoundedIcon />
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid xs={16} sm={6} md={3}>
          <Card>
            <div className="dashboard-content-type">
              <div className="header">Avg Block Time</div>
              <div className="content">10s</div>

              <div className="footer">
                <div>
                  <span>(1 Hour)</span>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid xs={16} sm={6} md={3}>
          <Card>
            <div className="dashboard-content-type">
              <div className="header">Consensus Nodes</div>
              <div className="content">3</div>
            </div>
          </Card>
        </Grid>
        <Grid xs={16} sm={6} md={3}>
          <Card>
            <div className="dashboard-content-type">
              <div className="header">Circulating Supply</div>
              <div className="content">
                {data.block?.height ? (data.block?.height * 10).toLocaleString('ko-KR') : '0'}
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={16}>
          <Card>
            <div className="dashboard-custom">
              <div className="left">
                <img src="src/assets/barreleye.png" />
                <Logo />
              </div>
              <div className="right"></div>
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={16} md={6}>
          <Card>
            <div className="dashboard-table-wrapper">
              <h2>Recent Blocks</h2>
              <div className="dashboard-table">
                <Blocks isSimpleData={true} isPagination={false} size={5} />
              </div>
            </div>
            <Button onClick={() => navigate('/blocks')}>VIEW ALL BLOCKS </Button>
          </Card>
        </Grid>
        <Grid xs={16} md={6}>
          <Card>
            <div className="dashboard-table-wrapper">
              <h2>Recent Transactions</h2>
              <div className="dashboard-table">
                <Transactions isSimpleData={true} isPagination={false} size={5} />
              </div>
            </div>
            <Button onClick={() => navigate('/transactions')}>VIEW ALL TRANSACTIONS </Button>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Dashboard;
