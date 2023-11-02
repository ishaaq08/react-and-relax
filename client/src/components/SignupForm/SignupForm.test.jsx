import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import SignUpForm from '.'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('SignUpForm', () => {
  beforeEach(() => {
    render(
      <SignUpForm
        userName=""
        setUserName={() => {}}
        email=""
        setEmail={() => {}}
        password=""
        setPassword={() => {}}
        confirmPassword=""
        setConfirmPassword={() => {}}
        errorMessage=""
        setErrorMessage={() => {}}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('Displays the email input field', () => {
    const emailInput = screen.getByText('Email address');
    expect(emailInput).toBeInTheDocument();
  });

  it('Displays the username input field', () => {
    const usernameInput = screen.getByText('Username');
    expect(usernameInput).toBeInTheDocument();
  });

  it('Displays the password input field', () => {
    const passwordInput = screen.getByText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('Displays the confirm password input field', () => {
    const confirmPasswordInput = screen.getByText('Confirm Password');
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it('Displays the heading "Sign Up" ', () => {
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
    expect(h2.textContent).toBe('Sign Up');
  });

  it('Does not display an error message initially', () => {
    const errorMessage = screen.queryByText('Passwords do not match');
    expect(errorMessage).not.toBeInTheDocument();
  });
    


it('Displays the "Sign Up" button', () => {
  const signUpButton = screen.getByRole('button', { name: 'Sign Up' });
  expect(signUpButton).toBeInTheDocument();
});

it('Does not display an error message initially', () => {
  const errorMessage = screen.queryByText('Passwords do not match');
  expect(errorMessage).not.toBeInTheDocument();
});

it('Displays the "Not a member?" text', () => {
  const notAMemberText = screen.getByText('Not a member?');
  expect(notAMemberText).toBeInTheDocument();
});

it('Displays the "Start a 14 day free trial" link', () => {
  const trialLink = screen.getByText('Start a 14 day free trial');
  expect(trialLink).toBeInTheDocument();
});

    });
