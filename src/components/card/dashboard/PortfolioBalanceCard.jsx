import { Box, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import PortfolioChart from '../../chart/dashboard/PortfolioChart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const styles = {
    paper: {
        padding: '0.5rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        backgroundColor: '#1d1d1d',
        borderRadius: 4,
        border: '2px solid',
        borderColor: '#1d1d1d',
        width: '100%',
    },
    tabs: {
        backgroundColor: '#0B0D0F',
    },
    horizontalTabButton: {
        '&:first-of-type': {
            ml: 0.5,
        },
        '&:last-of-type': {
            mr: 0.5,
        },
        textTransform: 'none',
        color: 'text.secondary',
        minWidth: 0,
        minHeight: 0,
        '&.Mui-selected': {
            color: '#fff',
            backgroundColor: '#1d1d1d',
            borderRadius: 5,
        },
        fontSize: '0.8rem',
    },
};

const initialData = {
    '1W': [
        {
            name: 'Jan',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Feb',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Mar',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Apr',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'May',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jun',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jul',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Aug',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Sep',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Oct',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Nov',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Dec',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
    ],
    '1M': [
        {
            name: 'Jan',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Feb',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Mar',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Apr',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'May',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jun',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jul',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Aug',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Sep',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Oct',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Nov',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Dec',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
    ],
    '6M': [
        {
            name: 'Jan',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Feb',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Mar',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Apr',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'May',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jun',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jul',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Aug',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Sep',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Oct',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Nov',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Dec',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
    ],
    '1Y': [
        {
            name: 'Jan',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Feb',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Mar',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Apr',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'May',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jun',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Jul',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Aug',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Sep',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Oct',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Nov',
            cum_pnl: (Math.random() * 1.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
        {
            name: 'Dec',
            cum_pnl: (Math.random() * 2.5).toFixed(2),
            agg_volume: (Math.random() * 1.5).toFixed(2),
            agg_pnl: (Math.random() * 1.5).toFixed(2),
        },
    ]
};


const PortfolioBalanceCard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('1W');
    const [data, setData] = useState(initialData['1W']);

    const handlePeriodChange = (event, newPeriod) => {
        if (newPeriod !== null) {
            setSelectedPeriod(newPeriod);
            setData(initialData[newPeriod]);
        }
    };
    const CustomLegend = ({ handlePeriodChange, selectedPeriod }) => {

        return (
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ToggleButtonGroup
                        size="small"
                        value={selectedPeriod}
                        exclusive
                        onChange={handlePeriodChange}
                        sx={{ color: '#8A96A6' }}
                    >
                        <ToggleButton value="1W" sx={{
                            '&.Mui-selected': { color: '#ffeb3b' },
                            border: '1px solid #8A96A6', // Border color
                            borderRadius: '10px', // Adjust radius for curved corners
                        }}>1W</ToggleButton>
                        <ToggleButton value="1M" sx={{
                            '&.Mui-selected': { color: '#ffeb3b' },
                            border: '1px solid #8A96A6', // Border color
                            borderRadius: '10px', // Adjust radius for curved corners
                        }}>1M</ToggleButton>
                        <ToggleButton value="6M" sx={{
                            '&.Mui-selected': { color: '#ffeb3b' },
                            border: '1px solid #8A96A6', // Border color
                            borderRadius: '10px', // Adjust radius for curved corners
                        }}>6M</ToggleButton>
                        <ToggleButton value="1Y" sx={{
                            '&.Mui-selected': { color: '#ffeb3b' },
                            border: '1px solid #8A96A6', // Border color
                            borderRadius: '10px', // Adjust radius for curved corners
                        }}>1Y</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
        );
    };
    return (
        <Paper sx={{ ...styles.paper, height: '100%' }} elevation={0}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <>
                            <Typography variant="body2" color={'#8A96A6'}>
                                {'Portfolio Balance'}
                            </Typography>
                        </>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CustomLegend handlePeriodChange={handlePeriodChange} selectedPeriod={selectedPeriod} />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: '100px' }}>
                    <Box
                        sx={{
                            color: 'white',
                            padding: '10px',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '150px',
                        }}
                    >
                        <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem', fontWeight: 'bold', mr: 4 }}>
                        र36,577.2
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: '5px',
                                color: 'limegreen',
                            }}
                        >
                            <Typography variant="subtitle2" component="div" sx={{ fontWeight: 'bold', mr: 4 }}>
                            र682.5
                            </Typography>
                            <ArrowUpwardIcon />
                            <Typography variant="subtitle2" component="div" >
                                1.9%
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: '220px' }}>
                    <PortfolioChart data={data} />
                </Box>
            </Box>
        </Paper>
    )
}

export default PortfolioBalanceCard
