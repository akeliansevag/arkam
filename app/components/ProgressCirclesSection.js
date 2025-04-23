'use client';
import React from 'react'
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';
import ProgressCircle from './ProgressCircle';

const ProgressCirclesSection = ({title,items}) => {
  return (
    <section className='max-lg:overflow-x-hidden max-lg:overflow-y-hidden'>
      <div className='container'>
        <motion.h2 className="section-title text-center">{title}</motion.h2>
        {/* <div className='grid max-lg:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-x-1 max-lg:gap-y-14 lg:gap-y-10 lg:mt-24 max-lg:mt-10'>
            {
                items && items.map((item,index)=>{
                    return (
                        <motion.div className="w-full flex justify-center" key={index} {...fadeInUp(index/10)}>
                            <ProgressCircle hideArrow={items.length == index+1 ? true : false} title={item.title} description={item.description} number={index+1} />
                        </motion.div>
                    )
                })
            }
        </div> */}
        <div className='lg:mt-24 max-lg:mt-10 text-center'>
            {
                items && items.map((item,index)=>{
                    return (
                        <motion.div className="w-full lg:w-[calc(100%/4)] lg:min-w-[350px] inline-flex justify-center" key={index} {...fadeInUp(index/10)}>
                            <ProgressCircle hideArrow={items.length == index+1 ? true : false} title={item.title} description={item.description} number={index+1} />
                        </motion.div>
                    )
                })
            }
        </div>
      </div>
      
      
    </section>
  )
}

export default ProgressCirclesSection
