import React from 'react';
import Hero from '../components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '../config/animations';
import IconsTextGrid from '../components/IconsTextGrid';
import IconsTextGridTwo from '../components/IconsTextGridTwo';
import CtaSection from '../components/CtaSection';
import LeftRightGrid from '../components/LeftRightGrid';

export const metadata = {
    title: 'Arkam | Digital Wallet',
    description: 'Your Brand, Your Wallet, Your Vision',
  }

const page = () => {
  const why = [
    {
        image: '/img/item-pattern.svg',
        title: 'Customizable & Scalable',
        description: 'Tailor the wallet to match your brand identity and scale as you grow.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'Enterprise-Grade Security',
        description: 'Built with bank-level encryption, fraud protection, and regulatory compliance.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'Seamless Transactions',
        description: 'Enable instant peer-to-peer transfers, merchant payments, and more.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'Multi-Currency & Cross-Border Ready',
        description: 'Support for various currencies and international transactions.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'API-Driven Integration',
        description: 'Easily connect with your existing banking or fintech ecosystem.'
    }
  ];
  const features = [
    {
      icon: '/img/merchant-payments.svg',
      title: 'Merchant Payments',
      description: 'Facilitate seamless transactions for businesses and consumers.'
    },
    {
      icon: '/img/peer-to-peer-transfers.svg',
      title: 'Peer-to-Peer Transfers',
      description: 'Enable secure, real-time money transfers.'
    },
    {
      icon: '/img/top-ups-and-withdrawals.svg',
      title: 'Top-Ups & Withdrawals',
      description: 'Provide flexible funding options via bank accounts, cards, or cash.'
    },
    {
      icon: '/img/advanced-security.svg',
      title: 'Advanced Security',
      description: 'Biometric authentication, encryption, and AI-powered fraud prevention.'
    },
    {
      icon: '/img/regulatory-compliance.svg',
      title: 'Regulatory Compliance',
      description: 'Designed to meet international financial standards and requirements.'
    },
    
  ];

  const beneficiaries = [
    {
        icon: '/img/banks-and-financial-institutions.svg',
        title: 'Banks & Financial Institutions',
        description: 'Modernize digital banking with branded wallet experience.'
    },
    {
        icon: '/img/fintech-companies.svg',
        title: 'Fintech Companies',
        description: 'Accelerate go-to-market with a ready-to-launch wallet solution.'
    },
    {
        icon: '/img/telecom-providers.svg',
        title: 'Telecom Providers',
        description: 'Monetize your network with mobile money and digital payment services. '
    },
    {
        icon: '/img/retail-and-ecommerce.svg',
        title: 'Retail & E-commerce',
        description: 'Offer seamless payment experience while boosting customer loyalty.'
    }
  ];
  return (
    <>
        <Hero title="Your Brand, Your Wallet, Your Vision" description="The future of payments is digital, and we’re here to help you lead the way. Whether you’re a bank, fintech, telecom, or enterprise, our digital wallet solution allows you to offer a seamless, secure, and fully branded digital wallet experience, without the hassle of building one from the ground up." />

        <LeftRightGrid title="Why Choose Our Digital Wallet?" subtitle="Our white-label solution goes beyond transactions, it’s designed to enhance customer engagement, streamline payments, and drive business growth." items={why} />

        <IconsTextGrid title="Comprehensive Features" items={features}/>
        <IconsTextGridTwo title="Who Can Benefit?" items={beneficiaries} background="/img/who-can-benefit.webp" />
        <CtaSection title="Launch Your Digital Wallet with Confidence" description="The shift to digital payments is happening! Position your business at the forefront with a solution that is secure, scalable, and future-ready." cta={{link: "/", text: 'Schedule a Demo'}}/>
    </>
  )
}

export default page;
