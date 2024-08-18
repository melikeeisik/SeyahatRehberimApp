'use client'
import Header from "../components/Header";
import { IntlManager } from "../contexts/IntlManager"
import { LocaleProvider, useLocale } from "../contexts/LocaleContext";
export default function Home() {
  // LocaleContext'ten locale değerini alın
  const { locale } = useLocale();
  return (
    <LocaleProvider>
      <IntlManager locale={locale}>
        <Header />
      </IntlManager>
    </LocaleProvider>
  );
}
