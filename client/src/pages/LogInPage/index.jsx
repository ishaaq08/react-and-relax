import { Login } from '../../components';
import background from '../../assets/background5.svg';

export default function index() {
  const bgStyles = {
    backgroundImage: `url(${background})`, // Use the 'url' function to specify the image path // Adjust to your preference
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Adjust to your preference
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Set the desired height of your hero section
  };
  return (
    <div
      style={bgStyles}
      className=""
    >
      <Login />
    </div>
  );
}
