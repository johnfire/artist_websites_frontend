import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "@/styles/Home.module.css";

type layoutProps = {
  title?: string;
  children: ReactNode;
};

// const dataobject = {
//   one: 1,
//   two: 2,
//   three: "blah",
// };

const EntryLayout = ({ children }: layoutProps) => {
  console.log("EL 18");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <div className={styles.entryLayout}>
      <Navbar
        createAccountVisible={isVisible}
        setCreateAccountVisible={setIsVisible}
      />
      <p> where are you </p>
      <div>{children}</div>
      {/* <Footer {...dataobject} /> */}
      <Footer />
    </div>
  );
};

export default EntryLayout;

//  this might also work with passing obkects to fc
/* @ts-ignore */ // ReactFC cannot have child compponents in typescript, its a react 18 bug.....
