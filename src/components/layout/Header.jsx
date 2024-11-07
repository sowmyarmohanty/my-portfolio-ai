import React from 'react';
import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  useMediaQuery,
  styled,
  Link,
  Typography,
  Tooltip,
  Button,
  alpha,
  InputBase,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '51px !important',
    height: '51px !important',
    backgroundColor: '#101417',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    height: '100%',
  },
  divider: {
    borderColor: 'divider',
    height: '20px',
    borderRightWidth: '2px',
    opacity: '0.5',
  },
  mobileLogo: {
    height: '51px',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 'calc(50% - 2.5%)',
    zIndex: '1',
  },
  navbarIconButton: {
    width: '22px',
    height: '22px',
    padding: 0,
  },
  search: {
    borderRadius: '20px 20px 20px 20px', // Rounded corners for all sides
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px 20px 20px 20px', // Ensure the input field also has rounded corners
      paddingRight: '2px', // Adjust padding to ensure the rounded corner isn't cut off
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: '20px 20px 20px 20px', // Rounded corners for the outline
      borderWidth: '1px', // Adjust border width if needed
    },
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px 20px 20px 20px', // Rounded corners for the wrapper
    overflow: 'hidden', // Ensure the wrapper clips the rounded corners correctly
    ml: 15,
  },
  searchInput: {
    borderRadius: '20px 0 0 20px', // Only round the left side of the input
    flex: 1,
  },

};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const StyledAppBar = styled(AppBar)(({ theme, isOpen }) => ({
  backgroundColor: '#1d1d1d', // Dark theme background
  color: '#fff', // Text color
  zIndex: theme.zIndex.drawer + 1, // Ensure it's above the sidebar
  transition: 'width 0.5s', // Smooth transition for width change
}));

const Header = ({ isOpen }) => {

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const renderDesktopNavbar = () => (
    <Toolbar sx={styles.toolbar}>
      <Box sx={styles.section}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Link to='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <TrendingUpIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ fontSize: '1rem' }}>
              Cryptovia
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', ml: 8 }}>
          <Tooltip title={'last updated'} placement='bottom'>
            <IconButton color="inherit" size="small" sx={{ color: '#393934' }}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#393934' }}>
            Last updated 3m ago
          </Typography>
          <Box sx={styles.searchWrapper}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.section}>
        <Button variant="contained" sx={{ marginLeft: 'auto' }}>Connect Portfolio</Button>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );
  const renderTabletNavbar = () => (
    <Toolbar sx={styles.toolbar}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <Typography variant="h6" sx={{ fontSize: '1.25rem' }}>Cryptovia</Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  );

  const renderMobileNavbar = () => (
    <Toolbar sx={styles.toolbar}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <TrendingUpIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Box>
    </Toolbar>
  );

  const renderResponsiveNavbar = () => {
    if (isMobile) return renderMobileNavbar();
    if (isTablet) return renderTabletNavbar();

    return renderDesktopNavbar();
  };
  return (
    <StyledAppBar position="fixed" isOpen={isOpen}>
      {renderResponsiveNavbar()}
    </StyledAppBar>
  );
};

export default Header;
