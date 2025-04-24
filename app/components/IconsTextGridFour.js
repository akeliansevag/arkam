'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextGridFour = ({title,items}) => {
  return (
    <section>
        <div className="container max-w-[1200px]">
          <motion.h2 {...fadeInUp()} className="text-center section-title">{title}</motion.h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-1 justify-center gap-8 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
              <motion.div key={index} {...fadeInUp(index / 10)}>
                <div className="text-center aspect-video flex items-center justify-center lg:p-10 max-lg:p-5 rounded-2xl bg-[linear-gradient(135.24deg,_rgba(29,40,56,0.5)_0%,_rgba(29,40,56,0)_100%)]">
                  <img className='mx-auto' src={item.icon} alt={item.title} />
                </div>
                <div className='text-center'>
                  <h5 className="mt-6 small-title inline-block text-gray-200 hover:text-white">{item.title}</h5>
                  <p className="mt-3">{item.description}</p>
                </div>
              </motion.div>              
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconsTextGridFour;
