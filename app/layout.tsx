import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../src/store/Provider";
import HorsecoderPermissionLayoutWrapper from "@/src/layouts/HorsecoderPermissionLayout/wrapper";
import { ForwardRouterProvider } from "@/src/logic/ForwardRouterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "倚码HorseData全球领先的数据智能体",
  description: "倚码HorseData全球领先的数据智能体",
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
      <body className="min-h-full flex flex-col">
        <ForwardRouterProvider>
          <ReduxProvider><HorsecoderPermissionLayoutWrapper>{children}</HorsecoderPermissionLayoutWrapper></ReduxProvider>
        </ForwardRouterProvider>
      </body>
    </html>
  );
}
