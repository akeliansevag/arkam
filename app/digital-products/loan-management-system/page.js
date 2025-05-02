
import Hero from '@/app/components/Hero';
import React from 'react';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';
import * as motion from "motion/react-client";
import CtaSection from '@/app/components/CtaSection';
import { fadeInUp } from '@/app/config/animations';
import IconsTextBlock from '@/app/components/IconsTextBlock';

export const metadata = {
    title: 'Digital Products | Loan Management System',
    description: 'A powerful Loan Management System (LMS) designed to streamline the lending process, automate workflows, and help you make smarter lending decisions.',
  }

const page = () => {
  const items_one = [
    {
      icon: '/img/instant-loan-processing.svg',
      title: 'Instant Loan Processing',
      description: 'Approve and disburse loans in minutes.'
    },
    {
      icon: '/img/ai-powered-credit-scoring.svg',
      title: 'AI-Powered Credit Scoring',
      description: 'Make data-driven lending decisions. '
    },
    {
      icon: '/img/custom-loan-structures.svg',
      title: 'Custom Loan Structures',
      description: 'Set flexible terms, interest rates, and repayment plans.'
    },
    {
      icon: '/img/real-time-monitoring.svg',
      title: 'Real-Time Monitoring',
      description: 'Get instant alerts for repayments, late fees, and risk factors.  '
    },
    {
      icon: '/img/automated-compliance.svg',
      title: 'Automated Compliance',
      description: 'Stay aligned with KYC, AML, and lending regulations.'
    },
  ]

  const items_two = [
    {
      icon: '/img/personal-and-consumer-loans.svg',
      title: 'Personal & Consumer Loans',
      description: 'Offer financing for everyday needs.'
    },
    {
      icon: '/img/business-and-sme-loans.svg',
      title: 'Business & SME Loans',
      description: 'Empower small businesses with hassle-free lending.'
    },
    {
      icon: '/img/microfinance-and-p2p-lending.svg',
      title: 'Microfinance & P2P Lending',
      description: 'Manage community-driven lending efficiently.'
    },
    {
      icon: '/img/bnpl-integration.svg',
      title: 'BNPL Integration',
      description: 'Provide seamless installment payment options.'
    }
  ]

  const items_three = [
    {
      icon: '/img/plug-and-play-apis.svg',
      title: 'Plug & Play APIs',
      description: 'Plug & Play APIs'
    },
    {
      icon: '/img/multi-platform-access.svg',
      title: 'Multi-Platform Access',
      description: 'Manage loans via web, mobile apps, or digital banking interfaces.'
    },
    {
      icon: '/img/real-time-dashboards.svg',
      title: 'Real-Time Dashboards',
      description: 'Track loan performance, risk levels, and customer insights.'
    }
  ]
  return (
    <div>
      <Hero title="Loan Management System" subtitle="Smarter Lending, Simplified" description="A powerful Loan Management System (LMS) designed to streamline the lending process, automate workflows, and help you make smarter lending decisions."/>

      <IconsTextGridThree title="Fast, Flexible & Scalable" layout="two" description="Lending should be effortless for you and your customers. Our LMS handles everything from application to repayment, so you can focus on growth." items={items_one}/>
      <IconsTextGridThree title="Built for All Lending Models" description="Our LMS adapts to your business needs, whether you're a traditional lender or an alternative finance provider." items={items_two}/>

      <section className='bg-gradient-blue'>
            <div className='container'>
              <div className='flex max-lg:flex-col gap-10 lg:items-center'>
                  <div className='lg:w-1/2'>
                    <motion.h2 {...fadeInUp()} className="section-title">Seamless Integration, Effortless Management</motion.h2>
                    <motion.p className="!text-white max-lg:text-center">Our API-driven system connects seamlessly with your banking ecosystem, ensuring a smooth experience for both lenders and borrowers.</motion.p>
                    <div className='mt-10'>
                      <IconsTextBlock items={items_three} background={false} light={true} />
                    </div>
                  </div>

                  <motion.div {...fadeInUp(0.1)}>
                    <img src='/img/seamless-integration-effortless-management.svg' alt='Actionable Insights' />
                  </motion.div>
              </div>
            </div>
      </section>
      <CtaSection title="With Arkam" description="Build a loan experience with fast, secure and hassle-free lending." cta={{text: 'Schedule a Demo', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
