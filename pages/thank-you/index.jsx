import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function ThankYou() {
  return (
    <>
      <Layout config={2}>
        <div className="flex flex-col justify-center items-center text-center">
          <Logo />
          <div className="text-2xl font-bold mb-2 mt-4">
            Thanks <span className="whitespace-nowrap">for subscribing!</span>
          </div>
          <div>
            Stay tuned for updates{" "}
            <span className="whitespace-nowrap">on ABGT600.</span>
          </div>
        </div>
      </Layout>
    </>
  );
}
