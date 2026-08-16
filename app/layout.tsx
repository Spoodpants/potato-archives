import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Potato Archives • Home",
  description: "The official home of our group's lore, members, inside jokes, and history.",
  openGraph: {
    title: "Potato Archives",
    description: "The official home of our group's lore, members, inside jokes, and history.",
    url: "https://potato-archives.vercel.app",
    siteName: "Potato Archives",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Potato Archives Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Potato Archives",
    description: "The official home of our group's lore, members, inside jokes, and history.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}