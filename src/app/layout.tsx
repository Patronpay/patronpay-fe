import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "PatronPay",
  description: "Self set salary converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
