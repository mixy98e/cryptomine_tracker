import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = [
  { name: "hour", rev: 10, cost: 1, profit: 9 },
  { name: "month", rev: 100, cost: 10, profit: 90 },
  { name: "custom", rev: 100, cost: 10, profit: 90 },
];

export const MineCalculatorContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [profitTable, dispatch] = useReducer(contextReducer, initialState);

  const getPTData = (data) => {
    dispatch({ type: "GET_PT_DATA", payload: data });
  };

  return (
    <MineCalculatorContext.Provider
      value={{
        profitTable,
        getPTData,
      }}
    >
      {children}
    </MineCalculatorContext.Provider>
  );
};
