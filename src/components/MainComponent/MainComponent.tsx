import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainComponent = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mainComponent">{children}</div>
      <Footer />
    </>
  );
};

export default MainComponent;
