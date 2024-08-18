import React, { createContext, useContext, ReactNode, useState } from 'react';

interface LocaleContextType {
  locale: 'en' | 'tr' ;
  setLocale: (locale: 'en' | 'tr') => void;
}
const defaultLocaleContext: LocaleContextType = {
  locale: 'tr',
  setLocale: () => {} 
};
const LocaleContext = createContext<LocaleContextType>(defaultLocaleContext);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<'en' | 'tr'>('tr'); 


  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext)