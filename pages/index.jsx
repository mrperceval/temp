import Script from "next/script";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import Logo from "@/components/Logo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Button from "@/components/Button";
import ActiveCampaignForm from "@/components/AcForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>ABGT600</title>
        <meta
          name="description"
          content="Above & Beyond presents Group Therapy 600"
          key="desc"
        />
        <meta
          property="og:title"
          content="Above & Beyond presents Group Therapy 600"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Sign up for updates on ABGT600."
          key="og-description"
        />
        <meta property="og:url" content="website" key="og-url" />
        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="og:image"
          content="https://www.abgt600.live/og-image.png"
          key="og-image"
        />
        <meta
          property="og:image:alt"
          content="The ABGT600 logo on a black background"
          key="og-image-alt"
        />
        <meta
          property="og:image:type"
          content="image/png"
          key="og-image-type"
        />
        <meta property="og:image:width" content="1200" key="og-image-w" />
        <meta property="og:image:height" content="630" key="og-image-h" />
        <meta property="og:locale" content="en_GB" key="og-locale" />
      </Head>
      <Layout config={1}>
        <Logo />
        <div className="mt-6 max-w-2xl mx-auto ">
          <div className="text-xl font-bold text-center text-white my-2">
            Subscribe for updates
          </div>
          <ActiveCampaignForm id={"124"} />
        </div>
      </Layout>
    </>
  );
}
