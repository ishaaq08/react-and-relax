import React, { useState } from 'react';
import { SignUpForm } from '../../components';
import background from '../../assets/background5.svg';

export default function index() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const bgStyles = {
    backgroundImage: `url(${background})`, // Use the 'url' function to specify the image path // Adjust to your preference
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Adjust to your preference
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the desired height of your hero section
  };

  return (
    <div style={bgStyles}>
      <SignUpForm
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
}
