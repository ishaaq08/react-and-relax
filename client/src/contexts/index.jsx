import React, { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [breakLength, setBreakLength] = useState(undefined);
    const [beginGameError, setBeginGameError] = useState(undefined)

    return (
        <DataContext.Provider value={{ breakLength, setBreakLength, beginGameError, setBeginGameError }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);