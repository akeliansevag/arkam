import React from 'react';
import Hero from '../components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '../config/animations';
import IconsTextGridFour from '../components/IconsTextGridFour';
import IconsTextBlock from '../components/IconsTextBlock';
import JobOpenings from '../components/JobOpenings';


export const metadata = {
    title: 'Arkam | Join Our Team',
    description: 'Arkam is on the lookout for talented individuals who share our passion for fintech and are eager to make an impact.',
  }

const page = () => {

  const why= [
    {
        icon: '/img/small-person.svg',
        title: 'Innovative Environment',
        description: 'Be part of a forward-thinking company that values creativity and encourages new ideas.'
    },
    {
        icon: '/img/culture.svg',
        title: 'Collaborative Culture',
        description: 'Join a diverse team of professionals who work together to achieve common goals and support each other\'s growth.'
    },
    {
        icon: '/img/career.svg',
        title: 'Career Development',
        description: 'We are committed to your professional development, offering training and mentorship opportunities to help you succeed.'
    },
  ];

  return (
    <>
        <Hero title="Join Our Team" description="Arkam is on the lookout for talented individuals who share our passion for fintech and are eager to make an impact." />
        
        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Why Work with Us?</motion.h2>
                        <div className='mt-10'>
                            <IconsTextBlock greenIcons={true} items={why} />
                        </div>
                        
                        
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/bag.svg' alt="Bag" />
                    </div>
                    
                </div>
            </div>
        </section>
        <JobOpenings />
    </>
  )
}

export default page;
