function SignUpForm({
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errorMessage,
  setErrorMessage,
}) {
  function handleUsernameChange(event) {
    setUserName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
    }
  }
  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://react-and-relax.onrender.com/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          window.location.href = '/login';
        }
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }

  return (
    <form>
      <div>
        <label>Email address</label>
        <input
          onChange={handleEmailChange}
          type="email"
          className="form-control"
          id="email-input"
          placeholder="Email"
        />
      </div>
      <div>
        <label>Username</label>
        <input
          onChange={handleUsernameChange}
          type="username"
          className="form-control"
          id="username-input"
          placeholder="Username"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          onChange={handlePasswordChange}
          type="password"
          className="form-control"
          id="password-input"
          placeholder="Password"
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          onChange={handleConfirmPasswordChange}
          type="confirm-password"
          className="form-control"
          id="confirm-password-input"
          placeholder="Password"
        />
      </div>
      {errorMessage === '' ? (
        <button type="submit" onSubmit={handleSubmit}>
          Sign Up
        </button>
      ) : (
        errorMessage
      )}
    </form>
  );
}

export default SignUpForm;
