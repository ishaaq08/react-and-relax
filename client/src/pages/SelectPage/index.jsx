import { BeginGame, BreakDurationForm, Timer } from "../../components";

const index = (breakLength, setBreakLength) => {


  return (
    <>
      <h1>Select Page</h1>
      <BreakDurationForm breakLength={breakLength} setBreakLength={setBreakLength} />
      <BeginGame breakLength={breakLength} setBreakLength={setBreakLength}/>
      <Timer />
    </>
  )
    
};
export default index;
