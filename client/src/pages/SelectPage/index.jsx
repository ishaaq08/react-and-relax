import { BeginGame, BreakDurationForm, SelectGrid } from '../../components';

const index = (breakLength, setBreakLength) => {
  return (
    <>
      {/* <h1 className="text-5xl text-center font-semibold uppercase tracking-widest">
        Select A Game
      </h1> */}
      <SelectGrid />
      {/* <BreakDurationForm
        breakLength={breakLength}
        setBreakLength={setBreakLength}
      /> */}
      {/* <BeginGame breakLength={breakLength} setBreakLength={setBreakLength} /> */}
    </>
  );
};
export default index;
