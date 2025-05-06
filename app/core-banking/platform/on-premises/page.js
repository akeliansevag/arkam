import React from 'react';
import Hero from '@/app/components/Hero';
import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Platform | On-premises',
    description: 'Enhance Your Banking Operations with Our On-Premises Core Solution',
}

const page = () => {
  const slider = [
    {
        icon: '/img/ironclad.svg',
        title: 'Ironclad Data Sovereignty',
        description: 'Complete control and visibility over your critical information assets. Your sensitive data remains housed on premises.'
    },
    {
        icon: '/img/edit.svg',
        title: 'Customized Specifications',
        description: 'A truly bespoke banking experience through our modular architecture and open APIs seamlessly integrating with your existing systems and processes'
    },
    {
        icon: '/img/stat.svg',
        title: 'Unparalleled Performance',
        description: 'Lightning-fast processing speeds, rock-solid reliability, and peace of mind.'
    },
    {
        icon: '/img/business-continuity.svg',
        title: 'Business Continuity',
        description: 'Operational resilience regardless of disruptions.'
    },
    {
        icon: '/img/workforce.svg',
        title: 'Empowered Workforce',
        description: 'Modern tools and seamless experiences that boost employee productivity and morale.'
    },
  ]
  return (
    <>
        <Hero title="Enhance Your Banking Operations with Our On-Premises Core Solution" subtitle="Keep Your Data on Your Own Servers, Upgrade Your Infrastructure, 
Empower Your Employees" description="When your strategy demands uncompromised security, control, and performance. Look no further than our robust, on-premises core banking solution." />

        <HorizontalSlider items={slider} description="We provide you with purpose-built on-premises systems that achieve the standards you require" title="Built On-Premises Systems" icon="/img/hybrid-banking.svg"/>
        
    </>
  )
}

export default page;
