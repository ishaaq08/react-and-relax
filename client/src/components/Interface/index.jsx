import { Link } from 'react-router-dom';
export const Button1 = ({ text }) => {
  return (
    <button className="mr-auto bg-purple-800 py-4 px-4 rounded-lg w-3/12">
      {text}
    </button>
  );
};
