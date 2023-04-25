import React from "react";
import { useTranslations, useFormatter } from "next-intl";
import styles from "@/styles/Home.module.css";

const UserLoginButton = () => {
  console.log("ULB5 user login button");
  const t = useTranslations("front_page");

  const handleClick = () => {
    console.log("ULB7 clicked login button ");
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={styles.button}>
        &nbsp;&nbsp;{t("login")}&nbsp;&nbsp;
      </button>
    </>
  );
};

export default UserLoginButton;
