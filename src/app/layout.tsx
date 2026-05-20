import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regian Leopoldo | Software Engineer",
  description:
    "Software Engineering | Full Stack Developer | React • Next.js • Node.js • React Native • TypeScript • Databases • Python • Java • C/C++",
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
