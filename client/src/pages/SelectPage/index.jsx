import { BeginGame, BreakDurationForm } from "../../components";

const index = (breakLength, setBreakLength) => {


  return (
    <>
      <h1>Select Page</h1>
      <BreakDurationForm breakLength={breakLength} setBreakLength={setBreakLength} />
      <BeginGame breakLength={breakLength} setBreakLength={setBreakLength}/>
    </>
  )
    
};
export default index;
