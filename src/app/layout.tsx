import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AMR Combat | Preserving Antibiotics, Combating the Silent Pandemic",
  description:
    "Explore the science of Antimicrobial Resistance (AMR), how superbugs form, and practical stewardship actions to preserve modern medicine.",
  keywords: [
    "Antimicrobial Resistance",
    "AMR",
    "Superbugs",
    "Antibiotics",
    "Public Health",
    "WHO GLASS",
    "Antibiotic Stewardship",
    "Armour Up",
    "உடை அணிவீர்",
  ],
  authors: [{ name: "AMR Global Initiative" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
