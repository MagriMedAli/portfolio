import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohamed Ali Magri — AI Automation & Full-Stack Developer",
  description:
    "AI Automation and Full-Stack Developer building intelligent workflows, AI integrations, APIs, and business automation systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mohamed Ali Magri — AI Automation & Full-Stack Developer",
    description:
      "AI Automation and Full-Stack Developer building intelligent workflows, AI integrations, APIs, and business automation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jbMono.variable}`}>
      <body className="bg-base text-ink antialiased font-body">{children}</body>
    </html>
  );
}
