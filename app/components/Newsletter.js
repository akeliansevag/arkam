'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const Newsletter = () => {
  return (
    <div className='container'>
        <div className="p-14 bg-[linear-gradient(112.62deg,_rgba(29,40,56,0.5)_0%,_rgba(29,40,56,0)_100%)] rounded-2xl">
            <div className='max-w-[1200px] mx-auto'>
                <motion.h2 className="text-center section-title" {...fadeInUp()}>Stay informed
                and always stay up to date!</motion.h2>
                <motion.div {...fadeInUp(0.2)} className="flex max-lg:flex-col max-lg:gap-2 lg:gap-5 items-center justify-center mt-10">
                    <input type="email" name="email" className='border border-gray-500 rounded-2xl px-5 py-3 text-base max-lg:w-full max-lg:text-center' placeholder='Your email address'/>
                    <button className='max-lg:w-full cursor-pointer button-primary !mt-0'>Subscribe</button>
                </motion.div>
            </div>
            
        </div>  
    </div>
    
  )
}

export default Newsletter;
