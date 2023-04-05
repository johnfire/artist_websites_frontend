import React, { ReactComponentElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* @ts-ignore */ // ReactFC cannot have child compponents in typescript, its a react 18 bug.....
const Layout: React.FC = ({ children }: React.ReactElement) => {
  console.log("layout 5");
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
