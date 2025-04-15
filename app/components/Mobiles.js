'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const Mobiles = () => {
  return (
    <motion.div {...fadeInUp()} className='relative w-full'>
        <div className='relative w-full z-10 left-[10%]'>
            <Tilt trackOnWindow={true} reset={false}>
                <img className='lg:w-1/2' src='/img/mobile-one.webp' alt="Mobile One" />
            </Tilt>
        </div>
        <div className='absolute w-full z-0 top-0 left-full -translate-x-1/2'>
            <Tilt reset={false} trackOnWindow={true} tiltReverse={true}>
                <img className='lg:w-1/2 scale-50 blur-lg' src='/img/mobile-two.webp' alt="Mobile Two" />
            </Tilt>
        </div>
    </motion.div>
    // <div className="min-h-screen flex items-center justify-center bg-gray-900">
    //   <Tilt
    //     trackOnWindow={true}
    //     glareEnable={true}
    //     glareMaxOpacity={0.45}
    //     scale={1.02}
    //     perspective={1000}
    //     onMove={({ tiltAngleX, tiltAngleY }) => {
    //       console.log("X:", tiltAngleX, "Y:", tiltAngleY);
    //     }}
    //     className="w-[300px] h-[500px] bg-white shadow-xl rounded-xl flex items-center justify-center"
    //   >
    //     <h2 className="text-black font-bold text-xl">Tilt Me</h2>
    //   </Tilt>
    // </div>
  )
}

export default Mobiles;
