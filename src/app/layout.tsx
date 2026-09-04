import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArivSoft Solutions | ERP en la Nube para Empresas Inteligentes",
  description: "El sistema ERP integral en la nube que centraliza ventas POS, control de inventario multialmacén, compras, finanzas, reportes en tiempo real y nómina. Diseñado para pequeñas, medianas y grandes empresas.",
  keywords: [
    "ERP Venezuela",
    "software administrativo",
    "sistema de ventas POS",
    "control de inventario",
    "facturacion electronica multimoneda",
    "software contable",
    "gestion de nomina",
    "ArivSoft Solutions",
    "FinaPartner alternativa",
    "ERP en la nube"
  ],
  authors: [{ name: "ArivSoft Solutions" }],
  creator: "ArivSoft Solutions",
  publisher: "ArivSoft Solutions",
  metadataBase: new URL("https://arivsoft.com"),
  alternates: {
    canonical: "https://arivsoft.com",
  },
  openGraph: {
    title: "ArivSoft Solutions - ERP Empresarial Integral en la Nube",
    description: "Controla ventas, inventario, compras, finanzas y nómina de tu empresa en una sola plataforma rápida, moderna y en tiempo real.",
    url: "https://arivsoft.com",
    siteName: "ArivSoft Solutions",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ArivSoft Solutions ERP",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArivSoft Solutions - ERP Empresarial Inteligente",
    description: "Optimiza la gestión de tu negocio: ventas, stock, finanzas, nómina y reportes con IA.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} font-sans`}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
