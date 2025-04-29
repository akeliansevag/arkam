'use client';
import React, { useState } from 'react';
import { mainMenu } from '../data/nav';
import  Link  from 'next/link';

const MobileMenu = ({isMenuOpen,handleClick}) => {
  const [openIndex,setOpenIndex] = useState(null);
  const toggleClick = (index) => {
    if(openIndex===index){
        setOpenIndex(null)
    }else{
        setOpenIndex(index)
    }
  }

  return (
    <>
        <div className={`w-full z-40 fixed h-full bg-primary-900 top-0 pb-5 pt-[var(--header-height)] overflow-y-auto flex flex-col transition-all ${isMenuOpen ? 'left-0' : '-left-full'}`}>
                <ul className='flex flex-col pt-5'>
                    {
                        mainMenu.map((item,index) => {
                            return (
                                <li key={index} className='border border-x-0 border-t-0 border-b-gray-500 py-5'>
                                    <div className='px-8 flex items-center justify-between' onClick={()=> toggleClick(index)}>
                                        <div>
                                            {
                                                item.href ? (
                                                    <Link onClick={handleClick} className='text-base text-gray-200 hover:text-white' href={item.href}>{item.title}</Link>
                                                ) : (

                                                    <div className='text-base text-gray-200 hover:text-white' href={item.href}>{item.title}</div>
                                                )
                                            }
                                        </div>
                                        <div>
                                            <img className={`w-3 ${(item.children && item.children.length > 0) ? 'visible' : 'hidden'}`} src='/img/down-arrow.svg' />
                                        </div>

                                    </div>
                                    {
                                        item.children && item.children.length > 0 && (
                                            <div className={`px-8 overflow-hidden ${index===openIndex ? 'h-auto' : 'h-0'}`}>
                                                {item.children.map((it, inx) => (
                                                    <div className='mt-4' key={inx}>
                                                    {it.href ? (
                                                        <Link onClick={handleClick} className="text-sm font-bold" href={it.href}>
                                                        {it.title}
                                                        </Link>
                                                    ) : (
                                                        <div className="text-sm font-bold">{it.title}</div>
                                                    )}
                                                    {it.items && it.items.length > 0 && (
                                                        <ul className="mt-1">
                                                        {it.items.map((sub, s) => (
                                                            <li key={s}>
                                                                <Link
                                                                    onClick={handleClick}
                                                                    className="text-sm text-gray-500 hover:text-white"
                                                                    href={sub.href}
                                                                >
                                                                    {sub.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                        </ul>
                                                    )}
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <Link onClick={handleClick} href="/" className='button-secondary mt-8 w-max mx-auto !text-base text-center'>Get Started</Link>            
        </div>
    </>
    
  )
}

export default MobileMenu;
