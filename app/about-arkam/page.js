import React from 'react';
import Hero from '../components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '../config/animations';
import IconsTextGridThree from '../components/IconsTextGridThree';


export const metadata = {
    title: 'Arkam | About Us',
    description: 'Arkam provides a comprehensive digital foundation for fintechs and digital banks looking to launch and scale effectively.',
  }

const page = () => {

  const services= [
    {
        icon: '/img/tech.svg',
        title: 'Tech For Inclusion',
        description: 'Our mission is to promote financial inclusion by empowering businesses to embrace digital transformation, creating a more connected and accessible financial ecosystem for all.'
    },
    {
        icon: '/img/eye.svg',
        title: 'Tech for Innovation',
        description: 'We envision ourselves as key enablers in the future of finance, providing innovative fintech solutions that shape and enhance the digital financial landscape.'
    },
    {
        icon: '/img/tech-2.svg',
        title: 'Tech for Empowerment',
        description: 'Empowering businesses with digital solutions that reshape their services, reduce costs, and unlock new revenue streams.'
    },
  ];

  return (
    <>
        <Hero title="About Arkam" description="Arkam provides a comprehensive digital foundation for fintechs and digital banks looking to launch and scale effectively." />
        
        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>About Us</motion.h2>
                        <motion.div className="" {...fadeInUp(0.2)}>Our advanced core banking platform takes care of the technical heavy lifting, allowing you to focus on what truly matters: driving innovation and creating exceptional customer experiences.</motion.div>
                        <motion.blockquote {...fadeInUp(0.3)}>
                        In addition to our robust technical infrastructure, we offer valuable business advisory services and fintech licensing support. Whether you’re disrupting personal finance or reinventing B2B payments, you can rely on Arkam's all-in-one solutions to empower your digital transformation.
                        </motion.blockquote>
                        <motion.div className="mt-5" {...fadeInUp(0.4)}>By leveraging our extensive expertise to navigate the complexities of market entry and regulatory compliance, you ensure a smoother path to success. Our flexible, modular platform is designed to adapt to your unique vision and the specific needs of your customers, ensuring that you can pivot and grow in an ever-evolving landscape.</motion.div>
                        <motion.div className="mt-5" {...fadeInUp(0.5)}>Begin your fintech journey with a secure and compliant foundation engineered for sustainable growth. Arkam enables you to embrace the future of digital banking today. Join us in shaping the next generation of financial services, where innovation meets reliability.</motion.div>
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/people.svg' alt="People" />
                    </div>
                    
                </div>
            </div>
        </section>

        <IconsTextGridThree description="Turn onboarding into a tailored journey that excites and engages new customers." title="Personalized Welcome & Engagement" items={services}/>
    
    </>
  )
}

export default page;
