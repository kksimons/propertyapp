import Navbar from "@/components/Navbar";
import "./globals.css";
import {Inter, Inconsolata, Roboto} from 'next/font/google'
import { Metadata } from "next";

const inter = Inter({subsets:['latin']})
const inconsolata = Inconsolata({subsets:['latin']})
const roboto = Roboto({subsets:['latin'], weight:['400']})

export const metadata: Metadata = {
  title: 'Rocky Mountain Retreats',
  description: 'Find a place to stay in Alberta',
  keywords: 'airbnb, retreats, properties, homestays',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
        </body>
    </html>
  );
}
