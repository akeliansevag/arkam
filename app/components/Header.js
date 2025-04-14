import React from 'react';
import Link from 'next/link';

import { mainMenu } from '../data/nav';

const Header = () => {
  return (
    <header className='w-full h-[var(--header-height)]'>
      <div className='max-w-[1740px] mx-auto flex items-center h-full justify-between'>
        <div>
            <Link href='/'>
                <img src='/img/logo.svg' alt='Akram Logo'/>
            </Link> 
        </div>
        <div>
            
            <ul className='flex items-center gap-14'>
                {
                    mainMenu.map((item,index) => {
                        return (
                            <li key={index}>
                                <Link className='text-sm text-gray-200 hover:text-white' href={item.href}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
            <a href="/" className='button-secondary'>Get Started</a>
        </div>
      </div>
    </header>
  )
}

export default Header;
