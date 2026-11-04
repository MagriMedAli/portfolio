import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
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
  metadataBase: new URL("https://portfolio-mohamed-ali-magri.vercel.app"),
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
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${instrument.variable} ${jbMono.variable}`}
    >
      <body className="grain bg-ink text-ink antialiased font-body">{children}</body>
    </html>
  );
}
