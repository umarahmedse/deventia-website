import type { Metadata } from "next";
import "./globals.css";
import { interFont } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "DeventiaTech Limited",
  description: "DeventiaTech Pvt Limited - Scripting Future Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interFont.className}>{children}</body>
    </html>
  );
}
