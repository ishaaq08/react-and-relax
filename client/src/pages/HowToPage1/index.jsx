import { useEffect } from 'react';
import { BeginGame, BreakDurationForm, HowToPlay } from '../../components';
import { useData } from '../../contexts';

const index = () => {

  const { setSession } = useData()
  useEffect(() => {
    setSession(1)
  },[])

  return (
    <div className="bg-[#023E8A] h-screen">
      <HowToPlay />
      <BreakDurationForm />
      <BeginGame />
    </div>
  );
};
export default index;
