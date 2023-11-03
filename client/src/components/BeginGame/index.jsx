import { useNavigate } from 'react-router-dom';
import { useData } from '../../contexts';

export default function index() {
  const { breakLength, beginGameError, setBeginGameError, howTo } = useData();
  const navigate = useNavigate();
  const navigationCondition = breakLength;

  function handleClick(e) {
    e.preventDefault();
  
    // Break length is mandatory. Difficulty is optional
    if (navigationCondition && howTo == 1) {
      navigate('/games/game1');
    } else if (navigationCondition && howTo == 2) {
      navigate('/games/game2');
    } else {
      setBeginGameError('Please select whether you want a short or long break');
    }
  }

  return (
    <div className="w-full text-center p-5 bg-transparent">
      <div className="max-w-[500px] mx-auto">
        <button
          onClick={handleClick}
          className="w-6/12 mt-10 font-semibold text-white  bg-[#00B4D8] py-4 px-4 rounded-lg"
        >
          Begin Game
        </button>
        <p className="text-red-600 mt-12 text-2xl font-semibold">
          {beginGameError}
        </p>
      </div>
    </div>
  );
}
