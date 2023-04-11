import React, { useState } from "react";
import { useTranslations, useFormatter } from "next-intl";
import { useRouter } from "next/navigation";
import { CreateAccount } from "@/pageInterfaces";

// TODO move this later
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
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
    <button type="button" onClick={handleClick}>
      &nbsp;&nbsp;&nbsp;&nbsp;{t("createAccount")}&nbsp;&nbsp;&nbsp;&nbsp;
    </button>
  ) : null;

  return <>{display}</>;
};

export default CreateAccountButton;
