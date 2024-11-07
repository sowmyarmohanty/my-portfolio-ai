import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AllocationChart from '../../chart/dashboard/AllocationChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BitcoinIcon from '@mui/icons-material/MonetizationOn';
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

const IconBox = ({ sx, children }) => (
    <Box sx={{ 
        width: 24, // Adjust size as needed
        height: 24, // Adjust size as needed
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        ...sx 
    }}>
        {children}
    </Box>
);



const AllocationCard = () => {
    const data = [
        { name: 'BUSD', value: 36.93, color: '#800080', icon: <AccountBalanceWalletIcon style={{ color: '#800080' }} /> }, // Purple
        { name: 'SOL', value: 29.55, color: '#FFD700', icon: <SecurityIcon style={{ color: '#FFD700' }} /> }, // Yellow
        { name: 'ADA', value: 23.76, color: '#FF6347', icon: <AttachMoneyIcon style={{ color: '#FF6347' }} /> }, // Light Red
        { name: 'BTC', value: 17.22, color: '#ADD8E6', icon: <BitcoinIcon style={{ color: '#ADD8E6' }} /> }, // Light Blue
    ];
    const CustomLegend = () => {

        return (
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MoreHorizIcon sx={{ color: '#8A96A6' }} />
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
                                {'Allocation'}
                            </Typography>
                        </>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CustomLegend />
                    </Box>
                </Box>
                <Box sx={{ width: '100%', height: '200px' }}>
                    <AllocationChart />
                </Box>
                <Box sx={{ width: '100%', height: '130px' }}>
                    <Box sx={{ flexGrow: 1, mt: 2,ml:5 }}>
                        <Grid container spacing={2}>
                            {data.map((entry) => (
                                <Grid item xs={6} sm={4} md={6} key={entry.name}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconBox sx={{ borderColor: entry.color }}>
                                            {entry.icon}
                                        </IconBox>
                                        <Box sx={{ ml: 1, textAlign: 'left' }}>
                                            <Typography variant="body2" sx={{ color: entry.color }}>
                                                {entry.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#fff' }}>
                                                {entry.value.toFixed(2)}%
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default AllocationCard;