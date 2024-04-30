import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import MainComponent from "@/components/MainComponent/MainComponent";

const varelaRound = Varela_Round({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Gym Helper App",
  description: "An app to help you track your progress on the gym!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={varelaRound.className}>
        <MainComponent>{children}</MainComponent>
      </body>
    </html>
  );
}
