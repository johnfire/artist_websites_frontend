import React, { useState } from "react";
import UserLoginButton from "./UserLoginButton";
import CreateAccountButton from "./CreateAccountButton";
import LanguageSelector from "./LangaugeSelector";
import { CreateAccount } from "@/pageInterfaces";
import styles from "@/styles/Home.module.css";

const Navbar = ({
  createAccountVisible,
  setCreateAccountVisible,
}: CreateAccount) => {
  console.log("Nav11");
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  return (
    <div className={styles.navbar}>
      <UserLoginButton />
      <CreateAccountButton
        createAccountVisible={createAccountVisible}
        setCreateAccountVisible={setCreateAccountVisible}
      />
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
    </div>
  );
};

export default Navbar;
