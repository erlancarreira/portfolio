import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfólio de projetos de desenvolvimento web",
};

const font = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
