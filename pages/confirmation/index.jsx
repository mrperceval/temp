import Layout from "@/components/Layout";
import Logo from "@/components/Logo";

export default function Confirmation() {
  return (
    <>
      <Layout config={2}>
        <div className="flex flex-col justify-center items-center text-center">
          <Logo />
          <div className="text-2xl font-bold mb-2 mt-4">
            Please confirm{" "}
            <span className="whitespace-nowrap">your subscription</span>
          </div>
          <div>
            We have sent you an email with a confirmation link. Please click on
            the link to confirm{" "}
            <span className="whitespace-nowrap">your subscription.</span>
          </div>
        </div>
      </Layout>
    </>
  );
}
