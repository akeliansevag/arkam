import React from 'react';
import Hero from '@/app/components/Hero';
import LeftRightGrid from '@/app/components/LeftRightGrid';
import HorizontalSlider from '@/app/components/HorizontalSlider';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';

export const metadata = {
    title: 'Technologies | Open Architecture',
    description: 'Open Architecture',
}

const page = () => {
  const items = [
    {
        image: '/img/real-time.svg',
        title: 'Real-time',
        description: 'Deliver instant data updates and responsive actions to users across systems.'
    },
    {
        image: '/img/robust-and-scalable.svg',
        title: 'Robust & Scalable',
        description: 'Seamlessly grow your infrastructure and handle increasing demand without compromising performance.'
    },
    {
        image: '/img/platform-independent.svg',
        title: 'Platform Independent',
        description: 'Integrate and operate across diverse platforms with full flexibility and compatibility.'
    },
    {
        image: '/img/services-oriented.svg',
        title: 'Services Oriented Architecture',
        description: 'Modular, reusable services designed for flexibility and fast deployment.'
    },
    {
        image: '/img/omnichannel.svg',
        title: 'Omnichannel & Responsive UX',
        description: 'Ensure a seamless user experience across all devices and channels.'
    },
    {
        image: '/img/apis.svg',
        title: 'APIs',
        description: 'Unlock unlimited integration possibilities with open, well-documented APIs for third-party services.'
    },
    {
        image: '/img/cloud-agnostic.svg',
        title: 'Cloud-agnostic',
        description: 'Operate across multiple cloud platforms with no dependence on a single provider, ensuring maximum flexibility.'
    },
  ]


  return (
    <>
        <Hero title="Open Architecture" />

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Adapt to Change. Build for the Future</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Arkam’s open architecture provides your organization with a modular, scalable foundation designed to adapt to evolving market demands. It enables seamless integration with existing infrastructure and third-party services through robust APIs, ensuring compatibility and efficiency. With customizable modules, you can tailor solutions to meet specific operational and regulatory requirements. Moreover, our platform offers future-proof scalability, empowering your business to stay ahead as it grows and evolves.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/adapt.svg' alt="licensing" />
                    </div>
                    
                </div>
            </div>
        </section>

        <LeftRightGrid items={items} />
        
    </>
  )
}

export default page;
