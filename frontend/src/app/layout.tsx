import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CodeEditorBackground from "../components/CodeEditorBackground";
import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Mads Hermansen - Full Stack Developer",
  description: "Mads Hermansen's personal website for portfolio and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hanunoo&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <Analytics />
      <SpeedInsights />
      <body className="bg-background text-text overflow-hidden">
        <ThemeProvider>
          <CodeEditorBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
