import type { Metadata } from "next";
import { NavBar } from "../../ui/navbar/navbar";

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
      <body className="bg-gr2">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
