'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextBlock = ({title,items,background,light,backgroundClass}) => {
  return (
    <div className={`${backgroundClass ? backgroundClass : ''} rounded-2xl ${background && 'p-10'}`}>
      {
        title && (
          <motion.h3 className="small-title mb-8" {...fadeInUp(0)}>{title}</motion.h3>
        )
        
      }
      
      <div className="flex flex-col gap-8">
          {
            items && items.map((item,index)=>{
              return (
                <div key={index} className='flex items-center gap-3'>
                  <div className={`w-[70px] h-[70px] rounded-2xl ${light ? 'light-icon' : 'bg-gradient-140'}  flex items-center justify-center`}>
                    <img src={item.icon} alt={item.title}/>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <motion.h5 {...fadeInUp(0.1)} >{item.title}</motion.h5>
                    <motion.p className="!mb-0 text-base" {...fadeInUp(0.2)}>{item.description}</motion.p>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default IconsTextBlock;
