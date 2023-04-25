import React, { useState } from "react";
import { useTranslations, useFormatter } from "next-intl";
import { useRouter } from "next/navigation";
import { CreateAccount } from "@/pageInterfaces";
import styles from "@/styles/Home.module.css";

// TODO move this later
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CreateAccountButton = ({
  createAccountVisible,
  setCreateAccountVisible,
}: CreateAccount) => {
  const t = useTranslations("front_page");
  const { push } = useRouter();

  const handleClick = () => {
    console.log("ULB7 clicked create account button ");
    setCreateAccountVisible(false);
    push("/createAccount");
  };

  const display = createAccountVisible ? (
    // <div id="container">
    <button type="button" onClick={handleClick} className={styles.button}>
      &nbsp;&nbsp;&nbsp;&nbsp;{t("createAccount")}&nbsp;&nbsp;&nbsp;&nbsp;
    </button>
  ) : // </div>
  null;

  return <>{display}</>;
};

export default CreateAccountButton;
