import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import homepage_bg from '../assets/Homepage_bg.gif'
import '../App.css'

const Homepage = () => {

  const pageStyle = {
    backgroundImage: `url(${homepage_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: "-2.5%"
  };


  return (

    <div style={pageStyle}>
      <div style={{ backgroundColor: '#0b0466', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', width: '30%', borderRadius: '50px', padding: 'none' }} >
        <h1 style={{ fontSize: '4em', marginBottom: '20px', color: 'aliceblue', fontWeight: 'bold', paddingTop: '2%' }}>
          Conway's  <br />Game of Life
        </h1>
      </div>
      <Link to="/gameoflife">
        <Button
          sx={{
            padding: '10px 20px',
            fontSize: '1em',
            margin: '10px',
            backgroundColor: '#0b0466',
            color: 'white',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '50px',
            transition: 'color 0.10s',
            ':hover': {
              backgroundColor: 'darkgreen',
            },
          }}
        >
          Start Game
        </Button>
      </Link>
    </div>
  );
};


export default Homepage;




















