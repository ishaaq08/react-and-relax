import { useEffect } from 'react';
import { BeginGame, BreakDurationForm, HowToPlay } from '../../components';
import { useData } from '../../contexts';
import background5 from '../../assets/background5.svg';

const bgStyles = {
  backgroundImage: `url(${background5})`, // Use the 'url' function to specify the image path // Adjust to your preference
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Adjust to your preference
  // backgroundRepeat: 'no-repeat',
  height: '100vh',
  // Set the desired height of your hero section
};

const index = () => {
  const { setSession } = useData();
  useEffect(() => {
    setSession(1);
  }, []);

  return (
    <div className="bg-[#023E8A] h-screen">
      <HowToPlay />
      <BreakDurationForm />
      <BeginGame />
    </div>
  );
};
export default index;
