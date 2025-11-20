'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';


const IconsTextGridFour = ({title,items,light,description}) => {
  return (
    <section>
        <div className="container max-w-[1200px]">
          <h2 className="text-center section-title">{title}</h2>
          {
            description && <p className="text-center" >{description}</p>
          }
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 lg:mt-18 max-lg:mt-10">
            {items && items.map((item, index) => (
              <div className="w-[300px]" key={index} >
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
              </div>              
            ))}
          </div>
        </div>
      </section>
  )
}

export default IconsTextGridFour;
