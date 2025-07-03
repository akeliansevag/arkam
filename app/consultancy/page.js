import React from 'react';
import Hero from '../components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '../config/animations';
import LeftRightGrid from '../components/LeftRightGrid';
import IconsTextGridThree from '../components/IconsTextGridThree';
import ProgressCirclesSection from '../components/ProgressCirclesSection';
import SliderSection from './SliderSection';
import IconsTextGridFour from '../components/IconsTextGridFour';
import CtaSection from '../components/CtaSection';

export const metadata = {
    title: 'Arkam | Consultancy',
    description: 'Fintech Consulting & Business Solutions',
  }

const page = () => {
  const why = [
    {
        image: '/img/proven-success.svg',
        title: 'Proven Success Across the Globe',
        description: 'Guidance on choosing the right jurisdiction and setting up your fintech business efficiently.'
    },
    {
        image: '/img/real-world-fintech.svg',
        title: 'Real-World Fintech Expertise',
        description: 'Our team consists of experienced fintech professionals with a track record of building and scaling payment businesses.'
    },
    {
        image: '/img/results-driven-approach.svg',
        title: 'Results-Driven Approach',
        description: 'We focus on delivering practical, fully functional solutions that align with your business goals.'
    },
    {
        image: '/img/get-licensed.svg',
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

  const why_work = [
    {
        icon: '/img/proven-track-record.svg',
        title: 'Proven Track Record',
        description: 'Missing Info Missing Info'
    },
    {
        icon: '/img/all-in-one-solution.svg',
        title: 'All-in-One Solution',
        description: 'From consulting to compliance and software, we handle everything.'
    },
    {
        icon: '/img/fintech-expertise.svg',
        title: 'Fintech Expertise',
        description: 'Deep understanding of business, IT, and legal frameworks.'
    },
  ]
  return (
    <>
        <Hero title="End-to-End Customer Centric Services" subtitle="Fintech Consulting & Business Solutions" description="We help fintech companies launch, grow, and thrive with expert consulting and tailored solutions." />

        <IconsTextGridThree title="Our Services" items={services}/>
        <LeftRightGrid title="Why Choose Us?" items={why} />
        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/licensing.svg' alt="licensing" />
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Licensing</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>MSB, E-Money & Payment Institution Licensing</motion.h4>
                        <motion.blockquote {...fadeInUp(0.3)}>Get fully licensed to operate your digital banking, e-wallet, or payment institution with our all-in-one licensing solution. We handle everything, so you can stay focused on growing your business.</motion.blockquote>
                    </div>
                </div>
            </div>
        </section>
        <SliderSection />
        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-2/3'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>What You Need to Obtain a License</motion.h2>
                        <motion.blockquote {...fadeInUp(0.2)}>
                            <ul>
                                <li><strong>Local Presence & Team:</strong> 2-10 identified local employees, depending on jurisdiction.</li>
                                <li><strong>Transparent Source of Capital:</strong> Sufficient funds to cover first-year losses.</li>
                                <li><strong>Business Plan & Internal Policies:</strong> Hundreds of pages of structured documentation.</li>
                                <li><strong>Core Banking Software:</strong> Secure, compliant, and fully documented.</li>
                                <li><strong>Sufficient Budget:</strong> To cover personnel, legal fees, and share capital.</li>
                                <li><strong>9-18 Months of Processing Time:</strong> The real timeframe to prepare, submit, and secure licensing.</li>
                            </ul>
                        </motion.blockquote>
                    </div>
                    <div className='lg:w-1/3'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/license.svg' alt="licensing" />
                    </div>
                    
                </div>
            </div>
        </section>
        <div className='flex items-center justify-center bg-gradient-to-b from-[#05A6A6B3] to-[#0D5B6A33] max-lg:py-10 lg:pt-24 lg:pb-35'>
            <div className='container'>
                <div className='flex w-full max-lg:gap-10 lg:items-end max-lg:flex-col'>
                    <motion.div {...fadeInUp()} className='w-full rounded-2xl bg-gradient-to-br from-[rgba(29,40,56,0.5)] to-[rgba(29,40,56,0)] p-10'>
                        <motion.h2 {...fadeInUp()} className="section-title">How We Help</motion.h2>
                            <motion.ul {...fadeInUp(0.1)} className ="list-disc pl-6">
                                <li>Jurisdiction Selection & Structuring Advice</li>
                                <li>Regulatory-Compliant Software Provision</li>
                                <li>Business Planning, Forecasting & Payment Scheme Design</li>
                                <li>Representation in Regulatory Communications</li>
                                <li>Drafting Policies (AML, Compliance & Risk Management)</li>
                                <li>Project Management, Incorporation & Accounting</li>
                                <li>Local Team Recruitment</li>
                                <li>Establishing Key Partnerships for Outsourced Activities</li>
                            </motion.ul>
                    </motion.div>
                    <motion.div {...fadeInUp(0.1)} className='lg:-translate-x-[20px] lg:translate-y-[50px] w-full bg-gradient-to-br from-[#07262B] to-[rgba(29,40,56,0.5)] p-10 rounded-2xl'>
                        <motion.h3 {...fadeInUp(0.2)} className="text-2xl">Jurisdictions We Cover</motion.h3>
                        <motion.p {...fadeInUp(0.3)} className="mt-4">We specialize in licensing for fintech businesses, including <span className='text-white'>digital banks, e-wallets, fiat-crypto wallets, and e-commerce banking</span> across multiple regions.</motion.p>
                        <motion.p {...fadeInUp(0.4)} className="!mb-0">Contact us to explore the best jurisdiction for your business.</motion.p>
                    </motion.div>
                </div>
            </div>
            
        </div>
        <ProgressCirclesSection title="What You Need to Obtain a License" items={license} />
        <IconsTextGridFour title="Why Work with Us?" items={why_work} />
        <CtaSection title="Start Your Fintech Journey Today." description="Let’s fast-track your fintech licensing journey." cta={{link: '/contact-us', text: 'Get in Touch Today!'}}/>
    </>
  )
}

export default page;
