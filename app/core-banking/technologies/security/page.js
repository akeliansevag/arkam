import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import IconsTextGridFour from '@/app/components/IconsTextGridFour';
import Stats from '@/app/components/Stats';
import ProgressCirclesSection from '@/app/components/ProgressCirclesSection';

export const metadata = {
    title: 'Technologies | Security',
    description: 'Security and regulatory compliance are pivotal in our technology. Our software is developed with the most advanced security mechanisms and our technology complies with international regulatory and security standards.',
}

const page = () => {
  const items = [
    {
        icon: '/img/secure-payment.svg',
        title: 'Secure Payment Signing',
        description: 'Generates a unique digital signature for each transaction.'
    },
    {
        icon: '/img/authentication.svg',
        title: 'Authentication',
        description: 'Verifies the identity of the user before approving sensitive operations such as initiating payments or accessing restricted systems.'
    },
    {
        icon: '/img/regulatory-compliance-3.svg',
        title: 'Regulatory Compliance',
        description: 'Complies with regulatory requirements such as PSD2 for (SCA) in financial services.'
    },
  ]

  const steps = [
    {
        title: 'Authentication',
        description: 'Two-Factor Authentication (2FA)'
    },
    {
        title: 'Mechanisms',
        description: 'Tamper-Proof Mechanisms'
    },
    {
        title: 'Usability',
        description: 'Simple and effective proccess'
    },
    {
        title: 'Support',
        description: 'Cross-Platform Support'
    },
  ]


  return (
    <>
        <Hero title="Security" description="Security and regulatory compliance are pivotal in our technology. Our software is developed with the most advanced security mechanisms and our technology complies with international regulatory and security standards." />

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>European Regulatory Requirement</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Compliance with PSD2 directive and a new European regulatory requirement – Strong Customer Authentication (SCA. Ready Open API to offer a secure and reliable way to access open customer data and interact with Third-Party Providers (TTP). <br />
Encrypted communication between all solution components. <br />
User (Audit) Logs for Security and Compliance. <br />
Our solution has passed external security penetration tests.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/regulatory.svg' alt="Regulatory" />
                    </div>
                    
                </div>
            </div>
        </section>

        <IconsTextGridFour title="Mac Token App" items={items} />
        <ProgressCirclesSection title="Main Steps" items={steps}/>
    </>
  )
}

export default page;
