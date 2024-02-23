import "@/styles/globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { CookieConsent, getCookieConsentValue } from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  const handleAccept = () => {
    if (window.dataLayer) {
      console.log("Accepted sent");
      window.dataLayer.push({ event: "gtm.init_consen" });
    } else {
      console.log("Accepted not sent");
    }
  };
  const consent = () => {
    if (getCookieConsentValue({ cookieName: "abgt600_cookie_consent" })) {
      console.log("Consent given");
      return true;
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
        onAccept={handleAccept}
        buttonText="Accept"
        cookieName="abgt600_cookie_consent"
        expires={150}
      >
        This website used cookies to enhance the user experience.
      </CookieConsent>
      {consent && <GoogleTagManager gtmId="GTM-PRQ9CM" />}
    </>
  );
}
