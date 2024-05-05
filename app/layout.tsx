import type { Metadata } from "next";
import { Roboto_Mono } from 'next/font/google'
import './global.css';
import { AuthContextProvider } from "@/context/authContext";
import { SocketContextProvider } from "@/context/socketContext";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signal Web",
  description: "Добро пожаловать с Signal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <AuthContextProvider>
          <SocketContextProvider>
            {children}
          </SocketContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
