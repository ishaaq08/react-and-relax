import { useState, useContext, createContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [breakLength, setBreakLength] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [beginGameError, setBeginGameError] = useState(undefined);
  const [howTo, setHowTo] = useState(undefined);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
