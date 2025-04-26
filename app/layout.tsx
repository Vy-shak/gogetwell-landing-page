import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gogetwell",
  description: "the cultural center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor:"#F1F7FF"}} className={`${anekLatin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}