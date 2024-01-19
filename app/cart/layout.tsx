import type { Metadata } from "next";
import "../globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Cart | Serenity Dining",
  description: "show the selected menu and confirmation of the order",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
