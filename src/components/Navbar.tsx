import React, { useState } from "react";
import UserLoginButton from "./UserLoginButton";
import CreateAccountButton from "./CreateAccount";
import LanguageSelector from "./LangaugeSelector";

const Navbar: React.FC = () => {
  console.log("Nav4");
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  return (
    <nav>
      <UserLoginButton />
      <CreateAccountButton />
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
    </nav>
  );
};

export default Navbar;
