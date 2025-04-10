import type { Metadata } from "next";
import "./globals.css";
import SiteConfig from "@crymson/web/SiteConfig";
import { config } from "../../lib/site.config";
import { Inter, Russo_One, Roboto, Saira } from "next/font/google";
import PageLayout from "@/components/structure/PageLayout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-russo",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
  variable: "--font-roboto",
});

const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "JuTy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteConfig config={config}>
      <html
        lang="en"
        className={`${inter.variable} ${russoOne.variable} ${roboto.variable} ${saira.variable}`}
      >
        <body className="min-h-screen">
          <PageLayout>{children}</PageLayout>
        </body>
      </html>
    </SiteConfig>
  );
}
