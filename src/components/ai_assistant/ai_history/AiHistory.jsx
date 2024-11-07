import { Box, Grid2 as Grid, IconButton, ListItem, ListItemText, Paper, styled, Typography, useTheme,List,ListSubheader } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
const CustomIconButton = motion(IconButton);
const drawerWidth = 260;

const DrawerHeaderStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'flex-start' : 'center',
    paddingLeft: theme.spacing(open ? 3 : 0),
}));

const DrawerContaintStyled = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, _open }) => ({
    ...theme.mixins.toolbar,
    height: 'calc(100% - 48px)',
    overflowY: 'auto',
    padding: 0,
    backgroundColor: '#1d1d1d'
}));

const CustomListItem = styled(ListItem)(({ theme }) => ({
    width: '95%',
    margin: '0 auto',
    height: '50px',
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#15191C',
        borderRadius: '25px',
        '.icon-buttons': {
            display: 'flex',
        },
    },
    '.icon-buttons': {
        display: 'none',
        alignItems: 'center',
        gap: theme.spacing(1),
        position: 'absolute',
        right: '10px',
    },
}));

const hoverEffect = {
    initial: {
        opacity: `100%`,
        transition: { duration: 0.3, ease: 'easeIn' },
    },
    hover: {
        opacity: `30%`,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
};



const AiHistory = ({ styles,setIntialTemplate,setShowChart,setAnswerBot }) => {
    const theme = useTheme();

    const handleNewChat =()=>{
        setIntialTemplate(true)
        setShowChart(false)
        setAnswerBot([]);
    }
    return (
        <Grid container>
            <Box sx={{ width: drawerWidth }}>
                <Paper sx={{ borderRadius: '14px', height: 'calc(96vh - 60px)', overflow: 'hidden', backgroundColor: '#1d1d1d' }} elevation={0}>
                    <DrawerHeaderStyled sx={{ display: 'flex', alignItems: 'center', padding: theme.spacing(1, 2) }}>
                        <Box sx={styles.headerBox}>
                            <Box sx={styles.roundedIcon}>
                                <SmartToyOutlinedIcon style={{color:'black'}}/>
                            </Box>
                            <Typography variant="body2" sx={{
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: 500,
                                lineHeight: '22px',
                                textAlign: 'left',
                                marginLeft: '10px', marginRight: 'auto'
                            }}>
                                Cryptovia
                            </Typography>

                            <CustomIconButton
                                sx={{ padding: 0 }}
                                disableRipple
                                initial={hoverEffect.initial}
                                animate={hoverEffect.initial}
                                whileHover={hoverEffect.hover}
                                onClick={handleNewChat}
                            >

                                <AddIcon sx={{ color: 'text.secondary' }} />
                            </CustomIconButton>
                        </Box>
                    </DrawerHeaderStyled>
                    <DrawerContaintStyled>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader sx={{ ml: 0, backgroundColor: "#1d1d1d" }} component="div" id="nested-list-subheader">
                                    <Typography variant="captionText" sx={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '18px',
                                    }}>
                                        Yesterday
                                    </Typography>
                                </ListSubheader>
                            }
                        >
                            {[...Array(7)].map((_, index) => (
                                <CustomListItem key={index} sx={{ ml: 1 }}>
                                    <ListItemText secondary="This is Example title of" secondaryTypographyProps={{ variant: 'bodyTextB2' }} sx={{
                                        fontFamily: 'Inter',
                                        fontSize: '14px',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                        textAlign: 'left'
                                    }} />
                                    <Box className="icon-buttons">
                                        <CustomIconButton
                                            sx={{ padding: 0 }}
                                            disableRipple
                                        >
                                            {/* <EditIcon /> */}
                                        </CustomIconButton>
                                        <CustomIconButton
                                            sx={{ padding: 0 }}
                                            disableRipple
                                        >
                                            {/* <CrossIcon style={{ color: "#D7E4F5" }} /> */}
                                        </CustomIconButton>
                                    </Box>
                                </CustomListItem>

                            ))}
                        </List>
                    </DrawerContaintStyled>
                </Paper>
            </Box>
        </Grid>
    )
}

export default AiHistory