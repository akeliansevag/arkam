'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const IconsTextGridTwo = ({title,items,background}) => {
  return (
    <div className='max-lg:py-24 lg:py-48 w-full flex items-center justify-center relative'>
        {
            background && (
                <>
                    <img src={background} className='absolute w-full h-full object-cover'/>
                    <div className="rotate-180 bottom absolute w-full h-full z-10 bg-[linear-gradient(231.68deg,_rgba(11,32,42,0.68)_43.3%,_rgba(0,168,166,0.68)_90.45%)]"></div>
                </>
            )
        }
        
        <div className="container relative z-10">
        <motion.h2 {...fadeInUp()} className="text-center section-title">{title}</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
            <motion.div
                key={index}
                {...fadeInUp(index / 10)}
                className="bg-[#0B202A]/75 p-10 h-full rounded-2xl"
            >   
                <div>
                    <img src={item.icon} alt={item.title} />
                    <h5 className="mt-6 small-title inline-block text-gray-200 hover:text-white">{item.title}</h5>
                    <p className="mt-3">{item.description}</p>
                </div>
                
            </motion.div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default IconsTextGridTwo;
