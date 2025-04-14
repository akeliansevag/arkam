'use client';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
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


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en" className={`${inter.variable} ${avenir.variable}`}>
      <title>Arkam</title>
      <body>
        {
          loading ? <SplashScreen /> : (
            <>
              <Header />
                {children}
              <Footer />
            </>
          )
        }
      </body>
    </html>
  );
}