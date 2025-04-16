'use client';
import React from 'react';
import { motion } from "motion/react";
import Link from 'next/link';
import { fadeInUp } from '../config/animations';
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <motion.header {...fadeInUp()} className='w-full h-[var(--header-height)]'>
        <div className='max-w-[1740px] px-4 mx-auto flex items-center h-full justify-between'>
            <div>
                <Link href='/'>
                    <img src='/img/logo.svg' alt='Akram Logo'/>
                </Link> 
            </div>
            <div>
                <MainMenu />
            </div>
            <div className='max-lg:hidden'>
                <a href="/" className='button-secondary'>Get Started</a>
            </div>
        </div>
    </motion.header>   
  )
}

export default Header;
