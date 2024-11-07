import React from 'react'
import { motion } from 'framer-motion';
import { Box, Grid2 as Grid, Typography, Paper } from '@mui/material';
// Styles
const styles = {
  gridBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  gridPaperBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    padding: 1
  },
  gridPaperIconBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    padding: '0.5rem 0.5rem',
    borderRadius: 5,
    minHeight: '100%',
    width: '90%',
    border: '1px solid transparent',
    cursor: 'pointer',
    backgroundImage: 'none',
  },
};

// Animations
const CustomPaper = motion(Paper);
const CustomGrid = motion(Grid);


const paperAnimation = {
  initial: {
    border: '1.5px solid transparent',
    borderRadius: 19.5,
  },
  hover: {
    border: '1.5px solid',
    borderColor: '#ffeb3b',
    borderRadius: 19.5,
    overflow: 'visible',
    zIndex: 1
  },
  exit: {
    border: '1.5px solid transparent',
    borderRadius: 19.5,
  },
  transition: {
    duration: 0.3,
    ease: 'easeIn',
  },
};




const GridItem = ({ title, description }) => {

  return (
    <CustomGrid
      item
      sm={6}
      md={4}
      initial='initial'
      whileHover='hover'
      exit='exit'
      transition='transition'
    >
      <CustomPaper
        elevation={0}
        sx={styles.paper}
        onClick={() => { }}
        variants={paperAnimation}
      >
        <Box sx={styles.gridPaperBox}>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            {title}
          </Typography>
          <Typography variant='caption' align='center' sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Box>
      </CustomPaper>
    </CustomGrid>
  );
};


const InitialTemplate = () => {
    return (
        <Grid
            container
            spacing={0}
            style={{ maxHeight: '80vh'}}
            direction='column'
        >
            <Grid item xs={10} ml={10} mt={2}>
                <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: '20px', flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                    <GridItem
                        title='todays_analysis'
                        description='Analysis for todays evnts based on my trading'
                    />
                    <GridItem
                        title='Recap of yesterday'
                        description='How economic events could have impacted my trades'
                    />
                    <GridItem
                        title='week_analysis'
                        description='An detailed  fundamental analysis for the coming week'
                    />
                </Grid>
                <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: '20px', flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                    <GridItem
                        title='todays_analysis'
                        description='Analysis for todays evnts based on my trading'
                    />
                    <GridItem
                        title='Recap of yesterday'
                        description='How economic events could have impacted my trades'
                    />
                    <GridItem
                        title='week_analysis'
                        description='An detailed  fundamental analysis for the coming week'
                    />
                </Grid>
                <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: '20px', flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                    <GridItem
                        title='todays_analysis'
                        description='Analysis for todays evnts based on my trading'
                    />
                    <GridItem
                        title='Recap of yesterday'
                        description='How economic events could have impacted my trades'
                    />
                    <GridItem
                        title='week_analysis'
                        description='An detailed  fundamental analysis for the coming week'
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InitialTemplate