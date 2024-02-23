import { useEffect } from "react";
import styles from "@/styles/ActiveCampaignForm.module.css";

export default function ActiveCampaignForm({ id }) {
  useEffect(() => {
    let timeoutID;

    const scriptId = `_form_${id}_script`;

    if (!document.getElementById(scriptId)) {
      timeoutID = setTimeout(() => {
        const script = document.createElement("script");

        script.id = scriptId;
        script.src = `https://${process.env.NEXT_PUBLIC_ACTIVE_CAMPAIGN_ACCOUNT_NAME}.activehosted.com/f/embed.php?id=${id}&nostyles=1`;
        script.async = true;

        document.body.appendChild(script);
      }, 100);
    }

    return () => {
      clearTimeout(timeoutID);
      document.getElementById(scriptId)?.remove();
    };
  }, [id]);

  return <div className={`_form_${id} ${styles.ActiveCampaignForm}`}></div>;
}
