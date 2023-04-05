import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      {/* @ts-ignore */}
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </NextIntlProvider>
  );
}

export default App;
