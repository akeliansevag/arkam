'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const CtaContact = () => {
  return (
    <div className='bg-primary-900 lg:mt-24 max-lg:mt-10'>
      <div className='mx-auto max-w-[1100px]'>
        <div className='overflow-hidden items-center flex flex-col gap-3 bg-[linear-gradient(112.62deg,_rgba(29,40,56,0.5)_0%,_rgba(29,40,56,0)_100%)] text-center lg:py-14 lg:px-24 max-lg:p-8 rounded-2xl relative'>
            <div className='absolute top-0 bg-[#0C3D48] opacity-60 blur-xl w-full z-10 h-10 '></div>
              <motion.h2 {...fadeInUp()} className='section-title'>Contact Us</motion.h2>
              <div>
                  <motion.div {...fadeInUp(0.1)} className="flex items-center gap-3">
                    <div>
                      <img src='/img/phone.svg' />
                    </div>
                    <div>
                      Phone: +961 71 871 871
                    </div>
                  </motion.div>  
              </div>

              <div>
                  <motion.div {...fadeInUp(0.2)} className="flex items-center gap-3">
                      <div>
                        <img src='/img/pin.svg' />
                      </div>
                      <div>
                        Address: Gefinor Center - Block E - Level LG
                      </div>
                  </motion.div> 
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default CtaContact;
