import CtaSection from '@/app/components/CtaSection';
import Hero from '@/app/components/Hero';
import IconsTextGrid from '@/app/components/IconsTextGrid';
import IconsTextGridFour from '@/app/components/IconsTextGridFour';
import React from 'react';

export const metadata = {
    title: 'Digital Products | Card Management System',
    description: 'Integration with Cards Providers',
  }

const page = () => {
  const items_one = [
    {
        icon: '/img/custom-branded-cards.svg',
        title: 'Custom-Branded Cards',
        description: 'Let customers carry your brand everywhere with physical and virtual cards.'
    },
    {
        icon: '/img/built-in-brand.svg',
        title: 'Built-In Brand Visibility',
        description: 'Your logo, colors, and messaging take center stage every time they tap or swipe.'
    },
    {
        icon: '/img/seamless-customer-experience.svg',
        title: 'Seamless Customer Experience',
        description: 'Integrated smoothly into your systems for effortless transactions.'
    }
  ];

  const items_two = [
    {
        icon: '/img/physical-virtual-cards.svg',
        title: 'Physical & Virtual Cards',
        description: 'Offer flexible payment options across digital wallets, online stores, and mobile apps.'
    },
    {
        icon: '/img/fast-secure-issuance.svg',
        title: 'Fast & Secure Issuance',
        description: 'Use our advanced technology to quickly adapt and roll out new payment solutions.'
    },
    {
        icon: '/img/future-ready-platform.svg',
        title: 'Future-Ready Platform',
        description: 'Keep your brand relevant in an evolving payment landscape.'
    }
  ];
  return (
    <div>
      <Hero title="Integration with Cards Providers" subtitle="Branded Payment Cards That Keep Your Business Top of Mind" description="Give your customers a simple way to pay while keeping your brand in their sight, online and offline."/>

      <IconsTextGrid title="Strengthen Customer Loyalty with Every Purchase" items={items_one} gradientBg={true}/>
      <IconsTextGridFour title="Stay Ahead in the Digital Payment World" items={items_two} light={true}/>
      <CtaSection title="Elevate Your Brand & Engage Your Customers" description="Branded payment cards are key to creating connections. With Arkam, build a payment experience that strengthens loyalty and fuels growth." cta={{text: 'Get Started Today', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
