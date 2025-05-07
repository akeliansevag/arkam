import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import VerticalSlider from '@/app/components/VerticalSlider';

export const metadata = {
    title: 'Technologies | Open Ecosystem',
    description: 'Open Architecture',
}

const page = () => {
  const items = [
    {
        title: 'Opportunities for Innovation',
        description: '<ul><li>Cross-Industry Collaboration</li><li>API-Driven Ecosystems</li><li>Customized Offerings</li></ul>'
    },
    {
        title: 'Enhanced Customer Experience',
        description: '<ul><li>Seamless Integration</li><li>Real-Time Data Access</li><li>Streamlined Processes</li></ul>'
    },
    {
        title: 'Data-driven Insights',
        description: '<ul><li>Understanding Customer Needs</li><li>Risk Management</li><li>Targeted Marketing</li></ul>'
    },
    
  ]


  return (
    <>
        <Hero title="Open Ecosystem" />

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Connect & Innovate</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Arkam’s platform fosters partnership-driven innovation by enabling collaboration with leading fintechs and service providers to expand your offerings. It supports embedded finance capabilities, allowing you to offer Banking-as-a-Service and seamlessly integrate financial services directly into customer workflows. Additionally, you can leverage a curated marketplace of apps, tools, and APIs designed to meet the dynamic needs of modern banking.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/connect-innovate.svg' alt="Idea Lamp" />
                    </div>
                    
                </div>
            </div>
        </section>

        <section>
            <div className='container'>
                <div className='flex max-lg:flex-col items-center gap-10'>
                    <div className='max-lg:w-full lg:w-2/3'>
                        <div>
                         <VerticalSlider items={items} />
                        </div>
                        
                    </div>
                    <div className='lg:w-1/3'>
                        <img className='mx-auto' src='/img/hand-lamp.svg' alt="Hand Lamp" />
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default page;
