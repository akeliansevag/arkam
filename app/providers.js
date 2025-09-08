"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import MobileMenu from "./components/MobileMenu";

export default function RootLayout({ children }) {
    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);
    
    return loading ? (
        <SplashScreen />
    ) : (
        <>
            <MobileMenu handleClick={handleMenuToggle} isMenuOpen={isMenuOpen} />
            <Header isMenuOpen={isMenuOpen} handleClick={handleMenuToggle} />
            <div className="pt-[var(--header-height)]">{children}</div>
            <Footer />
        </>
    );
}