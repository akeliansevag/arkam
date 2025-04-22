'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextGrid = ({title,items}) => {
  return (
    <section>
        <div className="container">
          <motion.h2 {...fadeInUp()} className="text-center section-title">{title}</motion.h2>
          <div className="flex flex-wrap justify-center gap-y-16 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp(index / 10)}
                className="lg:w-[calc(100%/3)] text-center lg:px-14"
              >
                <div className='flex items-center justify-center mx-auto transition-all hover:brightness-120 w-[70px] h-[70px] bg-[linear-gradient(140deg,_#0C3D48_0%,_rgba(29,40,56,0.5)_100%)] rounded-xl'>
                  <img className='p-4' src={item.icon} alt={item.title} />
                </div>
                <h5 className="mt-6 small-title inline-block text-gray-200 hover:text-white">{item.title}</h5>
                <p className="mt-3">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconsTextGrid;
