import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Coding Ferret",
  description: "A simple coding portfolio/blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
