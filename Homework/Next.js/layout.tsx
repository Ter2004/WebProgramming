import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Next Basic",
  description: "This is my sample application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        style={{ fontFamily: "Arial, sans-serif" }} // Apply Arial font here
      >
        {children}
      </body>
    </html>
  );
}
