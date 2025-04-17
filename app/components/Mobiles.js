'use client';
import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp } from '../config/animations';

const words = ['Innovation', 'Empowerment', 'Inclusion'];

const Mobiles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="container">
        <div className='flex lg:items-center max-lg:flex-col max-lg:gap-10 lg:gap-24'>
          <div className='lg:w-1/2'>
            <div className='relative w-full'>
              <div className='relative w-full z-10'>
                <Tilt gyroscope={true} tiltAngleYInitial={50} tiltReverse={true} transitionSpeed={1000} reset={true}>
                  <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='w-1/2'
                    src='/img/mobile-one.webp'
                    alt="Mobile One"
                  />
                  <motion.img
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='absolute -z-10 top-0 left-1/2 w-1/2 scale-50 blur-lg'
                    src='/img/mobile-two.webp'
                    alt="Mobile Two"
                  />
                </Tilt>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 max-lg:text-center'>
            <motion.h2 {...fadeInUp()} className="section-title !mb-0">ARKAM</motion.h2>

            <motion.h3
              className="font-avenir font-bold text-xl lg:text-4xl mb-3 lg:mb-5 text-center lg:text-left"
              {...fadeInUp(0.1)}
            >
              For{' '}
              <span className="inline-block relative align-middle text-secondary min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative -top-[2px] max-lg:-top-[1.8px] whitespace-nowrap"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h3>

            <motion.p {...fadeInUp(0.2)} className="!mb-0">
              With a commitment to excellence, our team collaborates closely with clients to understand their vision and objectives,
              crafting customized strategies that facilitate a smooth digital transformation.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mobiles;