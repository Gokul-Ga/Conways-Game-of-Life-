import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Rules from './Rules'; 

const Navbar = () => {
  const [isInstructionOpen, setInstructionOpen] = useState(false);

  const handleInstructionClick = () => {
    setInstructionOpen(true);
  };

  const handleInstructionClose = () => {
    setInstructionOpen(false);
  };

  return (
    <div>
      <AppBar position="sticky" sx={{backgroundColor:'#0b0466'}} >
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            Conway's Game of Life
          </Typography>
          <Button sx={{backgroundColor:'#1aebd9',color:'black', mr:'2em',transition: 'color 0.10s',
            ':hover': {
              backgroundColor: 'aliceblue',
              color:'black'

            },}} component={Link} to="/">Home</Button>
          <Button sx={{backgroundColor:'#1aebd9',color:'black',mr:'4em',transition: 'color 0.10s',
            ':hover': {
              backgroundColor: 'aliceblue',
              color:'black'

            } }}onClick={handleInstructionClick}>Rules</Button>
        </Toolbar>
      </AppBar>

      <Rules
        open={isInstructionOpen}
        onClose={handleInstructionClose}
      />
    </div>
  );
};

export default Navbar;














