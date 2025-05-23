'use client';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
import './globals.css';
import MobileMenu from './components/MobileMenu';

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
  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en" className={`${inter.variable} ${avenir.variable}`}>
      <title>Arkam</title>
      <body>
        {
          loading ? <SplashScreen /> : (
            <>
              <MobileMenu handleClick={handleMenuToggle} isMenuOpen={isMenuOpen} />
              <Header isMenuOpen={isMenuOpen} handleClick={handleMenuToggle} />
              <div className='pt-[var(--header-height)]'>
                {children}
              </div>
              <Footer />
            </>
          )
        }

      </body>
    </html>
  );
}