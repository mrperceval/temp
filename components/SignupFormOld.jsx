import { useEffect } from "react";
import Script from "next/script";

export default function SignupForm({ header }) {
  return (
    <div id="signupForm">
      {!!header && <div className="text-2xl">{header}</div>}
      <div className={"_form_124"}></div>

      <Script
        src="https://anjuna.activehosted.com/f/embed.php?id=124"
        charset="utf-8"
      />
    </div>
  );
}
