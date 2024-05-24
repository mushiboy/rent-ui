import type { Metadata } from "next";
import { NavBar } from "../ui/navbar/navbar";

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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
