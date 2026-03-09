import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Serif, Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibm-plex-serif",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Null Labs",
  description:
    "Null Labs — queryable physics & sensor data for intelligent systems.",
  icons: {
    icon: "/N0_final-256x256.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#061a12",
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
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable} ${spaceMono.variable} ${bebasNeue.variable}`}>
      <body className="font-sans">
          <Navigation />
          <main className="pt-16">{children}</main>
        </body>
    </html>
  );
}
