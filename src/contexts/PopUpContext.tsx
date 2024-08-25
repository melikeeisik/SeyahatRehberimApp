"use client"
import React, { useState, createContext, useContext, ReactNode } from 'react';

interface PopUpPropsType {
  children: ReactNode;
}

interface PopUpContextType {
  showPopUp: boolean,
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>,
  popUpType : string,
  setPopUpType:React.Dispatch<React.SetStateAction<string>>,
};

const PopUpContext = createContext<PopUpContextType>({showPopUp:false, setShowPopUp: () => {},popUpType:"", setPopUpType:() => {}});

export const PopUpProvider: React.FC<PopUpPropsType> = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<string>("");

  return (
    <PopUpContext.Provider value={{ showPopUp, setShowPopUp,popUpType,setPopUpType }}>
        {children}
    </PopUpContext.Provider>
  );
};

export const usePopUp = () => useContext(PopUpContext)