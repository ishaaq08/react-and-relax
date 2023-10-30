import React, { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(undefined);
    const [beginGameError, setBeginGameError] = useState(undefined)
    const [time, setTime] = useState(25*60)

    return (
        <DataContext.Provider value={{ breakLength, setBreakLength, beginGameError, setBeginGameError,
        time,
        setTime }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);