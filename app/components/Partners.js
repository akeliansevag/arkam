'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const Partners = () => {
  const partners = [
    '/img/mymonty.svg', '/img/montypay.svg', '/img/montyfinance.svg', '/img/montyesim.svg', '/img/montycapital.svg'
  ];
  return (
    <div className='max-lg:py-24 lg:py-48 w-full flex items-center justify-center relative'>
        <img src='/img/partners.webp' className='absolute w-full h-full object-cover'/>
        <div className="rotate-180 bottom absolute w-full h-full z-10 bg-[linear-gradient(231.68deg,_rgba(11,32,42,0.68)_43.3%,_rgba(0,168,166,0.68)_90.45%)]"></div>
        <div className='container relative z-20'>
            <div className='max-w-[940px] mx-auto text-center'>
                <motion.h2 {...fadeInUp()} className='section-title'>Connect with Our Partners and Collaborators</motion.h2>
                {/* <motion.p {...fadeInUp(0.2)}className='!text-gray-300 max-w-[700px] mx-auto'>Tincidunt sed amet ullamcorper diam. Diam proin magnis semper egestas in faucibus tristique augue. Nec tristique hac.</motion.p> */}
                
            </div>

            <div className='flex flex-wrap gap-5 max-lg:mt-10 lg:mt-18 justify-center'>
                {
                    partners.map((partner,index)=>{
                        return (
                            <motion.div {...fadeInUp(index/10)} key={index} className='bg-primary-900/50 px-6 max-lg:w-[calc(50%-20px)] lg:w-[calc((100%/3)-20px)] xl:w-[calc(20%-20px)] min-w-[100px] aspect-video flex items-center justify-center rounded-2xl'>
                                <img src={partner} />
                            </motion.div>
                        )
                    })
                }
            </div>
            
        </div>
    </div>
  )
}

export default Partners;
