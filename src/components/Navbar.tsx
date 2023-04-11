import React, { useState } from "react";
import UserLoginButton from "./UserLoginButton";
import CreateAccountButton from "./CreateAccountButton";
import LanguageSelector from "./LangaugeSelector";
import { CreateAccount } from "@/pageInterfaces";

const Navbar = ({
  createAccountVisible,
  setCreateAccountVisible,
}: CreateAccount) => {
  console.log("Nav11");
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  return (
    <nav>
      <UserLoginButton />
      <CreateAccountButton
        createAccountVisible={createAccountVisible}
        setCreateAccountVisible={setCreateAccountVisible}
      />
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
    </nav>
  );
};

export default Navbar;
