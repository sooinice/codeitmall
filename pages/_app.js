import "@/styles/global.css";

import Container from "@/components/Container";
import Head from "next/head";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
//next 페이지 프롭
