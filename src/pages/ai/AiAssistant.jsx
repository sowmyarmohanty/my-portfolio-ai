import { Box } from '@mui/material'
import React, { useState } from 'react'
import AiHistory from '../../components/ai_assistant/ai_history/AiHistory'
import AiConversation from '../../components/ai_assistant/ai-conversation/AiConversation'

const styles = {
  formBox: {
    minHeight: 'calc(100vh - 94px)',
    display: 'flex',
    flexDirection: 'column',
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex',
    marginRight: '50px'
  },
  secondFormBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '90vh',
  },
  promptBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  iconButton: {
    display: 'flex',
    gap: '0.6rem',
    color: 'text.secondary',
    paddingLeft: 0,
  },
  promptTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridPaperBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'flex-start',
  },
  gridPaperIconBox: {
    display: 'flex',
    justifyItem: 'start',
    gap: '1rem',
  },
  paper: {
    padding: '1rem 1rem',
    borderRadius: 4,
    width: '492px',
    minHeight: '100%',
    border: '1px solid transparent',
    cursor: 'pointer',
    backgroundColor: '#1d1d1d',
  },
  thirdFormBox: {
    display: 'flex',
    justifyContent: 'center',
    py: 3,
    px: 2,
    alignItems: 'center',
  },
  textFieldBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '885px',
    padding: '3px',
  },
  button: {
    backgroundColor: 'accent.default',
    borderRadius: 2,
    borderBottomLeftRadius: 0,
    '&:hover': {
      backgroundColor: 'accent.default',
      opacity: 0.8,
    },
  },
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  headerBox: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    color: 'white',
    padding: '10px',
  },
  scrollableList: {
    height: 'calc(100% - 48px)',
    overflowY: 'auto',
    padding: 0,
  },
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
  sendTextIcon: {
    boxSizing: 'border-box',
    width: '40px',
    height: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d232b',
    overflow: 'visible',
    padding: '0px',
    alignContent: 'center',
    flexWrap: 'nowrap',
    position: 'absolute',
    borderRadius: '8px',
    border: '1px solid rgba(21, 25, 31, 0.65)',
  },
};

const AiAssistant = () => {
  const [intialTemplate, setIntialTemplate] = useState(true);
  const [showChart, setShowChart] = useState(false);
  const [answerBot, setAnswerBot] = useState([]);
  return (
    <Box sx={{ flexGrow: 0, overflow: 'hidden', maxHeight: '100vh' }}>
      <Box sx={{
        maxWidth: "1440px",
        margin: "auto"
      }}>
        <Box sx={{
          display: 'flex',
          gap: '15px'
        }}>
          <AiHistory
            styles={styles}
            setIntialTemplate={setIntialTemplate}
            setShowChart={setShowChart}
            setAnswerBot={setAnswerBot}
          />
          <AiConversation
            styles={styles}
            setIntialTemplate={setIntialTemplate}
            intialTemplate={intialTemplate}
            setShowChart={setShowChart}
            showChart={showChart}
            setAnswerBot={setAnswerBot}
            answerBot={answerBot}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default AiAssistant