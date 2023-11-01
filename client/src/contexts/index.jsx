import { useState, useContext, createContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [breakLength, setBreakLength] = useState(0.1*100); // change back to useState(0)
  const [questions, setQuestions] = useState([]);
  const [beginGameError, setBeginGameError] = useState(undefined);
  const [howTo, setHowTo] = useState(undefined);
  const [session, setSession] = useState(1)

  return (
    <DataContext.Provider
      value={{
        howTo,
        setHowTo,
        breakLength,
        setBreakLength,
        beginGameError,
        setBeginGameError,
        questions,
        setQuestions,
        session, 
        setSession
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
