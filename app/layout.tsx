import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "react-quill-new/dist/quill.snow.css";
import StoreProvider from "@/store/StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Contract Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-light`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
