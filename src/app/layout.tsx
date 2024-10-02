"use client";
import "./globals.css";
import Tabs from "@/components/layout/tabs";
import Header from "@/components/layout/header";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased `}>
        <Providers>
          <Header />
          {children}
          <Tabs />
        </Providers>
      </body>
    </html>
  );
}
