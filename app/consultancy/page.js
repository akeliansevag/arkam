import React from 'react';
import Hero from '../components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '../config/animations';
import LeftRightGrid from '../components/LeftRightGrid';
import IconsTextGridThree from '../components/IconsTextGridThree';
import ProgressCirclesSection from '../components/ProgressCirclesSection';
import SliderSection from './SliderSection';

export const metadata = {
    title: 'Arkam | Consultancy',
    description: 'Fintech Consulting & Business Solutions',
  }

const page = () => {
  const why = [
    {
        image: '/img/item-pattern.svg',
        title: 'Proven Success Across the Globe',
        description: 'Guidance on choosing the right jurisdiction and setting up your fintech business efficiently.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'Real-World Fintech Expertise',
        description: 'Our team consists of experienced fintech professionals with a track record of building and scaling payment businesses.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'Results-Driven Approach',
        description: 'We focus on delivering practical, fully functional solutions that align with your business goals.'
    },
    {
        image: '/img/item-pattern.svg',
        title: 'Get Licensed & Start Your Payment Business Fast',
        description: 'We provide licensing assistance in multiple regions. Let’s discuss how we can help you secure the right financial license and launch your fintech business with confidence.'
    },
  ];

  const services= [
    {
        icon: '/img/jurisdiction.svg',
        title: 'Jurisdiction Selection & Structuring',
        description: 'Guidance on choosing the right jurisdiction and setting up your fintech business efficiently.'
    },
    {
        icon: '/img/business-it-compliance-documentation.svg',
        title: 'Business, IT & Compliance Documentation',
        description: 'Comprehensive support in preparing all necessary documents to meet regulatory and operational requirements.'
    },
    {
        icon: '/img/regulatory-communication.svg',
        title: 'Regulatory Communication',
        description: 'Seamless interaction with regulators to ensure compliance and a smooth licensing process.'
    },
    {
        icon: '/img/local-team-recruitment.svg',
        title: 'Local Team Recruitment',
        description: 'Assistance in building a skilled, locally compliant team to support your business operations.'
    },
    {
        icon: '/img/core-banking-compliance-software.svg',
        title: 'Core Banking & Compliance Software',
        description: 'Provision of regulatory-compliant banking software with in-depth descriptions to streamline operations.'
    },
    {
        icon: '/img/payment-infrastructure.svg',
        title: 'Payment Infrastructure & Baas Solutions',
        description: 'Development of payment systems and Banking-as-a-Service (BaaS) solutions tailored to your business model.'
    },
  ];

  const license = [
    {
        title: 'Local Presence & Team',
        description: '2-10 identified local employees, depending on jurisdiction.',
    },
    {
        title: 'Transparent Source of Capital',
        description: 'Sufficient funds to cover first-year losses.',
    },
    {
        title: 'Business Plan & Internal Policies',
        description: 'Hundreds of pages of structured documentation.',
    },
    {
        title: 'Core Banking Software',
        description: 'Secure, compliant, and fully documented.',
    },
    {
        title: 'Sufficient Budget',
        description: 'To cover personnel, legal fees, and share capital.',
    },
    {
        title: '9-18 Months of Processing Time',
        description: 'The real timeframe to prepare, submit, and secure licensing.',
    },
  ];
  return (
    <>
        <Hero title="End-to-End Customer Centric Services" subtitle="Fintech Consulting & Business Solutions" description="We help fintech companies launch, grow, and thrive with expert consulting and tailored solutions." />

        <IconsTextGridThree title="Our Services" items={services}/>
        <LeftRightGrid title="Why Choose Us?" items={why} />
        <SliderSection />
        <ProgressCirclesSection title="What You Need to Obtain a License" items={license} />
    </>
  )
}

export default page;
