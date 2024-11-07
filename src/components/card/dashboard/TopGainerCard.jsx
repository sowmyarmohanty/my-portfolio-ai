import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { styled } from '@mui/system';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1d1d1d',
  color: '#fff',
  height: '100%',
  position: 'relative',
 // padding: theme.spacing(2),
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '8px',
  border:'1px solid #4caf50',
  color: '#4caf50',
}));

const TopGainerCard = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" sx={{ color: '#fff', fontSize: '1rem', mb: 2 }}>Top Gainer</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconBox >
            <TrendingUpIcon />
          </IconBox>
          <Box sx={{ ml: 1 }}>
            <Typography variant="body2" sx={{ color: '#4caf50', fontSize: '1rem' }}>र 1,800</Typography>
            <Typography variant="body2" sx={{ color: '#4caf50', fontSize: '0.875rem' }}>+20%</Typography>
          </Box>
        </Box>
        <ResponsiveContainer width="100%" height={100}>
      <LineChart height={100} data={data}>
            <Tooltip content={({ payload, label }) => {
              if (payload && payload.length) {
                return (
                  <Box sx={{ backgroundColor: '#1d1d1d', padding: '10px', borderRadius: '5px', color: '#fff' }}>
                    <Typography variant="body2">{label}: र{payload[0].amt}</Typography>
                  </Box>
                );
              }
              return null;
            }} />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </StyledCard>
  );
};

export default TopGainerCard;