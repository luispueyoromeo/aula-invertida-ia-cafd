import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aula Invertida e IA en CAFD",
  description: "Proyecto de Innovación Docente · Universidad de Zaragoza",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="font-sans">
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
