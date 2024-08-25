"use client"
import React, { useState, createContext, useContext, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '@/utils/locales/en.json';
import trMessages from '@/utils/locales/tr.json';

interface IntlProviderWrapperProps {
  children: ReactNode;
}

const messages = {
  en: enMessages,
  tr: trMessages,
};

const IntlContext = createContext<{ locale: 'en' | 'tr'; setLocale: React.Dispatch<React.SetStateAction<'en' | 'tr'>> } >({ locale: 'tr' ,setLocale: () => {}  });


export const IntlProviderWrapper: React.FC<IntlProviderWrapperProps> = ({ children }) => {
  const [locale, setLocale] = useState<'en' | 'tr'>('en');

  return (
    <IntlContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
};

export const useLocale = () => useContext(IntlContext)