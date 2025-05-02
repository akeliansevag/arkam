'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextGridThree = ({title,description,items,layout}) => {
  return (
    <section>
        <div className="container">
          <motion.h2 {...fadeInUp()} className="text-center section-title">{title}</motion.h2>
          {
            description && (
              <motion.p className="max-w-[800px] mx-auto text-center">{description}</motion.p>
            )
            
          }
          <div className="flex flex-wrap justify-center gap-8 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp(index / 10)}
                className={`${(layout && layout=='two' ? 'text-left bg-gradient-light' : 'text-center bg-gradient')} lg:p-10 max-lg:p-5 rounded-2xl w-[450px]`}
              >
                <div className={`${(layout && layout=="two") ? 'flex gap-4 items-center' : ''} max-lg:flex-col`}>
                  <img className={`${(layout && layout=="two") ? '' : 'mx-auto'}`} src={item.icon} alt={item.title} />
                  <h5 className={`${(layout && layout=="two") ? '' : 'mt-6'}  small-title inline-block text-gray-200 hover:text-white`}>{item.title}</h5>
                </div>
                <p className="mt-3 !mb-0 max-lg:text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconsTextGridThree;
