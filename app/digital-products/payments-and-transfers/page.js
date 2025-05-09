
import Hero from '@/app/components/Hero';
import React from 'react';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';
import * as motion from "motion/react-client";
import CtaSection from '@/app/components/CtaSection';
import { fadeInUp } from '@/app/config/animations';
import IconsTextBlock from '@/app/components/IconsTextBlock';
import IconsTextGridTwo from '@/app/components/IconsTextGridTwo';
import IconsTextGridFive from '@/app/components/IconsTextGridFive';
import VerticalSlider from '@/app/components/VerticalSlider';

export const metadata = {
    title: 'Digital Products | Payments and Transfers',
    description: 'Give your customers the freedom to manage their payments and transfers effortlessly. Whether they’re paying bills, sending money, or making purchases, our seamless solutions ensure convenience, security, and speed.',
  }

const page = () => {
  const items_one = [
    {
      icon: '/img/one-time-recurring-payments.svg',
      title: 'One-Time & Recurring Payments',
      description: 'Set up instant or scheduled bill payments with ease'
    },
    {
      icon: '/img/e-bills-papering-invoicing.svg',
      title: 'E-Bills & Paperless Invoicing',
      description: 'View, store, and pay bills online anytime, anywhere.'
    },
    {
      icon: '/img/one-time-recurring-payments.svg',
      title: 'Autopay Options',
      description: 'Avoid missed payments with configurable automatic scheduling.'
    }
  ]

  const items_two = [
    {
      icon: '/img/multiple-transfer-methods.svg',
      title: 'Personal & Consumer Loans',
      description: 'Offer financing for everyday needs.'
    },
    {
      icon: '/img/real-time-tracking.svg',
      title: 'Real-time Tracking',
      description: 'Keep users informed every step of the way.'
    },
    {
      icon: '/img/secure-infrastructure.svg',
      title: 'Secure Infrastructure',
      description: 'Advanced encryption and fraud prevention.'
    }
  ]

  const items_three = [
    {
      icon: '/img/competitive-exchange-rates.svg',
      title: 'Competitive Exchange Rates',
      description: 'Maximize value for international transfers.'
    },
    {
      icon: '/img/expansive-global-network.svg',
      title: 'Expansive Global Network',
      description: 'Connect with multiple remittance partners.'
    },
    {
      icon: '/img/regulatory-compliance-2.svg',
      title: 'Regulatory Compliance',
      description: 'Meet AML and KYC standards seamlessly.'
    }
  ]

  const items_four = [
    {
      icon: '/img/automated-invoicing.svg',
      title: 'Automated Invoicing',
      description: 'Streamline billing and collections.'
    },
    {
      icon: '/img/customizable-digital-statements.svg',
      title: 'Customizable Digital Statements',
      description: 'Provide branded, easy-to-read e-bills.'
    },
    {
      icon: '/img/eco-friendly.svg',
      title: 'Eco-friendly & Efficient',
      description: 'Improve customer convenience while cutting costs.'
    }
  ]

  const slider_items = [
    {
        title: 'Secure Online & Mobile Payments',
        subtitle: 'Omnichannel Payment Solutions',
        description: '<ul><li>Support cards, QR codes, and contactless payments.</li></ul>'
    },
    {
        title: 'Secure Online & Mobile Payments',
        subtitle: 'Omnichannel Payment Solutions',
        description: '<ul><li>Support cards, QR codes, and contactless payments.</li></ul>'
    },
    {
        title: 'Secure Online & Mobile Payments',
        subtitle: 'Omnichannel Payment Solutions',
        description: '<ul><li>Support cards, QR codes, and contactless payments.</li></ul>'
    },
  ]
  return (
    <div>
      <Hero title="Payments and Transfers" description="Give your customers the freedom to manage their payments and transfers effortlessly. Whether they’re paying bills, sending money, or making purchases, our seamless solutions ensure convenience, security, and speed."/>

      <div id="bill-payments">
        <IconsTextGridThree title="Bill Payments" description="Simplify Everyday ExpensesMake paying bills quick and stress-free with smart automation and digital convenience." items={items_one}/>
      </div>
      

      <IconsTextGridTwo description="Enable instant peer-to-peer and cross-border transfers." title="Fast & Reliable Money Transfers" items={items_two} background="/img/fast-and-reliable-money-transfers.webp" />


      <section id="remittances">
            <div className='container'>
              <div className='flex max-lg:flex-col gap-10 lg:items-center'>
                  <div className='lg:w-1/2'>
                    <motion.h2 {...fadeInUp()} className="section-title">Optimized Remittance Services</motion.h2>
                    <motion.p className="!text-white">Optimized Remittance Services</motion.p>
                    <div className='mt-10'>
                      <IconsTextBlock items={items_three} background={false} light={true} />
                    </div>
                  </div>

                  <motion.div {...fadeInUp(0.1)}>
                    <img src='/img/optimized-remittance-services.svg' alt='Optimized Remittance Services' />
                  </motion.div>
              </div>
            </div>
      </section>

      <div id="pos">
        <IconsTextGridFive title="Paperless E-Billing Solutions" description="Reduce operational costs and enhance efficiency" items={items_four}/>
      </div>
      
      <section id="online-payments-and-reservation">
        <div className='container flex max-lg:flex-col lg:items-center'>
          <div className='lg:w-2/3'>
            <VerticalSlider items={slider_items}/>
          </div>
          <div>
            <img className='max-lg:mx-auto' src='/img/secure-online.svg ' />
          </div>
          
        </div>
      </section>
      <CtaSection title="Empower Your Customer with Smarter Payment Solutions" description="Arkam’s comprehensive solutions help you optimize transactions, improve customer experience, and drive growth." cta={{text: 'Schedule a Demo', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
