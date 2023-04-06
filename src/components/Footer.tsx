import React from "react";
import { useTranslations, useFormatter } from "next-intl";

const Footer: React.FC = () => {
  console.log("footer 4");
  const t = useTranslations("front_page");
  const format = useFormatter();
  return <footer>{t("footer")}</footer>;
};

export default Footer;
