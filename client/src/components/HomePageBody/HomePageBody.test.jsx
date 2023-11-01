// import React from 'react';
// import { render, screen, cleanup } from '@testing-library/react';
// import HomePageBody from '.';
// import { BrowserRouter } from 'react-router-dom';
// import { describe, it, expect, beforeEach, afterEach } from 'vitest';
// import * as matchers from '@testing-library/jest-dom/matchers';
// expect.extend(matchers);

// describe('HomePageBody', () => {
//   beforeEach(() => {
//     render(
//       <BrowserRouter>
//         <HomePageBody />
//       </BrowserRouter>
//     );
//   });

//     afterEach(() => {
//     cleanup();
//   });

//   it('renders without errors', () => {
//     const heroSection = screen.getByTestId('hero-section');
//     expect(heroSection).toBeInTheDocument();
//   });

//   it('has a "Signup Now" button', () => {
//     const signupButton = screen.getByText('Signup Now');
//     expect(signupButton).toBeInTheDocument();
//   });

//   it('has a "Play Now" button for "Fill in the Blanks"', () => {
//     const playNowButton = screen.getByText('Play Now', { selector: 'a[href="/games"]' });
//     expect(playNowButton).toBeInTheDocument();
//   });

//   it('has a "Play Now" button for "PseudoCode"', () => {
//     const playNowButton = screen.getByText('Play Now', { selector: 'a[href="/games"]' });
//     expect(playNowButton).toBeInTheDocument();
//   });

//   it('has a "Get Started" button for "Create Magic Notes"', () => {
//     const getStartedButton = screen.getByText('Get Started', { selector: 'a[href="/games"]' });
//     expect(getStartedButton).toBeInTheDocument();
//   });

//   it('displays the hero section background image', () => {
//     const bgImage = screen.getByTestId('hero-background-image');
//     expect(bgImage).toBeInTheDocument();
//   });

//   it('displays the "Experience a new era of AI-enhanced learning" heading', () => {
//     const heading = screen.getByText('Experience a new era of AI-enhanced learning');
//     expect(heading).toBeInTheDocument();
//   });

//   it('displays the "Ace your classes with our new suite of study tools" heading', () => {
//     const heading = screen.getByText('Ace your classes with our new suite of study tools');
//     expect(heading).toBeInTheDocument();
//   });

//   it('displays "Fill in the Blanks" section', () => {
//     const fillInTheBlanksSection = screen.getByText('Fill in the Blanks');
//     expect(fillInTheBlanksSection).toBeInTheDocument();
//   });

//   it('displays "PseudoCode" section', () => {
//     const pseudoCodeSection = screen.getByText('PseudoCode');
//     expect(pseudoCodeSection).toBeInTheDocument();
//   });

//   it('displays "Create Magic Notes" section', () => {
//     const createMagicNotesSection = screen.getByText('Create Magic Notes');
//     expect(createMagicNotesSection).toBeInTheDocument();
//   });
// });