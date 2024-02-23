import cn from "classnames";
import Footer from "./Footer";

export default function Layout({ path, config, children }) {
  return (
    <>
      <main
        className={cn("container mx-auto px-4 h-full", {
          "flex flex-col justify-center": config == 1,
          "flex flex-col justify-center max-w-md": config == 2,
        })}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
