import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Rules from './Rules';

// Functional component for the Navbar
const Navbar = () => {
  // State for managing the visibility of the Rules component
  const [isInstructionOpen, setInstructionOpen] = useState(false);

  // Event handler to open the Rules component
  const handleInstructionClick = () => {
    setInstructionOpen(true);
  };

  // Event handler to close the Rules component
  const handleInstructionClose = () => {
    setInstructionOpen(false);
  };

  // Rendering the Navbar component
  return (
    <div>
      {/* App Bar for the navigation */}
      <AppBar position="sticky" sx={{backgroundColor:'#0b0466'}} >
        <Toolbar>
          {/* Title */}
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            Conway's Game of Life
          </Typography>
          
          {/* Home Button */}
          <Button
            sx={{
              backgroundColor:'#1aebd9',
              color:'black',
              ml:'2em',
              mr:'2em',
              transition: 'color 0.10s',
              ':hover': {
                backgroundColor: 'aliceblue',
                color:'black'
              },
            }}
            component={Link}
            to="/"
          >
            Home
          </Button>
          
          {/* Rules Button */}
          <Button
            sx={{
              backgroundColor:'#1aebd9',
              color:'black',
              mr:'4em',
              transition: 'color 0.10s',
              ':hover': {
                backgroundColor: 'aliceblue',
                color:'black'
              },
            }}
            onClick={handleInstructionClick}
          >
            Rules
          </Button>
        </Toolbar>
      </AppBar>

      {/* Rules component  */}
      <Rules
        open={isInstructionOpen}
        onClose={handleInstructionClose}
      />
    </div>
  );
};

export default Navbar;















