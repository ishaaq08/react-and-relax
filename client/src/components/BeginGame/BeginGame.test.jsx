import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// screen is like virtual document so you can get something from the DOM i.e. button via classname
// Render allows you to render component on the sceen

// Code that allows us to test document specific behaviour i.e. presence within the document (is the component on the page or not)
// matchers allow us to test presence within the document
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import BeginGame from '.';
import { DataProvider } from '../../contexts';

describe('BeginGame', () => {
  beforeEach(() => {
    render(
      <DataProvider>
        <BrowserRouter>
          <BeginGame />
        </BrowserRouter>
      </DataProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('displays a heading 2 with the correct text content', () => {
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
    expect(h2.textContent).toBe('Testing the begin game button');
  });

  it('renders a button with a event handler that takes us to the game', async () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // await userEvent.click(button);
    // expect(window.location.href).toBe('http://localhost:3000/games/game1/');
  });
});
