import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemIcon, ListItemText,Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { useNavigate } from "react-router-dom";
const drawerWidth = 200;

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  ...(open && {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      backgroundColor: '#1d1d1d',
      color: '#fff',
      paddingTop: '50px',
    },
  }),
  ...(!open && {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    '& .MuiDrawer-paper': {
      width: theme.spacing(7),
      backgroundColor: '#1d1d1d',
      color: '#fff',
      paddingTop: '50px',
      overflow: 'hidden'
    },
  }),
}));

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const handleDrawer = () => {
    setOpen(!open);
  };



  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, active: activeItem === 'Dashboard',path:'/dashboard' },
    { text: 'Statistics', icon: <PieChartIcon />, active: activeItem === 'Statistics' },
    { text: 'Performance', icon: <ShowChartIcon />, active: activeItem === 'Performance' },
    { text: 'Wallets', icon: <AccountBalanceWalletIcon />, active: activeItem === 'Wallets' },
    { text: 'Security', icon: <SecurityIcon />, active: activeItem === 'Security' },
    { text: 'Data', icon: <DataUsageIcon />, active: activeItem === 'Data' },
    { text: 'AI', icon: <SmartToyOutlinedIcon />, active: activeItem === 'AI',path:'/assistant' },

  ];

  const bottomItems = [
    { text: 'Settings', icon: <SettingsIcon />, active: activeItem === 'Settings' },
    { text: 'Log Out', icon: <LogoutIcon />, active: activeItem === 'Log Out' },
  ];

  return (
    <StyledDrawer variant="permanent" open={open}>
      <List>
        <ListItem button onClick={handleDrawer}>
          <ListItemIcon>{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}</ListItemIcon>
        </ListItem>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              setActiveItem(item.text);
              navigate(item.path)
            }}
            sx={{
              // borderRadius: item.active ? 2 : 0,
              borderRadius: item.active ? '20px 0 0 20px' : '4px',
              backgroundColor: item.active ? '#333' : 'transparent',
              color: item.active ? '#ffeb3b' : '#fff',
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              cursor:'pointer',
              px: 2.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: item.active ? '#ffeb3b' : '#aaa' }}>
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}> {/* Adjust the font size here */}
                  {item.text}
                </Typography>
              }
            />}
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: 'auto' }}>
        {bottomItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              setActiveItem(item.text);
              navigate(item.path)
            }}
            sx={{
              borderRadius: item.active ? 2 : 0,
              backgroundColor: item.active ? '#333' : 'transparent',
              color: item.active ? '#ffeb3b' : '#fff',
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              cursor: 'pointer',
              px: 2.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', color: item.active ? '#ffeb3b' : '#aaa' }}>
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: '0.85rem' }}> {/* Adjust the font size here */}
                  {item.text}
                </Typography>
              }
            />}
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
