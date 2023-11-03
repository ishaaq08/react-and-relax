import { useEffect } from 'react';
import { BeginGame, BreakDurationForm, HowToPlay } from '../../components';
import { useData } from '../../contexts';
import background3 from '../../assets/background3.svg';
import { useLocation } from 'react-router-dom';

const bgStyles = {
  backgroundImage: `url(${background3})`,
  backgroundSize: '',
  backgroundPosition: 'center',
  height: '100vh',
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
  const { setSession, setBeginGameError, howTo, setHowTo } = useData();
  const location = useLocation();

  if (howTo == undefined) {
    if (location.pathname == '/games/how-to-play/fill-in-the-blanks') {
      setHowTo(1);
    } else {
      setHowTo(2);
    }
  }

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
