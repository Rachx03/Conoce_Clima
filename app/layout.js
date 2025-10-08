import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // SEO básico
  title: "Nimbus",
  description: "Nimbus te permite consultar el clima en tiempo real, temperatura, humedad, velocidad del viento y pronósticos para cualquier ciudad del mundo. Información meteorológica precisa y confiable al instante.",
  keywords: [
    "clima",
    "tiempo real",
    "pronóstico del tiempo",
    "temperatura",
    "humedad",
    "viento",
    "meteorología",
    "weather",
    "forecast",
    "clima Montevideo",
    "clima Uruguay",
    "clima mundial",
    "app clima",
    "información meteorológica",
    "Nimbus clima",
    "tiempo Montevideo",
    "pronóstico diario",
    "alertas meteorológicas",
    "clima global",
    "estadísticas de clima",
    "predicción del tiempo",
    "servicio meteorológico",
    "datos climáticos",
    "clima interactivo",
    "aplicación meteorológica",
    "temperatura actual",
    "estado del tiempo"
  ],
  author: "Nimbus Team",
  contentType: "website",
  language: "es",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Nimbus - Clima en Tiempo Real y Pronóstico Meteorológico",
    description: "Consulta el clima en tiempo real, temperatura, humedad, velocidad del viento y pronósticos para cualquier ciudad del mundo con Nimbus.",
    url: "https://revistatechno.web.app", // Cambia por la URL real de tu web
    type: "website",
    locale: "es_ES",
    siteName: "Nimbus",
    images: [
      {
        url: "https://i.ibb.co/qYfws1wv/Gemini-Generated-Image-eroc73eroc73eroc.png", // Imagen representativa de tu web
        width: 1200,
        height: 630,
        alt: "Nimbus - Clima en Tiempo Real"
      }
    ]
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@NimbusApp", // Si tienes cuenta de Twitter oficial
    creator: "@NimbusApp",
    title: "Nimbus - Clima en Tiempo Real y Pronóstico Meteorológico",
    description: "Consulta el clima en tiempo real, temperatura, humedad, velocidad del viento y pronósticos para cualquier ciudad del mundo con Nimbus.",
    image: "https://i.ibb.co/qYfws1wv/Gemini-Generated-Image-eroc73eroc73eroc.png"
  }
};


export default function RootLayout({ children }) {
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
