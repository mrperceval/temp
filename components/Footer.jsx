import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-sm text-slate-500 text-center p-2 [&>a]:underline [&>a:hover]:text-slate-400">
      <Link href="https://anjunabeats.com/privacy-policy/">Privacy Policy</Link>
      {" | "}
      <Link href="https://anjunabeats.com/terms-and-conditions/">
        Terms & Conditions
      </Link>
    </footer>
  );
}
