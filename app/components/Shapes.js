'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const Shapes = () => {
  return (
    <motion.div {...fadeInUp(0.4)} className='relative max-w-[950px] mx-auto w-full lg:mt-24 max-lg:mt-10'>
        <div className='relative w-full z-10 left-[10%]'>
            <Tilt transitionSpeed={8000} perspective={3000} trackOnWindow={true} reset={false}>
                <svg className='w-full aspect-[925/499]' viewBox="0 0 925 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.249331 413.153L924.44 498.998L293.728 0.954812L0.249331 413.153Z" fill="url(#paint0_linear_627_1563)"/>
                    <path d="M0.249331 413.153L924.44 498.998L293.728 0.954812L0.249331 413.153Z" fill="url(#paint1_linear_627_1563)" fillOpacity="0.2"/>
                    <defs>
                    <linearGradient id="paint0_linear_627_1563" x1="431.107" y1="13.7156" x2="618.709" y2="609.868" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0B202A"/>
                    <stop offset="0.519231" stopColor="#0B202A" stopOpacity="0.600192"/>
                    <stop offset="1" stopColor="#003C52"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_627_1563" x1="123.662" y1="173.757" x2="737.506" y2="418.655" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0C3D48"/>
                    <stop offset="1" stopColor="#0C3D48" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </Tilt>
            
        </div>
        <div className='absolute w-full z-0 top-50'>
            <Tilt transitionSpeed={8000} perspective={1300} reset={false} trackOnWindow={true} tiltReverse={true}>
                <svg className='w-full aspect-[1035/432]'  viewBox="0 0 1035 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.793622 431.329L1034.14 108.754L106.068 0.237031L0.793622 431.329Z" fill="url(#paint0_linear_627_1562)"/>
                    <path d="M0.793622 431.329L1034.14 108.754L106.068 0.237031L0.793622 431.329Z" fill="url(#paint1_linear_627_1562)" fillOpacity="0.2"/>
                    <defs>
                    <linearGradient id="paint0_linear_627_1562" x1="227.086" y1="212.075" x2="755.232" y2="257.761" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#083C48"/>
                    <stop offset="1" stopColor="#0C3D48" stopOpacity="0.16"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_627_1562" x1="14.6767" y1="200.076" x2="720.716" y2="364.69" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0C3D48" stopOpacity="0"/>
                    <stop offset="1" stopColor="#0C3D48"/>
                    </linearGradient>
                    </defs>
                </svg>
            </Tilt>
           
        </div>
    </motion.div>
  )
}

export default Shapes;
