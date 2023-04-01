import React from "react";
import { useTranslations, useFormatter } from "next-intl";

const CreateAccountButton = () => {
  console.log("ULB5 here is user create account button");
  const t = useTranslations("front_page");

  const handleClick = () => {
    console.log("ULB7 clicked create account button ");
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        &nbsp;&nbsp;&nbsp;&nbsp;{t("createAccount")}&nbsp;&nbsp;&nbsp;&nbsp;
      </button>
    </>
  );
};

export default CreateAccountButton;
