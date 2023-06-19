"use client";
import { createContext } from "react";
import { dummyData } from "../clientData/dummyData";
export const TableContext = createContext();
export const TableContextProvider = ({ children }) => {
  // data sending

  const data = dummyData;
  // random key generator
  let randomKey = Math.round(Math.random() * 100);
  // console.log(randomKey);
  // sorting

  return (
    <TableContext.Provider value={{ data, randomKey }}>
      {children}
    </TableContext.Provider>
  );
};
