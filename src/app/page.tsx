'use client'
import Header from "../components/Header";
import { IntlProviderWrapper } from "../contexts/IntlContext"
export default function Home() {
  return (
    <IntlProviderWrapper>
        <Header />
    </IntlProviderWrapper>
  );
}
