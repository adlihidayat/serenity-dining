import type { Metadata } from "next";
import "../globals.css";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Payment Success",
  description: "the payment is success",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
