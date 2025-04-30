'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextGridFive = ({title,description,items}) => {
  return (
    <section className='bg-gradient-blue'>
        <div className="container">
          <motion.h2 {...fadeInUp()} className="text-center section-title">{title}</motion.h2>
          {
            description && (
              <motion.div className="max-w-[800px] mx-auto text-center">{description}</motion.div>
            )
            
          }
          <div className="text-center flex flex-wrap justify-center gap-8 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp(index / 10)}
              >
                <motion.div {...fadeInUp(0.1)} className='bg-gradient rounded-2xl'>
                  <img src={item.icon} alt={item.title} />
                </motion.div>
                <motion.h5 {...fadeInUp(0.2)} className= "mt-8 small-title inline-block text-gray-200 hover:text-white">{item.title}</motion.h5>
                <motion.p {...fadeInUp(0.3)} className="mt-3 !mb-0">{item.description}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconsTextGridFive;
