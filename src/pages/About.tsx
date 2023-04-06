import React from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.main}>
      <div>this page will tell you about the service</div>
      <Link href={"/"}>back to the main page</Link>
    </div>
  );
};

export default About;
