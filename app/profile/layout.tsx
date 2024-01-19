import type { Metadata } from "next";
import "../globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Profile | Serenity Dining",
  description:
    "profile page to show the detail of user that login in serenity dining ",
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
