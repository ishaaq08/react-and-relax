import { useEffect } from 'react';
import { BeginGame, BreakDurationForm, HowToPlay } from '../../components';
import { useData } from '../../contexts';
import background3 from '../../assets/background3.svg';

const bgStyles = {
  backgroundImage: `url(${background3})`, // Use the 'url' function to specify the image path // Adjust to your preference
  backgroundSize: '',
  backgroundPosition: 'center', // Adjust to your preference
  // backgroundRepeat: 'no-repeat',
  height: '100vh',
  // Set the desired height of your hero section
};

const overlayStyles = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.8)', // Adjust the alpha value (0.4) to control darkness
};

const index = () => {
  const { setSession } = useData();
  useEffect(() => {
    setSession(1);
  }, []);

  return (
    <div style={bgStyles} className="bg-[#023E8A] h-screen">
      <div style={overlayStyles}>
        <HowToPlay />
        <BreakDurationForm />
        <BeginGame />
      </div>
    </div>
  );
};
export default index;
