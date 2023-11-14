import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import '../App.css'


const numRows = 20;
const numCols = 70;

const createEmptyGrid = () => Array.from({ length: numRows }, () => Array(numCols).fill(false));

const GameOfLife = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [isRunning, setIsRunning] = useState(false);

  const toggleCell = (row, col) => {
    const updatedGrid = grid.map(rowArray => [...rowArray]);
    updatedGrid[row][col] = !updatedGrid[row][col];
    setGrid(updatedGrid);
  };

  const evolveGrid = () => {
    const newGrid = createEmptyGrid();
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        const liveNeighbors = countLiveNeighbors(i, j);
        newGrid[i][j] = grid[i][j] ? liveNeighbors === 2 || liveNeighbors === 3 : liveNeighbors === 3;
      }
    }
    setGrid(newGrid);
  };

  const countLiveNeighbors = (row, col) => {
    let liveNeighborCount = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const neighborRow = row + i;
        const neighborCol = col + j;
        if (
          neighborRow >= 0 &&
          neighborRow < numRows &&
          neighborCol >= 0 &&
          neighborCol < numCols &&
          grid[neighborRow][neighborCol]
        ) {
          liveNeighborCount++;
        }
      }
    }
    return liveNeighborCount;
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(evolveGrid, 300);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, grid]);


  return (
    <>
      <Container maxWidth="xl" sx={{ marginTop: '3%' }}>
        <Grid container justifyContent="center" style={{ maxWidth: '100%', margin: 'auto', }}>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <Grid
                key={`${i}-${j}`}
                item
                onClick={() => toggleCell(i, j)}
                data-testid={`cell-${i}-${j}`}
                style={{
                  width: `calc(100% / ${numCols})`,
                  paddingBottom: `calc(100% / ${numCols})`,
                  backgroundColor: grid[i][j] ? 'green' : 'white',
                  border: '0.5px solid #ccc',
                  cursor: 'pointer',
                  transition: 'background-color 0.10s',
                }}
              />
            ))
          )}
        </Grid>
      </Container>

      <Container style={{ marginTop: '2%', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsRunning(true)}
          style={{
            borderRadius: '30px',
            margin: '0 10px',
            backgroundColor: isRunning ? '#4caf50' : '',
            fontSize: isRunning ? '1.5em' : '',

            border: isRunning ? 'black 2px solid' : 'none',
          }}
        >
          Start
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => setIsRunning(false)}
          style={{
            borderRadius: '30px',
            margin: '0 10px',
            backgroundColor: !isRunning ? '#f44336' : '',
            fontSize: !isRunning ? '1.5em' : '',
            border: isRunning ? 'none' : 'black 2px solid',
          }}
        >
          Stop
        </Button>


        <Button
          variant="contained"
          color="secondary"
          onClick={() => setGrid(createEmptyGrid())}
          style={{
            margin: '0 10px', borderRadius: '30px',
            backgroundColor: 'black',
          }}
        >
          Reset
        </Button>

      </Container>

      <div style={{ position: 'fixed', bottom: 0, minHeight: '30px', width: '100%', textAlign: 'center', backgroundColor: 'aliceblue', }}>
        <Typography variant="body2" style={{ color: 'black', fontWeight: 'bold', paddingTop: '5px' }}>
          Conway's Game of Life  | Developed By Gokul G A &copy; 2023
        </Typography>
      </div>

    </>
  );
};

export default GameOfLife;










