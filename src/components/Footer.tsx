import React from "react";
import { useTranslations, useFormatter } from "next-intl";
import styles from "@/styles/Home.module.css";

// notes for objects
// interface tempTester {
//   one: number;
//   two: number;
//   three: string;
// }
// this works+
// const Footer:React.FC<tempTester> = ({ one, two, three }: tempTester) => {
// but you must nave the <> interface in these brackets or it fails.

// this also works:
// const Footer = ({ one, two, three }: tempTester) => {

const Footer = () => {
  console.log("FTR4");
  const t = useTranslations("front_page");
  const format = useFormatter();
  return (
    <footer className={styles.footer}>
      {t("footer")}
      {/* <p>{one}</p>
      <p>{two}</p>
      <p>{three}</p> */}
    </footer>
  );
};

export default Footer;
