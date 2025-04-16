import React from 'react';
import Link  from 'next/link';
import Newsletter from './Newsletter';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';

const Footer = () => {
  return (
    <footer className='max-lg:py-10 lg:py-24'>
      <Newsletter />
      <div className='container max-lg:mt-10 lg:mt-24'>
        <div className='flex max-lg:flex-col max-lg:gap-10 max-lg:text-center justify-between'>
            <motion.div {...fadeInUp(0)} className='lg:w-1/3'>
                <Link className="mb-4 inline-block" href="/"><img src='/img/logo.svg' alt="Arkam logo"/></Link>
                <p className='!mb-0'>Arkam provides a comprehensive digital
                foundation for fintech and digital banks looking to launch and scale effectively.</p>
                <a href='mailto:info@arkam.com' className='underline mt-3 inline-block'>info@arkam.com</a>
            </motion.div>
            <motion.div {...fadeInUp(0.2)}>
                <h5>Quick Links</h5>
                <ul className='footer-menu'>
                  <li><Link href="/">Core banking</Link></li>
                  <li><Link href="/">Digital Wallet</Link></li>
                  <li><Link href="/">Digital Product</Link></li>
                  <li><Link href="/">Consultancy</Link></li>
                </ul>
            </motion.div>
            <motion.div {...fadeInUp(0.3)}>
                <h5>Connect</h5>
                <ul className='footer-menu'>
                  <li><Link href="/">Facebook</Link></li>
                  <li><Link href="/">Instagram</Link></li>
                  <li><Link href="/">Twitter</Link></li>
                  <li><Link href="/">YouTube</Link></li>
                </ul>
            </motion.div>
            <motion.div {...fadeInUp(0.4)}>
                <h5>Arkam</h5>
                <ul className='footer-menu'>
                  <li><Link href="/">Company</Link></li>
                  <li><Link href="/">Media</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                </ul>
            </motion.div>
        </div>
        <div className='max-lg:mt-10 lg:mt-24 max-lg:text-center'>
          <motion.p {...fadeInUp(0)} className='text-base !mb-0'>&copy; 2025 Arkam</motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
