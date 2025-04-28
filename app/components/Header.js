'use client';
import React from 'react';
import { motion } from "motion/react";
import Link from 'next/link';
import { fadeInUp } from '../config/animations';
import MainMenu from './MainMenu';

const Header = ({handleClick,isMenuOpen}) => {

  return (
    <motion.header {...fadeInUp()} className='w-full h-[var(--header-height)] fixed top-0  z-50 bg-primary-900/70 backdrop-blur-sm'>
        <div className='container flex items-center h-full justify-between'>
            <div>
                <Link href='/'>
                    <img src='/img/logo.svg' alt='Akram Logo'/>
                </Link> 
            </div>
            <div className='h-full'>
                <MainMenu />
            </div>
            <div>
                <Link href="/" className='button-secondary max-lg:!hidden'>Get Started</Link>
                <div
                    onClick={handleClick}
                    id="burger-menu"
                    className="bg-primary-700 rounded-lg p-3 w-[40px] h-[40px] lg:hidden items-center justify-center flex flex-col gap-1 relative"
                >
                    <span
                    className={`h-0.5 bg-white w-full block transition-transform duration-300 ${
                        isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                    }`}
                    ></span>
                    <span
                    className={`h-0.5 bg-white w-full block transition-all duration-300 ${
                        isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                    ></span>
                    <span
                    className={`h-0.5 bg-white w-full block transition-transform duration-300 ${
                        isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                    }`}
                    ></span>
                </div>
            </div>
        </div>
    </motion.header>   
  )
}

export default Header;
