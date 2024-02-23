import "@/styles/globals.css";
import { useState } from 'react'
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieConsent, getCookieConsentValue } from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  const [accepted, setAccepted] = useState(false);
  
  const onAccept = () => {
    setAccepted(true);
    if (window.dataLayer) {
      console.log("Accepted sent");
      window.dataLayer.push({ event: "gtm.init_consent" });
    } else {
      console.log("Accepted not sent");
    }
  };

  return (
    <>
      <Head>
        <title>ABGT600</title>
        <meta name="description" content="ABGT600" key="desc" />
      </Head>
      <Component {...pageProps} />

      <CookieConsent
        onAccept={onAccept}
        buttonText="Accept"
        cookieName="abgt600_cookie_consent"
        expires={150}
      >
        This website used cookies to enhance the user experience.
      </CookieConsent>
      {accepted && <GoogleTagManager gtmId="GTM-PRQ9CM" />}
    </>
  );
}
