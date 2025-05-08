import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';
import IconsTextGrid from '@/app/components/IconsTextGrid';

export const metadata = {
    title: 'Solution | Corporate Banking',
    description: 'Transform your business by embracing a digital strategy with Monty Tech’s Corporate Banking Solution. Enhance efficiency, profitability, and resilience with our core-agnostic, cloud-native platform that seamlessly integrates all aspects of corporate banking.',
}

const page = () => {
  const items = [
    {
        icon: '/img/unified-solution.svg',
        title: 'Unified Solution',
        description: 'Arkam’s delivers a unified solution that supports all key instrument classes in corporate banking. With embedded data and analytics, it provides valuable insights to drive operational optimization and improve efficiency.'
    },
    {
        icon: '/img/independent-management.svg',
        title: 'Independent Management',
        description: 'Arkam’s solution empowers corporations to independently manage their business with our solution that supports the entire corporate banking value chain from digital interactions to transaction processing, messaging, and payment interfaces.'
    },
    {
        icon: '/img/tech-for-powerment.svg',
        title: 'Tech for Empowerment',
        description: 'Empowering businesses with digital solutions that reshape their services, reduce costs, and unlock new revenue streams.'
    },
  ]

  const items_two = [
    {
        icon: '/img/digital-corporate-lending.svg',
        title: 'Digital Corporate Lending',
        description: 'Advanced process frameworks for greater efficiency.'
    },
    {
        icon: '/img/credit-management.svg',
        title: 'Credit Management',
        description: 'Streamlined credit origination and management.'
    },
    {
        icon: '/img/cash-liquidity.svg',
        title: 'Cash & Liquidity Management',
        description: 'Powerful AI-driven analytics.'
    }, 
    {
        icon: '/img/multi-currency-treasury.svg',
        title: 'Multi-Currency Treasury',
        description: 'Featuring tools like overdrafts on notice accounts and much more.'
    }, 
    {
        icon: '/img/risk-management.svg',
        title: 'Risk Management',
        description: 'Tailored regulatory reporting solutions for both local and international requirements.'
    }, 
    {
        icon: '/img/trade-supply.svg',
        title: 'Trade & Supply Chain Finance',
        description: 'Seamless international transactions management.'
    }, 

    
  ]


  return (
    <>
        <Hero title="Corporate Banking" description="Transform your business by embracing a digital strategy with Monty Tech’s Corporate Banking Solution. Enhance efficiency, profitability, and resilience with our core-agnostic, cloud-native platform that seamlessly integrates all aspects of corporate banking."/>

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Step into the Future, Choose Digital</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Empower your corporate banking with our comprehensive solution, powered by advanced architecture, to drive your business growth in unprecedented ways. Achieve greater agility and rely on a robust platform that supports your corporate customers, all while ensuring seamless and efficient operations.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/step-into.svg' alt="Step Into" />
                    </div>
                    
                </div>
            </div>
        </section>

        <IconsTextGridThree items={items} title="Unified. Independent. Flexible" />
        <IconsTextGrid items={items_two} gradientBg={true} /> 
    </> 
  )
}

export default page;
