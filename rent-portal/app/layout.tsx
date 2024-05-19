import type { Metadata } from "next";
import "./globals.css";
import { clsx } from "clsx";
import { oswald } from "./ui/fonts/fonts";
import { NavBar } from "./ui/home/navbar";

export const metadata: Metadata = {
  title: "Rent Portal",
  description: "To be filled",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
