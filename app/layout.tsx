import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeaderSwitch } from "@/components/icad/HeaderSwitch";
import { Footer } from "@/components/icad/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICAD",
  description: "Iglesia Canaán de las Asambleas de Dios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <HeaderSwitch />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
