import type { Metadata } from "next";
import "../globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "About | Serenity Dining",
  description: "show the detail of serenity dining",
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
