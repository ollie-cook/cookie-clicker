import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookie Clicker Clone",
  description: "Iconic Cookie Clicker Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body-background`}>
        {children}
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-white" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
      </body>
    </html>
  );
}
