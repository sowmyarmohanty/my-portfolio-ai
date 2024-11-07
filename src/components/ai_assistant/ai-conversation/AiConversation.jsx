import { Box, Grid2 as Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InitialTemplate from './InitialTemplate';
import ChartComponent from './ChartComponent';

const CustomIconButton = motion(IconButton);

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




const AiConversation = ({ styles, setIntialTemplate, setShowChart, intialTemplate, showChart, setAnswerBot, answerBot }) => {
    const [chatText, setChatText] = useState({ question: '' });
    const containerRef = useRef(null);
    const questionRef = useRef('');


    const handleTextChange = (e) => {
        setChatText({ ...chatText, [e.target.name]: e.target.value });
        questionRef.current = e.target.value;
    };
    const handleSendText = () => {
        setAnswerBot((prevState) => [
            ...prevState,
            { text: questionRef?.current, isUser: true },
            { text: 'Hii...How can help you ?', isUser: false }, // Loader message
        ]);
        setChatText({ question: '' });
        setShowChart(true);
        setIntialTemplate(false)
    }
    const handleClick = async (e) => {
        if (e.key === 'Enter') await handleSendText(e);
    };
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [answerBot]);
    return (
        <Grid container direction="column" style={{
            height: '100%',
            width: 'calc(80vw - 20px)', // Dynamically set width as 80% of the viewport minus padding
            maxWidth: '1000px', // Cap the maximum width
            minWidth: '600px',
            position: 'relative',
        }}>
            <Grid
                item
                xs
                style={{
                    overflowY: 'auto',
                    padding: '10px',
                    maxHeight: 'calc(100vh - 150px)',
                    height: '90vh',
                    '&::-webkit-scrollbar': {
                        display: 'none',  // Hide scrollbar in WebKit-based browsers (Chrome, Safari)
                    },
                    msOverflowStyle: 'none',  // Hide scrollbar in IE and Edge
                    scrollbarWidth: 'none',  // Hide scrollbar in Firefox
                    display: "flex",
                }}
            >
                {intialTemplate && (
                    <Box sx={{ maxHeight: '800px', margin: '0' }}>
                        <InitialTemplate />
                    </Box>
                )}
                {showChart && (
                    <Box
                        ref={containerRef}
                        sx={{
                            overflowY: 'auto',
                            marginTop: 0, // Add space if InitialTemplate is shown
                            width: "100%",
                            '&::-webkit-scrollbar': {
                                display: 'none',  // Hide scrollbar in WebKit-based browsers (Chrome, Safari)
                            },
                        }}
                    >
                        <ChartComponent answerBot={answerBot} />
                    </Box>
                )}
            </Grid>
            <Grid
                container
                justifyContent="center"
                alignItems="flex-end"
            >
                <Grid
                    container
                    spacing={1}
                    sx={{ width: '90%' }}
                >
                    <TextField
                        fullWidth
                        onChange={handleTextChange}
                        onKeyDown={handleClick}
                        name="question"
                        value={chatText.question}
                        placeholder="Ask me anything..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <CustomIconButton
                                        sx={styles.sendTextIcon}
                                        disableRipple
                                        initial={hoverEffect.initial}
                                        animate={hoverEffect.initial}
                                        whileHover={hoverEffect.hover}
                                        onClick={handleSendText}
                                    >
                                        <SendOutlinedIcon style={{ color: '#ffeb3b' }} />
                                    </CustomIconButton>
                                </InputAdornment>
                            ),
                            sx: {
                                borderRadius: 10,
                                fontSize: '13px',
                                height: 60,
                                px: 4,
                                pr: 7,
                                backgroundColor: '#1d1d1d',
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>


    )
}

export default AiConversation