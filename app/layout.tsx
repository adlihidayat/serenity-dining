import type { Metadata } from "next";
import { Forum } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { SessionProvider } from "next-auth/react";
import Providers from "./components/Providers";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serenity Dining",
  description: "homepage of serinity dining restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={forum.className}>
        <Providers>
          {/* <Nav /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
