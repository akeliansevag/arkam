import React from 'react';
import Link from 'next/link';
import { mainMenu } from '../data/nav';


const MainMenu = () => {
  return (
    <div className='max-lg:hidden'>
        <ul className='flex items-center lg:gap-7 xl:gap-14'>
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
  )
}

export default MainMenu;
