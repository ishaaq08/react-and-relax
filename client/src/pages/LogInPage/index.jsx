import { Login } from '../../components';
import background from '../../assets/background5.svg';

export default function index() {
  const bgStyles = {
    backgroundImage: `url(${background})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
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
