import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Index from '.'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('Index', () => {
  beforeEach(() => {
    render(<Index />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Displays the game image', () => {
    const gameImage = screen.getByAltText('game1.png'); // Adjust alt text accordingly
    expect(gameImage).toBeInTheDocument();
  });

  it('Displays the "Ready to Play?" text', () => {
    const readyToPlayText = screen.getByText('Ready to Play?');
    expect(readyToPlayText).toBeInTheDocument();
  });

  it('Displays the description text', () => {
    const descriptionText = screen.getByText(
      'Play the computer science fill-in-the-blank game by filling in missing code or concepts in sentences to test and enhance your programming knowledge.'
    ); // Adjust the text content accordingly
    expect(descriptionText).toBeInTheDocument();
  });

  it('Displays the "Start game" button', () => {
    const startGameButton = screen.getByText('Start game');
    expect(startGameButton).toBeInTheDocument();
  });
});
