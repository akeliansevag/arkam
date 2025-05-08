import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
 import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Solution | Retail Banking',
    description: 'Modernize legacy systems and embrace the future of banking with  Arkam’s Retail Banking Solution. Streamline and enhance the way you serve your customers by integrating advanced technology that delivers efficiency, exceptional customer experience and profitability.',
}

const page = () => {
  const items = [
    {
        icon: '/img/customer-onboarding.svg',
        title: 'Customer Onboarding',
        description: 'Streamline the onboarding process with efficient handling of customer applications, seamless profile creation, secure access provisioning, and automated document flow management.'
    },
    {
        icon: '/img/payment-processing.svg',
        title: 'Payment Processing',
        description: 'Leverage a cutting-edge payment engine equipped with automated currency conversion, built-in APIs, and gateways to support diverse payment types, ensuring a smooth experience for your customers.'
    },
    {
        icon: '/img/aml.svg',
        title: 'AML/KYC Compliance',
        description: 'Enhance security and compliance with remote customer identification, ID document verification, transaction screening and monitoring, and dynamic customer risk scoring.'
    },
    {
        icon: '/img/customer-accounts-management.svg',
        title: 'Customer Accounts Management',
        description: 'Simplify account operations by generating IBANs and enabling the opening of multi-currency accounts for global financial flexibility.'
    },
    {
        icon: '/img/tariffs.svg',
        title: 'Tariffs & Fees Engine',
        description: 'Customize and manage diverse tariff structures tailored to your customers, including standard, group-specific, and individual client tariffs, along with agent bonus configurations for enhanced flexibility.'
    },
    {
        icon: '/img/financial-accounting.svg',
        title: 'Financial Accounting',
        description: 'Access powerful financial tools to streamline internal operations, including a General Ledger, Chart of Accounts, and efficient management of your bank’s nostro and vostro accounts, complemented by robust reporting capabilities.'
    },
    {
        icon: '/img/pci.svg',
        title: 'Payment Card Issuing',
        description: 'Seamlessly issue fully branded physical or virtual payment cards, supported by an advanced online administration system integrated into your back-office operations.'
    },
    {
        icon: '/img/agent-console.svg',
        title: 'Agent Console',
        description: 'Build and manage a comprehensive agent network with ease, enabling agents to onboard their customers directly through Macrobank’s intuitive back-office platform.'
    },
  ]


  return (
    <>
        <Hero title="Retail Banking" description="Modernize legacy systems and embrace the future of banking with  Arkam’s Retail Banking Solution. Streamline and enhance the way you serve your customers by integrating advanced technology that delivers efficiency, exceptional customer experience and profitability."/>

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Reinvent Your Bank for the Modern Customer</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Empower your customers with unparalleled financial experiences that foster deeper connections and drive continuous innovation and personalization.Monty Tech’s Retail Banking Solution leverages real-time data processing to boost operational efficiency and transform your banking operations. By accelerating your time-to-market, reducing costs, and enhancing flexibility, our solution ensures your organization stays competitive. Seamlessly integrating into your existing infrastructure, it optimizes agility while supporting a future-ready approach to retail banking.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/reinvent.svg' alt="Reinvent" />
                    </div>
                    
                </div>
            </div>
        </section>

        <HorizontalSlider darkBg={true} title="Modern Bank, Modern Customer" items={items} icon="/img/modern-bank.svg" />
        
    </>
  )
}

export default page;
