'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react";

const Mobiles = () => {
  return (
    <div className='relative w-full'>
        <div className='relative w-full z-10'>
            <Tilt tiltAngleYInitial={50} tiltReverse={true} transitionSpeed={1000} reset={true}>
                <motion.img initial={{scale:0}} whileInView={{scale:1}}  transition={{ duration: 0.2, delay: 0 }} viewport={{once: true, amount: 0.3}} className='lg:w-1/2' src='/img/mobile-one.webp' alt="Mobile One" />
                <motion.img initial={{scale:0}} whileInView={{scale:1}}  transition={{ duration: 0.2, delay: 0.2 }} viewport={{once: true, amount: 0.3}} className='absolute top-0 left-1/2 lg:w-1/2 scale-50 blur-lg' src='/img/mobile-two.webp' alt="Mobile Two" />
            </Tilt>
        </div>
    </div>
  )
}

export default Mobiles;
