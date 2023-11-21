
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import homepage_bg from '../assets/Homepage_bg.gif'; 
import '../App.css';

// Functional component for the Homepage
const Homepage = () => {
  // Styles for the main page container
  const pageStyle = {
    backgroundImage: `url(${homepage_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    paddingTop: '1px',
  };

  // Styles for the inner container
  const containerStyle = {
    backgroundColor: '#0b0466',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    borderRadius: '50px',
    paddingLeft: '1%',
    paddingRight: '1%',
  };

  // Styles for the title text
  const titleStyle = {
    fontSize: '4em',
    marginBottom: '20px',
    color: 'aliceblue',
    fontWeight: 'bold',
    paddingTop: '2%',
  };

  // Styles for the button
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    margin: '10px',
    backgroundColor: '#0b0466',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50px',
    transition: 'color 0.10s',
  };

  // Rendering the homepage component
  return (
    <div style={pageStyle}>
      {/* Main container with background image */}
      <div style={containerStyle}>
        {/* Title for the homepage */}
        <h1 style={titleStyle}>Conway's <br />Game of Life</h1>
      </div>
      {/* Link to navigate to the Game of Life page */}
      <Link to="/gameoflife">
        {/* Button to start the game */}
        <Button
          sx={{
            ...buttonStyle,
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
















// import { Button } from '@mui/material';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import homepage_bg from '../assets/Homepage_bg.gif';
// import '../App.css';

// const Homepage = () => {
//   const pageStyle = {
//     backgroundImage: `url(${homepage_bg})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     textAlign: 'center',
//     paddingTop: '1px',
//   };

//   const containerStyle = {
//     backgroundColor: '#0b0466',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '0 auto',
//     borderRadius: '50px',
//     paddingLeft: '1%',
//     paddingRight: '1%',
//   };

//   const titleStyle = {
//     fontSize: '4em',
//     marginBottom: '20px',
//     color: 'aliceblue',
//     fontWeight: 'bold',
//     paddingTop: '2%',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     fontSize: '1em',
//     margin: '10px',
//     backgroundColor: '#0b0466',
//     color: 'white',
//     cursor: 'pointer',
//     border: 'none',
//     borderRadius: '50px',
//     transition: 'color 0.10s',
//   };

//   return (
//     <div style={pageStyle}>
//       <div style={containerStyle}>
//         <h1 style={titleStyle}>Conway's <br />Game of Life</h1>
//       </div>
//       <Link to="/gameoflife">
//         <Button
//           sx={{
//             ...buttonStyle,
//             ':hover': {
//               backgroundColor: 'darkgreen',
//             },
//           }}
//         >
//           Start Game
//         </Button>
//       </Link>
//     </div>
//   );
// };

// export default Homepage;




















