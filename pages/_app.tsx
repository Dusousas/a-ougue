import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/subc/Whatsapp";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
