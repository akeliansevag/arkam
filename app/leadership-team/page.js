import React from 'react';
import Hero from '../components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '../config/animations';
import IconsTextGridFour from '../components/IconsTextGridFour';


export const metadata = {
    title: 'Arkam | Leadership Team',
    description: 'At Arkam, our success is driven by a pivotal team of industry experts dedicated to transforming the financial landscape. Each member of our team brings a unique perspective and a proven track record in their respective fields, allowing us to provide unparalleled insights into the challenges and opportunities faced by businesses today.',
  }

const page = () => {

  const TransformStream= [
    {
        icon: '/img/person.svg',
        title: 'Montasser Hashem',
        description: 'Founder and Chairman of Monty Holding'
    },
    {
        icon: '/img/person.svg',
        title: 'Assaad Khoury',
    },
    {
        icon: '/img/person.svg',
        title: 'Shirine Mroueh',
    },
    {
        icon: '/img/person.svg',
        title: 'Armand Magharian',
        description: 'Chief Sales Officer',
    },
    {
        icon: '/img/person.svg',
        title: 'Rabih Sassine',
    },
    {
        icon: '/img/person.svg',
        title: 'Elias Kahwaji',
    },
  ];

  return (
    <>
        <Hero title="Leadership Team" description="At Arkam, our success is driven by a pivotal team of industry experts dedicated to transforming the financial landscape. Each member of our team brings a unique perspective and a proven track record in their respective fields, allowing us to provide unparalleled insights into the challenges and opportunities faced by businesses today." />
        
        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>With a commitment to excellence</motion.h2>
                        <motion.div className="" {...fadeInUp(0.2)}>Our team collaborates closely with clients to understand their vision and objectives, crafting customized strategies that facilitate a smooth digital transformation. From implementing cutting-edge technologies to navigating regulatory requirements, we are here to empower businesses at every step of their journey.</motion.div>
                        <motion.blockquote {...fadeInUp(0.3)}>
                        At Arkam, we believe that the future of finance is digital, and our dedicated team is passionate about helping you embrace this future with confidence. Together, we can redefine what’s possible in the financial sector and create lasting impact through innovation and collaboration.
                        </motion.blockquote>
                        
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/handshake.svg' alt="People" />
                    </div>
                    
                </div>
            </div>
        </section>

        <IconsTextGridFour title="The People Making All the Difference" items={TransformStream}/>
    
    </>
  )
}

export default page;
