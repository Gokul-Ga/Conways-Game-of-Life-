import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Rules = ({ open, onClose }) => {
  return (

    // Dialog component with rules content
    <Dialog open={open} onClose={onClose}>
      <DialogTitle variant='bold' > Game of Life - Rules </DialogTitle>

      {/* Dialog content with rules explanation */}
      <DialogContent>
        <Typography variant="body1" paragraph textAlign={'left-align'}>
          1. Any live cell with fewer than two live neighbors dies (underpopulation).
          <br /><br />
          2. Any live cell with two or three live neighbors lives on to the next generation.
          <br /><br />
          3. Any live cell with more than three live neighbors dies (overcrowding).
          <br /><br />
          4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).
          <br /><br />
        </Typography>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Rules;
