import { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(0);
    const [beginGameError, setBeginGameError] = useState(undefined)
    // const [time, setTime] = useState(25*60)
    const [questions, setQuestions] = useState([])

    return (
        <DataContext.Provider value={{ 
            breakLength, setBreakLength, beginGameError, setBeginGameError,questions, setQuestions }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);