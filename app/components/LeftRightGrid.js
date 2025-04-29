'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const LeftRightGrid = ({title,subtitle,items}) => {
  return (
    <section>
        <div className='container text-center'>
            {
                title && <motion.h2 {...fadeInUp()} className='section-title'>{title}</motion.h2>
            }
            {
                subtitle && <motion.p className="max-w-[800px] mx-auto" {...fadeInUp(0.2)}>{subtitle}</motion.p>
            }
            
        </div>
        <div className='container max-w-[1200px] max-lg:mt-10 lg:mt-24'>
            <div className='flex flex-col lg:gap-42 max-lg:gap-10 max-lg:text-center'>
                {items && items.map((item,index)=>{
                    return (
                        <div className={`flex max-lg:flex-col lg:justify-between lg:items-center lg:gap-16 max-lg:gap-10 ${index%2!=0 && 'lg:flex-row-reverse'}`} key={index}>
                            <motion.div className="" {...fadeInUp()}>
                                <img className='mx-auto' src={item.image} alt={item.title} />
                            </motion.div>
                            <div className='lg:w-1/2'>
                                <motion.h3 {...fadeInUp(0.1)} className='section-title'>{item.title}</motion.h3>
                                <motion.p {...fadeInUp(0.3)}>{item.description}</motion.p>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default LeftRightGrid
