import React from 'react';
import Hero from '@/app/components/Hero';
import LeftRightGrid from '@/app/components/LeftRightGrid';
import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Platform | Cloud Based',
    description: '"Move Your Core to The Cloud – It’s The Right Time',
}

const page = () => {
  const slider = [
    {
        icon: '/img/cloud-flexibility.svg',
        title: 'Experience Cloud Flexibility',
        description: 'Drop the heavy duty of complex infrastructure. Optimize our platform’s elasticity to scale up or down depending on your business needs, and swiftly respond to emerging customer demands and market standards.'
    },
    {
        icon: '/img/cloud-efficiency.svg',
        title: 'Harness Cloud Efficiency',
        description: 'Unburden maintenance and support to our team of cloud experts. Channel your focus to innovation rather than infrastructure while we handle the workload.'
    },
    {
        icon: '/img/cloud-continuity.svg',
        title: 'Capitalize on Cloud Continuity',
        description: 'Stay online and serve your customers nonstop, no matter what. Our reliable cloud architecture protects your banking operations with enterprise-grade availability and disaster recovery.'
    },
    {
        icon: '/img/cloud-speed.svg',
        title: 'Adopt Cloud Speed',
        description: 'Market faster without the need for traditional IT processes. Embrace a cloud native platform to stay ahead of the game and release new products and services easily and swiftly.'
    },
    {
        icon: '/img/unlock.svg',
        title: 'Unlock Cloud Customer Experience',
        description: 'Differentiate your services in an overcrowded market. Our flexible platform allows you to offer an innovative and seamless banking experience tailored to the needs of your customers.'
    },
  ]
  return (
    <>
        <Hero title="Cloud Based" subtitle="Move Your Core to The Cloud – It’s The Right Time " description="Deliver Unique Customer Experiences <br /> Stay Ahead of Market Trends <br /> Unlock New Potential" />

        <HorizontalSlider items={slider} description="Elevate your financial services with a future-proof, cloud-based core banking solution.
Transform how you conceptualize, develop, manage and sell your products.
Say goodbye to the shackles and struggles of outdated legacy systems and modernize your operations with a cloud-based platform. Leverage the advanced technology offered by Arkam’s platform to deliver the agility, scalability, and cost-efficiency your institution needs to thrive in today's dynamic financial market." title="Elevate Your Financial Services" icon="/img/elevate.svg"/>
        
    </>
  )
}

export default page;
