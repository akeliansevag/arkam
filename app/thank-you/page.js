import React from 'react';
import Link from 'next/link';
import * as motion from "motion/react-client";
import { fadeInUpOnMount } from "../config/animations";
import Shapes from '../components/Shapes';
import Newsletter from '../components/Newsletter';

export const metadata = {
  title: 'Arkam | Thank You',
  description: 'Thank You For Reaching Out',
}

const ThankYou = () => {
  return (
    <>
      <section>
          <div className="container text-center">
              <div className="max-w-[1100px] mx-auto">
                  <motion.h1 {...fadeInUpOnMount()} className="text-3xl lg:text-5xl xl:text-6xl leading-tight">Thank you for reaching out.</motion.h1>
                  <motion.h2 {...fadeInUpOnMount(0.1)} className="text-xl lg:text-2xl xl:text-3xl">Your message has been submitted successfully.</motion.h2>
                  <motion.p {...fadeInUpOnMount(0.2)}>A member of our team will contact you as soon as possible.</motion.p>
                  <motion.div {...fadeInUpOnMount(0.3)}>
                    <Link href="/" className="button-primary">Return Home</Link>
                  </motion.div>
              </div>
              <Shapes />
          </div>
      </section>
    </>
    
  )
}

export default ThankYou;
