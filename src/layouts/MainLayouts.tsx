import type { ReactNode } from "react";
import "../App.css";
import Navbar from "@/web_components/Navbar";
import Footer from "@/web_components/Footer";
import { Toaster } from "@/components/ui/sonner";

type MainLayoutsProps = {
  children: ReactNode;
};

const MainLayouts = ({ children }: MainLayoutsProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            description: "text-black",
            title: "text-black",
          },
        }}
      />
      <Footer />
    </>
  );
};

export default MainLayouts;
