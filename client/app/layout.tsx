import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import AuthContext from "@/contexts/AuthContext";

const noto_Sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html className={noto_Sans.className} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AuthContext>{children}</AuthContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
