import Image from "next/image";
7;

export default function Logo() {
  return (
    <>
      <Image
        src="/abgt600_text_logo.svg"
        width={842}
        height={162}
        alt="ABGT600"
        className="w-full max-w-xs mx-auto"
        priority
      />
    </>
  );
}
