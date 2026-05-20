import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regian Leopoldo | Software Engineer",
  description:
    "Software Engineer | Full Stack Developer | React • Next.js • Node.js • React Native • TypeScript • Databases • Python • Java • C/C++",

  metadataBase: new URL("https://regian-portfolio.vercel.app"),

  openGraph: {
    title: "Regian Leopoldo | Software Engineer",
    description:
      "Full Stack Developer especializado em React, Next.js e Node.js. Portfólio com projetos reais e experiência prática.",
    url: "https://regian-portfolio.vercel.app",
    siteName: "Regian Leopoldo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Regian Leopoldo Portfolio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Regian Leopoldo | Software Engineer",
    description:
      "Full Stack Developer | React • Next.js • Node.js • TypeScript",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
