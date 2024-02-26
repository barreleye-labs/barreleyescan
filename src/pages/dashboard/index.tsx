import { IBlock } from '@type/api';
import useSWR from 'swr';

import { useNavigate } from 'react-router-dom';

import { DashboardCard } from './styles';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Unstable_Grid2';

import Logo from '@components/logo';

import Blocks from '@pages/blocks';
import Transactions from '@pages/transactions';

import { fetcher } from '@utils';

const Dashboard = () => {
  const navigate = useNavigate();
  const { data } = useSWR<IBlock>(`/api/last-block`, fetcher, {
    refreshInterval: 10000
  });

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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={2} sm={4} md={3}>
          <DashboardCard>
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
          </DashboardCard>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <DashboardCard>
            <div className="dashboard-content-type">
              <div className="header">Avg Block Time</div>
              <div className="content">10s</div>

              <div className="footer">
                <div>
                  <span>(1 Hour)</span>
                </div>
              </div>
            </div>
          </DashboardCard>
        </Grid>
        <Grid xs={2} sm={4} md={3}>
          <DashboardCard>
            <div className="dashboard-content-type">
              <div className="header">Consensus Nodes</div>
              <div className="content">3</div>
            </div>
          </DashboardCard>
        </Grid>

        <Grid xs={2} sm={4} md={3}>
          <DashboardCard>
            <div className="dashboard-content-type">
              <div className="header">Circulating Supply</div>
              <div className="content">
                {data.block?.height ? (data.block?.height * 10).toLocaleString('ko-KR') : '0'}
              </div>
            </div>
          </DashboardCard>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={4} sm={12} md={12}>
          <DashboardCard>
            <div className="dashboard-custom">
              <div className="left">
                <img src="src/assets/barreleye.png" />
                <Logo />
              </div>
              <div className="right"></div>
            </div>
          </DashboardCard>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid xs={4} sm={6} md={6}>
          <DashboardCard>
            <div className="dashboard-table-wrapper">
              <h2>Recent Blocks</h2>
              <div className="dashboard-table">
                <Blocks isSimpleData={true} isPagination={false} size={5} />
              </div>
            </div>
            <Button onClick={() => navigate('/blocks')}>VIEW ALL BLOCKS </Button>
          </DashboardCard>
        </Grid>

        <Grid xs={4} sm={6} md={6}>
          <DashboardCard>
            <div className="dashboard-table-wrapper">
              <h2>Recent Transactions</h2>
              <div className="dashboard-table">
                <Transactions isSimpleData={true} isPagination={false} size={5} />
              </div>
            </div>
            <Button onClick={() => navigate('/transactions')}>VIEW ALL TRANSACTIONS </Button>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
