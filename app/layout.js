import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Providers from "./providers"; // your client-side logic
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const avenir = localFont({
  src: [
    {
      path: './fonts/AvenirNext-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/AvenirNext-Demi.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-avenir',
});

// ✅ Global metadata (applies to all pages)
export const metadata = {
  title: "Arkam",
  description: "",
  openGraph: {
    title: "Arkam",
    description: "",
    url: "https://arkam.com",
    siteName: "Arkam",
    images: [
      {
        url: "https://arkam.com/img/og-image.png", // must be absolute
        width: 1200,
        height: 630,
        alt: "Arkam Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkam",
    description: "",
    images: ["https://arkam.com/img/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${avenir.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

