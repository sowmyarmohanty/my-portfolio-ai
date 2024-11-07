import React from 'react';
import { Box, Grid } from '@mui/material';
import PortfolioBalanceCard from '../../components/card/dashboard/PortfolioBalanceCard';
import AllocationCard from '../../components/card/dashboard/AllocationCard';
import TransactionTable from '../../components/table/dashboard/TransactionsTable';
import TopGainerCard from '../../components/card/dashboard/TopGainerCard';

const Dashboard = () => {
  return (
    <Box sx={{ paddingTop: '15px' }}>
      <Grid container spacing={1}>
        <Grid container xs={12} md={10} spacing={1}>
          <Grid item xs={12} md={8}>
            <Box>
              {/* <PortfolioBalance /> */}
              <PortfolioBalanceCard />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              {/* <AllocationCard /> */}
              <AllocationCard />
            </Box>
          </Grid>
          <Grid item md={12} sm={12}>
            <TransactionTable />
          </Grid>
        </Grid>
        <Grid item xs={2} md={2}>
          <Grid>
            <TopGainerCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
