import { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import en_Us from '../utils/locales/en.json';
import tr_TR from '../utils/locales/tr.json';

const messages: Record<string, Record<string, string>> = {
  en: en_Us,
  tr: tr_TR,
};

interface IntlManagerProps {
  children: ReactNode;
  locale?: 'en' | 'tr';  
}

export function IntlManager({ children, locale = 'tr' }: IntlManagerProps) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
