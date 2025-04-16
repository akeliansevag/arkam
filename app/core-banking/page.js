import React from 'react';
import Mobiles from '../components/Mobiles';
import * as motion from "motion/react-client";
import { fadeInUp } from "../config/animations";

const page = () => {
  return (
    <section>
        <div className="container">
          <div className='flex lg:items-center max-lg:flex-col max-lg:gap-10 lg:gap-24'>
            <div className='lg:w-1/2'>
              <motion.h2 {...fadeInUp()} className="section-title">ARKAM</motion.h2>
              <motion.h3 {...fadeInUp(0.1)}>For Inclusion</motion.h3>
              <motion.p {...fadeInUp(0.2)}>With a commitment to excellence, our team collaborates closely withclients to understand their vision and objectives,
crafting customized strategies that facilitate a smooth digital transformation.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default page;
