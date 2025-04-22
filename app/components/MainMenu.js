'use client';
import React from 'react';
import Link from 'next/link';
import { mainMenu } from '../data/nav';
import { usePathname } from 'next/navigation';

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <div className='max-lg:hidden'>
        <ul className='flex items-center lg:gap-7 xl:gap-14'>
            {
                mainMenu.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link className={`text-sm ${pathname==item.href ? 'text-secondary' : 'text-gray-200 hover:text-white'} `} href={item.href}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default MainMenu;
