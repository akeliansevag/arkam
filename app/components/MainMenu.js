'use client';
import React from 'react';
import Link from 'next/link';
import { mainMenu } from '../data/nav';
import { usePathname } from 'next/navigation';

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <div className='max-lg:hidden h-full'>
        <ul className='flex items-center lg:gap-7 xl:gap-14 h-full'>
            {
                mainMenu.map((item,index) => {
                    return (
                        <li className='group h-full flex flex-col justify-center' key={index}>
                            {
                                item.href ? (
                                    <Link className={`text-sm h-full flex flex-col justify-center  ${pathname==item.href ? 'text-secondary' : 'text-gray-200 hover:text-white'} `} href={item.href}>{item.title}</Link>
                                ) : (
                                    <div className={`text-sm h-full flex flex-col justify-center ${pathname==item.href ? 'text-secondary' : 'text-gray-200 hover:text-white'} `} 
                                    >{item.title}</div>
                                )
                            }
                            
                            {
                                item.children && item.children.length > 0 && (
                                    <div className='mega-menu'>
                                        <div className='container flex justify-between'>
                                            {
                                                item.children.map((it,inx)=>{
                                                    return (
                                                        <div key={inx}>
                                                            {
                                                                it.href ? (
                                                                    <Link className="text-sm font-bold" href={it.href}>{it.title}</Link>
                                                                ) : (
                                                                    <div className='text-sm font-bold'>{it.title}</div>
                                                                )          
                                                            }
                                                            {
                                                                it.items && it.items.length > 0 && (
                                                                    <ul className='mt-3'>
                                                                        {
                                                                            it.items.map((sub,s)=>{
                                                                                return (
                                                                                    <li key={s}>
                                                                                        <Link className="text-sm text-gray-500 hover:text-white" href={sub.href}>{sub.title}</Link>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                )
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        
                                    </div>
                                )
                            }
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default MainMenu;
