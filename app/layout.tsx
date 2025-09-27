import "./globals.css";
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Grožio ir Sveikatos Tarnyba – klinika Klaipėdoje",
  description: "Profesionalios grožio ir sveikatos paslaugos Klaipėdoje.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
