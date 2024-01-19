import type { Metadata } from "next";
import "../globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Menu | Serenity Dining",
  description:
    "show the list of menu and its detail of serenity dining restaurant",
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
