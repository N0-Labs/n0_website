import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "N0labs - Simulation and Testing for Autonomy",
  description:
    "N0labs gives autonomy engineering teams the simulation environment and synthetic data pipeline they need to build reliable perception systems.",
  icons: {
    icon: "/N0_final-256x256.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B3A6B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
