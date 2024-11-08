import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from '@mui/material';
import { makeStyles , styled} from '@mui/styles';
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1d1d1d',
  color: '#fff',
  height: '100%',
  position: 'relative',
}));
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: '#1c1c1e',
    color: '#fff',
  },
  head: {
    backgroundColor: '#2c2c2e',
    color: '#fff',
  },
  cell: {
    color: '#fff',
    borderBottom: '1px solid #333',
  },
  checkbox: {
    color: '#fff',
    '&.Mui-checked': {
      color: '#ffd700',
    },
  },
  selectedRow: {
    backgroundColor: '#333333',
  },
});

const rows = [
  { id: 1, currency: 'Ethereum', contract: '0x474...ca3', amount: '0.556', status: 'Transaction Complete' },
  { id: 2, currency: 'Bitcoin', contract: '0x572...ca2', amount: '0.241', status: 'Transaction Complete' },
  { id: 3, currency: 'Cardano', contract: '0x022...ka9', amount: '593.243', status: 'Transaction Complete' },
  { id: 4, currency: 'Tether', contract: '0x891...fe1', amount: '912.542', status: 'Transaction Complete' },
];

const TransactionTable = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    const newSelected = selected.includes(id)
      ? selected.filter((selectedId) => selectedId !== id)
      : [...selected, id];
    setSelected(newSelected);
  };

  return (
    <StyledCard>
      <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <>
                            <Typography variant="body2" color={'#8A96A6'}>
                                {'Allocation'}
                            </Typography>
                        </>
                    </Box>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="transaction table">
        <TableHead>
          <TableRow className={classes.head}>
            <TableCell />
            <TableCell className={classes.cell}>Currency</TableCell>
            <TableCell className={classes.cell}>Contract</TableCell>
            <TableCell className={classes.cell}>Amount</TableCell>
            <TableCell className={classes.cell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className={selected.includes(row.id) ? classes.selectedRow : ''}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  className={classes.checkbox}
                  checked={selected.includes(row.id)}
                  onChange={() => handleSelect(row.id)}
                />
              </TableCell>
              <TableCell className={classes.cell}>{row.currency}</TableCell>
              <TableCell className={classes.cell}>{row.contract}</TableCell>
              <TableCell className={classes.cell}>{row.amount}</TableCell>
              <TableCell className={classes.cell}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </CardContent>
    </StyledCard>
    
  );
};

export default TransactionTable;