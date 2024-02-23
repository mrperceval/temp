import { useEffect } from "react";
export default function Consent() {
  const handleAccept = () => {
    console.log("Accepted");
    document.cookie =
      "bgt600=accepted;expires=01 Jan 2025 00:00:00 UTC;path=/;SameSite=None;";
  };

  useEffect(() => {
    const cookieConsent = document.cookie.includes("CookieConsent");
    if (cookieConsent) {
      console.log("Cookie Consent is already accepted");
    } else {
      console.log("Cookie Consent is not accepted");
    }
  }, []);
  useEffect(() => {
    const cookieConsent = document.cookie.includes("CookieConsent");
    if (cookieConsent) {
      console.log("Cookie Consent is already accepted");
    } else {
      console.log("Cookie Consent is not accepted");
    }
  }, [handleAccept]);

  return (
    <div>
      <button className="bg-red-500" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
}
