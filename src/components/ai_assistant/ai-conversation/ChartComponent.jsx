import React from 'react';
import { Grid2 as Grid, Box, Typography, Avatar, IconButton } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';


const styles = {
    roundedIcon: {
        borderRadius: '50%',
        border: '4px',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffeb3b',
        height: "40px",
        width: "40px"
    },
};

const ChatBubble = ({ isUser, message, avatar,showIcons=true }) => (
    <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row', // Change to row to align icons and message horizontally
                alignItems: 'flex-start',
                mb: 3,
                justifyContent: 'flex-start'
            }}
        >
            {!isUser ? (
                <>
                    <Box sx={styles.roundedIcon}>
                        <SmartToyOutlinedIcon style={{ color: 'black' }} />
                    </Box>
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>{message}</Typography>
                        {showIcons && (
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                 <IconButton size="small" sx={{ backgroundColor: 'transparent', color: 'text.secondary' }}>
                                    <VolumeUpOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                                </IconButton>
                                <IconButton size="small" sx={{ backgroundColor: 'transparent', color: 'text.secondary' }}>
                                    <ContentCopyOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                                </IconButton>
                                <IconButton size="small" sx={{ backgroundColor: 'transparent', color: 'text.secondary' }}>
                                    <LoopOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                                </IconButton>
                            </Box>
                        )}
                    </Box>
                </>
            ) : (
                <>
                    <Avatar
                        sx={{
                            width: 40,
                            height: 40,
                        }}
                        alt={'User'}
                        src={avatar}
                    />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="body2" sx={{ mt: 1 }}>{message}</Typography>
                    </Box>
                </>
            )}
        </Box>
    </>

);

const ChatContainer = ({ messages }) => (
    <Box
        sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            overflowY: 'scroll', // Enable scrolling
            overflowX: 'hidden', // Hide horizontal scrollbar
            '&::-webkit-scrollbar': {
                display: 'none' // Hide scrollbar for WebKit browsers
            }
        }}
    >
        <Box sx={{
            flex: 1,
        }}
        >
            {messages.map((msg, index) => (
                <ChatBubble
                    key={index}
                    isUser={msg.isUser}
                    message={msg.text}
                />
            ))}
        </Box>

    </Box >
);

const ChartComponent = ({answerBot,containerRef}) => {

    return (
        <Grid container style={{  overflow: 'hidden',width:'100%' }} >
            <Grid style={{ height: '100%', overflowY: 'auto', width:'100%' }} ref={containerRef}>
                <ChatContainer messages={answerBot} />
            </Grid>
        </Grid>
    );
};

export default ChartComponent;
