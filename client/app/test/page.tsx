
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const Client = dynamic(() => import("./Client"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Client1 = dynamic(() => import("./Client1"), { ssr: false });

const Page = () => {
  console.log("server", typeof window);
  const t = useTranslations("HomePage");
  return (
    <div>
      <b>{t("title")}</b>
      <p>Server</p>-
      <Suspense fallback={<p>Loading</p>}>
        <Client />
      </Suspense>{" "}
      - <Client1 />
    </div>
  );
};

export default Page;
