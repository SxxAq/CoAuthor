import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { dark } from "@clerk/themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "CoAuthor",
  description:
    "Your go-to collaborative document editor for real-time teamwork and seamless collaboration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
        variables:{
          colorPrimary:"#3371ff",
          colorInputBackground:"#f1f1f1",
          colorInputText:"#36454F",
          fontSize:"16px"}
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen  font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
