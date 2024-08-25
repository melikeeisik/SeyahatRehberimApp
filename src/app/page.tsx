'use client'
import Search from "../components/Search";
import Header from "../components/Header";
import { IntlProviderWrapper } from "../contexts/IntlContext"
import { PopUpProvider } from "@/contexts/PopUpContext";
import PopUp from "@/components/PopUp";
export default function Home() {
  return (
    <IntlProviderWrapper>
      <PopUpProvider>
        <PopUp/>
        <Header />
        <Search/>
      </PopUpProvider>
    </IntlProviderWrapper>
  );
}
