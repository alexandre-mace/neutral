import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import "./typeset.css";
import "react-medium-image-zoom/dist/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neutral.climatelab.fr"),
  title: "Neutral - Se repérer au travers de la transition énergétique",
  description:
    "Résumé des Futurs énergétiques 2050 de RTE : les scénarios de production et de consommation électriques permettant la neutralité carbone.",
  icons: {
    icon: "https://em-content.zobj.net/source/apple/419/compass_1f9ed.png",
  },
  openGraph: {
    title: "Neutral - Se repérer au travers de la transition énergétique",
    description:
      "Résumé des Futurs énergétiques 2050 de RTE : les scénarios de production et de consommation électriques permettant la neutralité carbone.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} flex min-h-dvh flex-col font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
