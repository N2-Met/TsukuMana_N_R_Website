import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Layout from "components/layout";
import Script from "next/script";
import * as gtag from "lib/gtag";

//Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRoutChange = (url) => {
      gtag.pageview;
    };
    router.events.on("routeChangeComplete", handleRoutChange);
    return () => {
      router.events.off("routeChangeComplete", handleRoutChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        damgerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_MEASUREMENT_ID}'), `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

/*
デフォルト
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
*/
