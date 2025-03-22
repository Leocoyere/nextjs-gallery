import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from "@/app/_components/topnav";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gallery",
  description: "A gallery of images",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen grid grid-rows-[auto_1fr]">
          <TopNav />
          <main className="overflow-y-scroll">
            {children}
          </main>
        </div>
          {modal}
          <div id="modal-root"></div>
        </body>
      </html>
    </ClerkProvider>
  );
}
