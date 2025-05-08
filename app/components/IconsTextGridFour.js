'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextGridFour = ({title,items,light,description}) => {
  return (
    <section>
        <div className="container max-w-[1200px]">
          <motion.h2 {...fadeInUp()} className="text-center section-title">{title}</motion.h2>
          {
            description && <motion.p className="text-center" {...fadeInUp(0.1)}>{description}</motion.p>
          }
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
              <motion.div className="w-[300px]" key={index} {...fadeInUp(index / 10)}>
                <div className={`text-center aspect-video flex items-center justify-center lg:p-10 max-lg:p-5 rounded-2xl ${light ? 'light-icon' : 'dark-icon'}`}>
                  <img className='mx-auto' src={item.icon} alt={item.title} />
                </div>
                <div className='text-center'>
                  <h5 className="mt-6 small-title inline-block text-gray-200 hover:text-white">{item.title}</h5>
                  {
                    item.description && (
                      <p className="mt-3">{item.description}</p>
                    )
                  }
                  
                </div>
              </motion.div>              
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconsTextGridFour;
