import React from 'react';
import { Card } from '@mui/material';
import { styled} from '@mui/styles';
const CardWrapper = styled(Card)(({ theme }) => ({
    backgroundColor: '#1d1d1d',
    color: '#fff',
    height: '100%',
    position: 'relative',
  }));
const StyledCard = ({children}) => {
    return (
        <CardWrapper>{children}</CardWrapper>
    );
}
export default StyledCard;