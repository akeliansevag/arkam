import React from 'react';
import Link from 'next/link';
import * as motion from "motion/react-client";
import { fadeInUpOnMount } from "./config/animations";
import Shapes from './components/Shapes';
import Newsletter from './components/Newsletter';

export const metadata = {
  title: 'Arkam | 404',
  description: 'Page Not Found',
}

const NotFound = () => {
  return (
    <>
      <section>
          <div className="container text-center">
              <div className="max-w-[1100px] mx-auto">
                  <motion.h1 {...fadeInUpOnMount()} className="text-3xl lg:text-5xl xl:text-8xl leading-tight">404</motion.h1>
                  <motion.h2 {...fadeInUpOnMount(0.1)} className="text-xl lg:text-2xl xl:text-3xl">Not Found</motion.h2>
                  <motion.p {...fadeInUpOnMount(0.2)}>Could not find requested page</motion.p>
                  <motion.div {...fadeInUpOnMount(0.3)}>
                    <Link href="/" className="button-primary">Return Home</Link>
                  </motion.div>
              </div>
              <Shapes />
          </div>
      </section>
      <Newsletter />
    </>
    
  )
}

export default NotFound;
