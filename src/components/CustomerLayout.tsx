import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type layoutProps = {
  children: ReactNode;
};

/* @ts-ignore */ // ReactFC cannot have child compponents in typescript, its a react 18 bug.....
const CustomerLayout = ({ children }: layoutProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  console.log("layout 5");
  return (
    <div className="content">
      <Navbar
        createAccountVisible={isVisible}
        setCreateAccountVisible={setIsVisible}
      />
      {children}
      <Footer />
    </div>
  );
};

export default CustomerLayout;
