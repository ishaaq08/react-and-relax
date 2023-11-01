import { BeginGame, BreakDurationForm, HowToPlay } from '../../components';

const index = () => {
  return (
    <div className="bg-[#023E8A] h-screen">
      <HowToPlay />
      <BreakDurationForm />
      <BeginGame />
    </div>
  );
};
export default index;
