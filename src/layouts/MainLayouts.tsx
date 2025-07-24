import type { ReactNode } from "react";
import "../App.css";
import Navbar from "@/web_components/Navbar";
import Footer from "@/web_components/Footer";

type MainLayoutsProps = {
  children: ReactNode;
};

const MainLayouts = ({ children }: MainLayoutsProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayouts;
