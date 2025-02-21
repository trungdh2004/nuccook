"use client";
import React, { EventHandler, Suspense } from "react";
import Client from "./Client";
import { useTranslations } from "next-intl";
import setLanguage from "../actions/setLanguage";

const Client1 = () => {
  const t = useTranslations();

  const handleChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <div>
      Client1 - <i>{t("HomePage.title")}</i>
      <Suspense fallback={<b>loading</b>}>
        <Client />
      </Suspense>
      <select
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          console.log(":e", e.target.value);
          handleChange(e.target.value);
        }}
      >
        <option value="vi">VN</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default Client1;
