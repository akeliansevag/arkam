import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import IconsTextGrid from '@/app/components/IconsTextGrid';

export const metadata = {
    title: 'Technologies | Open Architecture',
    description: 'Open Architecture',
}

const page = () => {
  const items = [
    {
        icon: '/img/ecosystems-win.svg',
        title: 'Ecosystems Win',
        description: 'Simultaneous innovation across all areas is challenging for any single entity, but not for a healthy ecosystem of focused vendors.'
    },
    {
        icon: '/img/cloud-first.svg',
        title: 'Cloud-first Always',
        description: 'When composable components are cloud based, it means 24/7 availability, accessibility, scalability and security.'
    },
    {
        icon: '/img/api.svg',
        title: 'Essential Open APIs',
        description: 'High-quality and well-documented APIs enable the modular design to function effectively, promoting integration, scalability, and innovation.'
    },
    {
        icon: '/img/developer.svg',
        title: 'Developer Freedom',
        description: 'Open APIs and accessible components enable developers to explore, experiment, and build without roadblocks making it easier to trial and test.'
    },
    {
        icon: '/img/seamless-scaling.svg',
        title: 'Seamless Scaling',
        description: 'It ensures that systems can handle sudden increases in traffic while constantly providing a seamless user experience and optimizing resource use.'
    },
    {
        icon: '/img/continuous.svg',
        title: 'Continuous Delivery',
        description: 'Shift your focus away from large, disruptive upgrades and embrace a continuous delivery model, to remain agile, innovate faster, and ensure you meet customer expectations more effectively.'
    },
    {
        icon: '/img/usage.svg',
        title: 'Usage Based Pricing',
        description: 'By tying pricing to usage instead of rigid licenses, scaling and adjusting systems is based on actual demand, promoting cost efficiency and predictability.'
    },
    {
        icon: '/img/tools.svg',
        title: 'Independent Tools',
        description: 'Relying on open standards and vendor-independent tools streamlines the integration process, making it easier to add new services and ensuring long-term adaptability.'
    },
    {
        icon: '/img/self-contained.svg',
        title: 'Self-contained Components',
        description: 'Each takes care of a specific business process, end-to-end, and are designed to integrate seamlessly allowing for the building of more adaptable, modular systems.'
    },
    {
        icon: '/img/composable-platform.svg',
        title: 'Composable Platform',
        description: 'Represents a system designed for rapid change. Innovation, new services, and customer experiences won\'t be bogged down by the complexities of maintaining a monolithic core system.'
    },
  ]


  return (
    <>
        <Hero title="Composability " />

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Innovation, Flexibility, Empowering</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Arkam is your trusted partner at every stage of your transformation journey, no matter your unique needs. Our tailored services and solutions are designed to drive your digital transformation with agility, innovation, and flexibility, empowering your organization to thrive in a rapidly evolving landscape.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/big-fist.svg' alt="licensing" />
                    </div>
                    
                </div>
            </div>
        </section>

        <IconsTextGrid title="Composability" items={items} />
        
    </>
  )
}

export default page;
