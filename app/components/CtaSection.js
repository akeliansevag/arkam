'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const CtaSection = ({title,description, cta, cta2}) => {
  return (
    <div className='bg-primary-900 lg:mt-24 max-lg:mt-10'>
      <div className='container max-w-[1200px]'>
        <div className='overflow-hidden flex flex-col gap-3 bg-[linear-gradient(112.62deg,_rgba(29,40,56,0.5)_0%,_rgba(29,40,56,0)_100%)] text-center lg:py-14 lg:px-24 max-lg:p-8 rounded-2xl relative'>
            <div className='absolute top-0 bg-[#0C3D48] opacity-60 blur-xl w-full z-10 h-10 '></div>
              <motion.h2 {...fadeInUp()} className='section-title'>{title}</motion.h2>
              <motion.p {...fadeInUp(0.1)}>{description}</motion.p>
              <div className='flex max-lg:flex-col lg:items-center lg:justify-center lg:gap-3 max-lg:gap-2'>
                {
                    cta && (
                        <motion.div {...fadeInUp(0.2)}>
                            <Link className="button-primary" href={cta.link}>{cta.text}</Link>
                        </motion.div>
                        
                    )
                  }
                  {

                    cta2 && (
                      <motion.div {...fadeInUp(0.2)}>
                          <Link className="button-outline" href={cta2.link}>{cta2.text}</Link>
                      </motion.div>
                      
                  )
                }
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default CtaSection;
