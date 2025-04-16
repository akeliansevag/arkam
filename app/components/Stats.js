'use client';
import React from 'react';
import CountUp from 'react-countup';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const Stats = () => {
  return (
    <>
      <motion.div {...fadeInUp(0)} className='number-box max-w-[425px] lg:translate-x-1/3'>
        <h5>
          <CountUp
            end={1.8}
            decimals={1}
            duration={2}
            scrollSpyDelay={0.3}
            enableScrollSpy
            scrollSpyOnce
          />M+
        </h5>
        <span>Wallet Installs</span>
      </motion.div>

      <div className='flex gap-5 max-lg:flex-col'>
        <motion.div {...fadeInUp(0.2)} className='number-box w-full'>
          <h5>
            <CountUp

              end={58.3}
              decimals={1}
              duration={2}
              scrollSpyDelay={0.5}
              enableScrollSpy
              scrollSpyOnce
            />M
          </h5>
          <span>Marketplace Volume</span>
        </motion.div>

        <motion.div {...fadeInUp(0.3)} className='number-box light w-full'>
          <h5>
            <CountUp
              end={2.4}
              decimals={1}
              duration={2}
              scrollSpyDelay={0.7}
              enableScrollSpy
              scrollSpyOnce
            />B
          </h5>
          <span>Created Assets</span>
        </motion.div>
      </div>

      <motion.div {...fadeInUp(0.4)} className='number-box light max-w-[425px] lg:translate-x-1/5'>
        <h5>
          <CountUp
            end={120}
            duration={2}
            scrollSpyDelay={0.9}
            enableScrollSpy
            scrollSpyOnce
          />+
        </h5>
        <span>Partners Worldwide</span>
      </motion.div>
    </>
  );
};

export default Stats;