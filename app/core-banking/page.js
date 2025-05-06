import React from 'react';
import Hero from '@/app/components/Hero';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';
import IconsTextGrid from '@/app/components/IconsTextGrid';

export const metadata = {
    title: 'Core Banking',
    description: 'Leap into Modernity/Modernize Your Operations. Make the Strategic Move. Gain Competitive Edge. Embrace the future of financial operations with Arkam’s innovative Core Banking Solutions.',
}

const page = () => {
    const items = [
        {
            icon: '/img/cloud-based.svg',
            title: 'Cloud Based',
            description: 'Leverage Arkam’s cloud-based core banking to thrive in today\'s dynamic financial market.'
        },
        {
            icon: '/img/hybrid.svg',
            title: 'Hybrid',
            description: 'Offer consumers a hybrid experience blending traditional and digital banking to meet their different needs.'
        },
        {
            icon: '/img/on-premises.svg',
            title: 'On-premises',
            description: 'Achieve unmatched security, control, and performance with Arkam’s robust on-premises core banking solution.'
        },
    ]

    const items_two = [
        {
            icon: '/img/robust.svg',
            title: 'Robust',
            description: 'Faster and more reliable workflow of banking transactions'
        },
        {
            icon: '/img/scalable.svg',
            title: 'Scalable',
            description: 'Seamless scalability with global expansion'
        },
        {
            icon: '/img/tailored.svg',
            title: 'Tailored',
            description: 'Smooth experiences on any screen'
        },
        {
            icon: '/img/seamless.svg',
            title: 'Seamless',
            description: 'Unified APIs combining all site areas plus third-party plugins'
        },
        {
            icon: '/img/mobile-first-design.svg',
            title: 'Mobile-first Design',
            description: 'Smooth experiences on any screen'
        },
        {
            icon: '/img/native.svg',
            title: 'Native',
            description: 'Native app experiences on any device'
        },
        {
            icon: '/img/modular.svg',
            title: 'Modular',
            description: 'Independent widgets activating granular control'
        },
        {
            icon: '/img/open-ecosystem.svg',
            title: 'Open Ecosystem',
            description: 'Best-in-class tools through our flexible foundation'
        },
    ]
  return (
    <>
        <Hero title="Core Banking" description="Leap into Modernity/Modernize Your Operations <br /> Make the Strategic Move <br /> Gain Competitive Edge <br /> Embrace the future of financial operations with Arkam’s innovative Core Banking Solutions." />

        <IconsTextGridThree items={items} title="Core Banking" description="Transform your financial operations with Arkam’s advanced Core Banking. We provide rapid and robust software solutions for essential banking and financial services." cta={{text: "Let's Connect", link: '/contact-us'}}/>
        
        <IconsTextGrid gradientBg={true} items={items_two} title="Core Banking" description="Transform your financial operations with Arkam’s advanced Core Banking. We provide rapid and robust software solutions for essential banking and financial services." cta={{text: "See More", link: '/contact-us'}}/>
        
    </>
  )
}

export default page;
