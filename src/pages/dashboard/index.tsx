import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';

import { DashboardCard } from './styles';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={2} sm={4} md={4}>
          <DashboardCard>
            <div className="header">Block Height</div>
            <div className="content">765</div>
            <Divider />
            <div className="footer" onClick={() => navigate('/blocks')}>
              <span>See all blocks</span>
              <ArrowForwardRoundedIcon />
            </div>
          </DashboardCard>
        </Grid>

        <Grid xs={2} sm={4} md={4}>
          <DashboardCard>
            <div className="header">Transactions</div>
            <div className="content">3,551.57 M (43.0 TPS)</div>
            <Divider />
            <div className="footer" onClick={() => navigate('/transactions')}>
              <span>See all Transactions</span>
              <ArrowForwardRoundedIcon />
            </div>
          </DashboardCard>
        </Grid>

        <Grid xs={2} sm={4} md={4}>
          <DashboardCard>
            <div className="header">Address</div>
            <div className="content">-</div>
            <Divider />
            <div className="footer" onClick={() => navigate('/address')}>
              <span>See all address</span>
              <ArrowForwardRoundedIcon />
            </div>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Dashboard;
