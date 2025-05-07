import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import IconsTextGridFour from '@/app/components/IconsTextGridFour';

export const metadata = {
    title: 'Technologies | Orchestration Integration',
    description: 'Security and regulatory compliance are pivotal in our technology. Our software is developed with the most advanced security mechanisms and our technology complies with international regulatory and security standards.',
}

const page = () => {
  const items = [
    {
        icon: '/img/banks.svg',
        title: 'Banks',
    },
    {
        icon: '/img/currency-exchange.svg',
        title: 'Currency Exchange',
    },
    {
        icon: '/img/kyc.svg',
        title: 'KYC/AML',
    },
    {
        icon: '/img/card-issuing.svg',
        title: 'Card Issuing',
    },
    {
        icon: '/img/card-acquiring.svg',
        title: 'Card Acquiring',
    },
    {
        icon: '/img/sms.svg',
        title: 'SMS',
    },
  ]



  return (
    <>
        <Hero title="Orchestration Integration" description="At the core of our services is an extensive network of trusted global partners, established to connect you to an all-inclusive Core Banking Solution." />

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Flexible Integration Options</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Our services are designed to accommodate your unique business needs. Additional partners and services can be seamlessly integrated while ensuring a smooth and seamless process.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/flexible-integration.svg' alt="Flexible Integration" />
                    </div>
                    
                </div>
            </div>
        </section>

        <IconsTextGridFour description="This robust network of partnerships ensures that your banking system is well-equipped to meet the increasing demands of the modern financial world." title="Our Partners Portfolio Includes" items={items} />
        
    </>
  )
}

export default page;
