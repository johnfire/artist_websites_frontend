import React from "react";
import { useRouter } from "next/router";
import { useTranslations, useFormatter } from "next-intl";

import { SelectProps } from "@/pageInterfaces";
import styles from "@/styles/Home.module.css";

const LanguageSelector = ({
  currentLanguage,
  setCurrentLanguage,
}: SelectProps) => {
  console.log("LS11", currentLanguage);

  const router = useRouter();
  const t = useTranslations("front_page");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCurrentLanguage(e.target.value);
    router.push("/", "/", { locale: e.target.value });
  };

  return (
    <form method="post">
      <label htmlFor="langauageSelectors" className={styles.basicRow}>
        &nbsp;{t("choseLanguage")}&nbsp;&nbsp;
        <select
          id="langauageSelector"
          value={currentLanguage}
          onChange={(e) => handleSubmit(e)}
          className={styles.button}
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="fr">Francais</option>
          <option value="it">Italiano</option>
          <option value="nl">Niederlands</option>
        </select>
      </label>
    </form>
  );
};

export default LanguageSelector;
