'use client'
import Header from "../components/Header";
import { IntlManager } from "../contexts/IntlManager"

export default function Home() {
  return (
    <IntlManager>
      <Header/>
    </IntlManager>
  );
}
