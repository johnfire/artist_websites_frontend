import React from "react";
import { useTranslations, useFormatter } from "next-intl";

const TitleComponent = () => {
  console.log("TC5 title ");
  const t = useTranslations("front_page");
  // const format = useFormatter(); // use later

  return (
    <>
      <div>&nbsp;&nbsp;{t("title")}&nbsp;&nbsp;</div>
    </>
  );
};

export default TitleComponent;
