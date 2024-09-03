import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const Poppin = Poppins({ subsets: ["latin"], weight:['500', '700'] });

export const metadata: Metadata = {
  title: "URL Shortening API",
  description: "url shortening api landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={Poppin.className}>{children}</body>
    </html>
  );
}
