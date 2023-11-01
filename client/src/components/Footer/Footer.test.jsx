import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import 'intersection-observer';

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
// screen is like virtual document so you can get something from the DOM i.e. button via classname
// Render allows you to render component on the sceen

// Code that allows us to test document specific behaviour i.e. presence within the document (is the component on the page or not)
// matchers allow us to test presence within the document
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Footer from '.';

describe('Footer', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Displays the footer with the correct number of child elements', () => {
    const footer = screen.getByRole('footer');
    expect(footer).toBeInTheDocument();
    expect(footer.children.length).toBe(2);
  });

  it('render the help & faq link and directs us to the home page', async () => {
    const helpLink = screen.getByRole('link', { name: 'Help & FAQ' });
    expect(helpLink).toBeInTheDocument();

    await userEvent.click(helpLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });

  it('render the Privacy Policy link and directs us to the home page', async () => {
    const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' });
    expect(privacyLink).toBeInTheDocument();

    await userEvent.click(privacyLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });

  it('render the Terms & Conditions link and directs us to the home page', async () => {
    const termsLink = screen.getByRole('link', { name: 'Terms & Conditions' });
    expect(termsLink).toBeInTheDocument();

    await userEvent.click(termsLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });

  it('render the Cookie Policy link and directs us to the home page', async () => {
    const cookieLink = screen.getByRole('link', { name: 'Cookie Policy' });
    expect(cookieLink).toBeInTheDocument();

    await userEvent.click(cookieLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });

  it('render the Facebook link and directs us to the home page', async () => {
    const facebookLink = screen.getByRole('link', { name: 'Facebook' });
    expect(facebookLink).toBeInTheDocument();

    await userEvent.click(facebookLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });
  it('render the Twitter link and directs us to the home page', async () => {
    const twitterLink = screen.getByRole('link', { name: 'Twitter' });
    expect(twitterLink).toBeInTheDocument();

    await userEvent.click(twitterLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });
  it('render the Instagram link and directs us to the home page', async () => {
    const instagramLink = screen.getByRole('link', { name: 'Instagram' });
    expect(instagramLink).toBeInTheDocument();

    await userEvent.click(instagramLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });
  it('render the Tiktok link and directs us to the home page', async () => {
    const tiktokLink = screen.getByRole('link', { name: 'Tiktok' });
    expect(tiktokLink).toBeInTheDocument();

    await userEvent.click(tiktokLink);
    expect(window.location.href).toEqual('http://localhost:3000/');
  });
});
