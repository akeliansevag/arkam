
import Hero from '@/app/components/Hero';
import React from 'react';
import CtaSection from '@/app/components/CtaSection';
import HorizontalSlider from '@/app/components/HorizontalSlider';
import IconsTextGrid from '@/app/components/IconsTextGrid';

export const metadata = {
    title: 'Digital Products | APIs, Gateways and Integrations',
    description: 'Unlock new possibilities with powerful API solutions that integrate effortlessly into your ecosystem. Whether you need seamless eSIM activation or a secure payment gateway, our technology simplifies the process, enhances security, and drives efficiency.',
  }

const page = () => {
  
  const slider = [
    {
      icon: '/img/instant-activation.svg',
      title: 'Instant Activation',
      description: 'Provision eSIMs on-demand, eliminating the need for physical SIM cards.'
    },
    {
      icon: '/img/global-reach.svg',
      title: 'Global Reach',
      description: 'Connect users worldwide with flexible mobile data plans.'
    },
    {
      icon: '/img/seamless-integration-1.svg',
      title: 'Seamless Integration',
      description: 'Easily embed eSIM functionality into your app or platform.'
    },
  ]
  
  const items = [
    {
      icon: '/img/multicurrency-support.svg',
      title: 'Multi-Currency Support',
      description: 'Accept payments in various currencies for global reach.'
    },
    {
      icon: '/img/frictionless-checkout.svg',
      title: 'Frictionless Checkout',
      description: 'Enable one-click payments for a faster, smoother experience.'
    },
    {
      icon: '/img/robust-security.svg',
      title: 'Robust Security',
      description: 'PCI-DSS compliance, tokenization, and fraud prevention measures.'
    }
  ]
  return (
    <div>
      <Hero title="APIs, Gateways and Integrations" description="Unlock new possibilities with powerful API solutions that integrate effortlessly into your ecosystem. Whether you need seamless eSIM activation or a secure payment gateway, our technology simplifies the process, enhances security, and drives efficiency."/>

      <HorizontalSlider items={slider} title="eSIM" description="Simplify Everyday Expenses Make paying bills quick and stress-free with smart automation and digital convenience." icon="/img/esim-icon.svg" />
      
      <IconsTextGrid description="Secure, Fast, and Flexible Transactions Empower businesses with a seamless payment processing solution that enhances checkout experiences and boosts revenue." title="Payment Gateway" items={items} />
        

      <CtaSection title="Connect, Scale, and Innovate with Ease" description="Arkam’s API solutions streamline operations, improve customer experiences, and drive digital transformation, all with minimal effort on your end." cta={{text: 'Schedule a Demo', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
