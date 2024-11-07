import React from 'react';
import { Grid2 as Grid, Box, Typography, Paper, Avatar, IconButton } from '@mui/material';
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
    const messages = [
        { isUser: true, text: 'Hello!', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'Hi there! How can I help you today?', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'I need information about your services.', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'Sure! We offer a variety of services including...Can you tell me more about your pricing?Can you tell me more about your pricing?Can you tell me more about your pricing?Can you tell me more about your pricing?Can you tell me more about your pricing?', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'Can you tell me more about your pricing?', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'Our pricing is competitive and depends on the specific services you need. Here’s a general overview...', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'Do you offer any discounts for long-term contracts?', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'Yes, we do offer discounts for long-term contracts. Let me provide you with more details...', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'That sounds great. How can I get started?', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'To get started, you can fill out our contact form or give us a call. We’ll be happy to assist you further.', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'Thanks for the information. I’ll be in touch soon.', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'You’re welcome! Looking forward to hearing from you.', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'One last question: Do you have customer support available?', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'Absolutely! Our customer support team is available 24/7 to assist you with any queries.', avatar: 'https://via.placeholder.com/40' },
        { isUser: true, text: 'Perfect. Thanks for all your help!', avatar: 'https://via.placeholder.com/40' },
        { isUser: false, text: 'My pleasure! Have a great day!', avatar: 'https://via.placeholder.com/40' }
    ];


    return (
        <Grid container style={{  overflow: 'hidden',width:'100%' }} >
            <Grid style={{ height: '100%', overflowY: 'auto', width:'100%' }} ref={containerRef}>
                <ChatContainer messages={answerBot} />
            </Grid>
        </Grid>
    );
};

export default ChartComponent;
