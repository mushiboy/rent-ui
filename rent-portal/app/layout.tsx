import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
