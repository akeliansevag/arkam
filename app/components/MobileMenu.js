'use client';
import React, { useState } from 'react';
import { mainMenu } from '../data/nav';
import  Link  from 'next/link';

const MobileMenu = ({isMenuOpen,handleClick}) => {
  return (
    <>
        <div className={`px-4 w-full z-40 fixed h-full bg-primary-900 top-0 pb-5 pt-[var(--header-height)] overflow-y-auto flex items-center flex-col transition-all ${isMenuOpen ? 'left-0' : '-left-full'}`}>
            <ul className='flex flex-col gap-10 pt-5 text-center'>
                {
                    mainMenu.map((item,index) => {
                        return (
                            <li key={index}>
                                <Link onClick={handleClick} className='text-base text-gray-200 hover:text-white' href={item.href}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Link onClick={handleClick} href="/" className='button-secondary mt-8 !text-base w-full text-center max-w-[400px]'>Get Started</Link>
        </div>
    </>
    
  )
}

export default MobileMenu;
