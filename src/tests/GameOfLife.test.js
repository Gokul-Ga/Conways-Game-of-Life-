import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import GameOfLife from '../components/GameOfLife';

describe('Conway\'s Game of Life', () => {



  // Test to check if the Game renders
  test('Renders the Game', () => {
    // Render the GameOfLife component
    render(<GameOfLife />);
  });




  // Test to check if cell toggling works
  test('Cell Toggling Check', () => {
    // Render the GameOfLife component
    render(<GameOfLife />);

    // Get the cell at position (0, 0)
    const cell = screen.getByTestId('cell-0-0');

    // Click on the cell to toggle its state
    fireEvent.click(cell);

    // Ensure that the cell is now alive (green)
    expect(cell).toHaveStyle('background-color: green');
  });









  // Test to check if resetting the game works

  test('Reset the Game', () => {
    render(<GameOfLife />);

    // Get the cell at position (0, 0)
    const cell = screen.getByTestId('cell-0-0');

    // Click on the cell to make it alive
    fireEvent.click(cell);

    // Ensure that the cell is now alive (green)
    expect(cell).toHaveStyle('background-color: green');

    // Get the "Reset" button
    const resetButton = screen.getByText('Reset');

    // Click on the "Reset" button to reset the game
    fireEvent.click(resetButton);

    // Ensure that the cell is now dead (white) after resetting
    expect(cell).toHaveStyle('background-color: white');
  });








  // Test to check the Underpopulation rule
  test('Underpopulation Rule Check', async () => {
    render(<GameOfLife />);

    // Get the cell at position (0, 0)
    const cell = screen.getByTestId('cell-0-0');

    // Click on the cell to make it alive
    fireEvent.click(cell);

    // Ensure that the cell is now alive (green)
    expect(cell).toHaveStyle('background-color: green');

    // Get the "Start" button
    const startButton = screen.getByText('Start');

    // Click on the "Start" button to initiate the game
    fireEvent.click(startButton);

    // Wait for the game to update 
    await waitFor(() => {
      // Ensure that the cell dies due to underpopulation and becomes dead (white)
      expect(cell).toHaveStyle('background-color: white');
    });
  });










  // Test to check the Survival rule

  test('Survival Rule Check', async () => {
    render(<GameOfLife />);

    // Get the cell at position (0, 0)
    const cell = screen.getByTestId('cell-0-0');

    // Click on the cell to make it alive
    fireEvent.click(cell);

    // Ensure that the cell is now alive (green)
    expect(cell).toHaveStyle('background-color: green');

    // Get a neighbor cell at position (0, 1)
    const neighborCell = screen.getByTestId('cell-0-1');

    // Click on the neighbor cell to make it alive
    fireEvent.click(neighborCell);

    // Ensure that the neighbor cell is now alive (green)
    expect(neighborCell).toHaveStyle('background-color: green');

    // Get the "Start" button
    const startButton = screen.getByText('Start');

    // Click on the "Start" button to initiate the game
    fireEvent.click(startButton);

    await waitFor(() => {
      // Ensure that the original cell survives and remains green
      expect(cell).toHaveStyle('background-color: green');

      // Ensure that the neighbor cell survives and remains green
      expect(neighborCell).toHaveStyle('background-color: green');
    });
  });









  // Test to check the Overcrowding rule

  test('Overcrowding Rule Check', async () => {
    render(<GameOfLife />);

    // Get the cell at position (0, 0)
    const cell = screen.getByTestId('cell-0-0');

    // Click on the cell to make it alive
    fireEvent.click(cell);

    // Get the "Start" button
    const evolveButton = screen.getByText('Start');

    // Click on the "Start" button to initiate the game
    fireEvent.click(evolveButton);

    await waitFor(() => {
      // Evolve the grid to trigger overcrowding
      fireEvent.click(evolveButton);
    });

    await waitFor(() => {
      // Ensure that the cell dies due to overcrowding and becomes dead (white)
      expect(cell).toHaveStyle('background-color: white');
    });
  });








  // Test to check the evolution/reproduction rule

  test('Evolution/Reproduction Rule Check', async () => {
    render(<GameOfLife />);

    // Get a dead cell at position (0, 0)
    const deadCell = screen.getByTestId('cell-0-0');

    // Get three live neighbor cells to trigger reproduction
    const neighborCell1 = screen.getByTestId('cell-0-1');
    const neighborCell2 = screen.getByTestId('cell-1-0');
    const neighborCell3 = screen.getByTestId('cell-1-1');

    // Click on the neighbor cells to make them alive
    fireEvent.click(neighborCell1);
    fireEvent.click(neighborCell2);
    fireEvent.click(neighborCell3);

    // Get the "Start" button
    const startButton = screen.getByText('Start');

    // Click on the "Start" button to initiate the game
    fireEvent.click(startButton);

    // Wait for the game to update 
    await waitFor(() => {
      // Ensure that the dead cell becomes alive due to reproduction and turns green
      expect(deadCell).toHaveStyle('background-color: green');
    });
  });
});























