'use client';
import React from 'react';
import Shapes from './Shapes';
import { motion } from "motion/react";
import { fadeInUpOnMount } from '../config/animations';

const Hero = ({title,subtitle,description,cta}) => {
  return (
    <section>
        <div className="container text-center">
            <div className="max-w-[1100px] mx-auto">
                {title && <motion.h1 {...fadeInUpOnMount()} className="text-3xl lg:text-5xl xl:text-8xl leading-tight">{title}</motion.h1>}
                {subtitle && <motion.h2 {...fadeInUpOnMount(0.1)} className="text-xl lg:text-2xl xl:text-3xl">{subtitle}</motion.h2>}
                {description && <motion.p {...fadeInUpOnMount(0.2)}>{description}</motion.p>}
                {cta && <motion.a {...fadeInUpOnMount(0.3)} href={cta.link} className="button-primary">{cta.text}</motion.a>}
            </div>
            <Shapes />        
        </div>
    </section>
  )
}

export default Hero;
