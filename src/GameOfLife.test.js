import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import GameOfLife from './components/GameOfLife';

describe('GameOfLife Component', () => {
  test('renders without errors', () => {
    render(<GameOfLife />);
  });


//Check toggling of cell

  test('toggles cell on click', () => {
    render(<GameOfLife />);
    const cell = screen.getByTestId('cell-0-0'); 
    fireEvent.click(cell);
    expect(cell).toHaveStyle('background-color: green'); 
  });


//To check start and stop button

  test('starts and stops the simulation', async () => {
    render(<GameOfLife />);
    const startButton = screen.getByRole('button', { name: /start/i });
    const stopButton = screen.getByRole('button', { name: /stop/i });

    fireEvent.click(startButton);
    await waitFor(() => {
    });

    fireEvent.click(stopButton);
    await waitFor(() => {

    });
  });

  

  
});















