import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts';

export default function index() {
  const { breakLength, beginGameError, setBeginGameError } = useData();
  const navigate = useNavigate();
  const navigationCondition = breakLength;

  function handleClick(e) {
    e.preventDefault();

    if (navigationCondition) {
      navigate('/games/game1');
    } else {
      setBeginGameError('Please select whether you want a short or long break');
    }
  }

  return (
    <div className="w-full text-center p-5 bg-[#023E8A]">
      <div>
        <button
          onClick={handleClick}
          className="w-6/12 font-semibold text-white mt-5 bg-[#00B4D8] py-4 px-4 rounded-lg "
        >
          Begin Game
        </button>
        <p>{beginGameError}</p>
      </div>
    </div>
  );
}
