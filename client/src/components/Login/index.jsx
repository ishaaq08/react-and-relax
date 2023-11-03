import { useState } from 'react';
import { useData } from '../../contexts';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const Navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setToken } = useData();
  const { setUsername } = useData();

  function handleUsernameChange(event) {
    setUserName(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://react-and-relax.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setToken(data.token);
          setUsername(userName);

          Navigate('/profile');
        }
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-screen items-center text-white flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
        <div className="flex justify-center flex-col w-[20vw] items-center h-full  bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 "
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleUsernameChange}
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md pl-2 text-black border-0 py-1.5  shadow-sm ring-1 ring-inset ring-[#023E8A] placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 "
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-white hover:text-[#48CAE4]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={handlePasswordChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm ring-1 ring-inset ring-[#023E8A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#023E8A] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#023d8a] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#48CAE4] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-[#48CAE4] pb-5">
              Not a member?{' '}
              <a
                href="#"
                className="font-semibold leading-6 ml-2 text-white hover:text-[#48CAE4]"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default index;
