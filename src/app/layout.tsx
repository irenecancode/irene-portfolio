import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irene-portfolio-beta.vercel.app"),
  title: "Irene Cheung, Product Designer",
  description: "Product designer who ships code. Case studies in internal tools, data workflows, and human-AI interaction.",
  openGraph: {
    title: "Irene Cheung, Product Designer",
    description: "Product designer who ships code.",
    siteName: "Irene Cheung",
    type: "website",
    images: [
      {
        url: "/media/og-image.png",
        width: 1200,
        height: 630,
        alt: "Irene Cheung, product designer who ships code, with her fox mascot working at a laptop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
