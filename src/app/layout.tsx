import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import "./globals.css"; // Asegúrate de que tus estilos globales estén aquí

export const metadata: Metadata = {
  title: "Heroes Landing Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> {/* Aquí se renderizarán las páginas */}
       
        <Footer />
      </body>
    </html>
  );
}