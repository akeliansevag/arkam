'use client';
import React from 'react';
import Shapes from './Shapes';
import { motion } from "motion/react";
import { fadeInUpOnMount } from '../config/animations';
import Link from 'next/link';


const Hero = ({title,subtitle,description,subsubtitle,cta}) => {
  return (
    <section>
        <div className="container text-center">
            <div className="mx-auto">
                {title && <motion.h1 {...fadeInUpOnMount()} className="text-3xl lg:text-5xl xl:text-8xl leading-tight">{title}</motion.h1>}
                {subtitle && <motion.h2 {...fadeInUpOnMount(0.1)} className="text-xl lg:text-2xl">{subtitle}</motion.h2>}
                {subsubtitle && <motion.h3 {...fadeInUpOnMount(0.2)} className="text-secondary mb-4 text-xl lg:text-2xl xl:text-3xl">{subsubtitle}</motion.h3>}
                {description && 
                  ( 
                    <div className='max-w-[1000px] mx-auto'>
                      <motion.p dangerouslySetInnerHTML={{ __html: description }} {...fadeInUpOnMount(0.3)} />
                    </div>
                    
                  )
                }

                {cta && 
                  <motion.div {...fadeInUpOnMount(0.4)}>
                    <Link {...fadeInUpOnMount(0.5)} href={cta.link} className="button-primary">{cta.text}</Link>  
                  </motion.div>
                  
                }
            </div>
            <Shapes />        
        </div>
    </section>
  )
}

export default Hero;
