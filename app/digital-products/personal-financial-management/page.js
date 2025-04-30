
import Hero from '@/app/components/Hero';
import IconsTextBlock from '@/app/components/IconsTextBlock';
import React from 'react';
import * as motion from "motion/react-client";
import CtaSection from '@/app/components/CtaSection';
import { fadeInUp } from '@/app/config/animations';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';

export const metadata = {
    title: 'Digital Products | Personal Financial Management (PFM)',
    description: 'Smarter Money Management, Made Simple',
  }

const page = () => {
  const items_one = [
    {
        icon: '/img/track-spending.svg',
        title: 'Track Spending & Budgets',
        description: 'Help customers stay in control of their finances.'
    },
    {
        icon: '/img/monitor-investments.svg',
        title: 'Monitor Investments',
        description: 'Keep an eye on assets and long-term goals.'
    },
    {
        icon: '/img/plan-for-the-future.svg',
        title: 'Plan for the Future',
        description: 'Smart insights and guidance for better financial decisions.'
    }
  ];

  const items_two = [
    {
        icon: '/img/empower-financial-wellness.svg',
        title: 'Empower Financial Wellness',
        description: 'Support customers in easily managing their money.'
    },
    {
        icon: '/img/increase-engagement.svg',
        title: 'Increase Engagement',
        description: 'Personalized insights encourage deeper account usage.'
    },
    {
        icon: '/img/boost-loyalty.svg',
        title: 'Boost Loyalty',
        description: 'A seamless experience strengthens trust in your brand.'
    }
  ];

  const items_three = [
    {
        icon: '/img/understand-customer-behavior.svg   ',
        title: 'Understand Customer Behavior',
        description: 'Gain valuable insights into spending and saving habits.'
    },
    {
        icon: '/img/refine-your-offerings.svg',
        title: 'Refine Your Offerings',
        description: 'Use data to tailor products and services.'
    },
    {
        icon: '/img/enhance-marketing-strategies.svg',
        title: 'Enhance Marketing Strategies',
        description: 'Deliver hyper-personalized experiences.'
    }
  ];

  const items_four = [
    {
      icon: '/img/easy-integration.svg   ',
      title: 'Easy Integration',
      description: 'Connect our PFM tools effortlessly with your banking platform.'
    },
    {
        icon: '/img/intuitive-user-experience.svg',
        title: 'Intuitive User Experience',
        description: 'Ensure a smooth and user-friendly financial journey.  '
    },
    {
        icon: '/img/simple-adoption.svg',
        title: 'Simple Adoption',
        description: 'Enable customers to manage finances with ease.'
    }
  ];

  return (
    <div>
      <Hero title="Personal Financial Management (PFM)" subtitle="Smarter Money Management, Made Simple" description="Give your customers the tools they need to track, plan, and grow their wealth, all in one place."/>

      <section>
        <div className='container'>
          <div className='flex max-lg:flex-col max-lg:gap-10 lg:justify-center'>
            <div>
              <IconsTextBlock title="A Complete Financial Hub" items={items_one} background={true} backgroundClass="bg-gradient-one"/>
            </div>
            <div className='lg:mt-15 lg:-ml-5'>
              <IconsTextBlock title="Stronger Customer Relationships" items={items_two} background={true} backgroundClass="bg-gradient-two        "/>
            </div>
            
          </div>
          
        </div>
      </section>

      <section className='bg-gradient-blue'>
            <div className='container'>
              <div className='flex max-lg:flex-col gap-10 lg:items-center'>
                  <div className='lg:w-1/2'>
                    <motion.h2 {...fadeInUp()} className="section-title">Actionable Insights</motion.h2>
                    <div className='mt-10'>
                      <IconsTextBlock items={items_three} background={false} light={true} />
                    </div>
                  </div>

                  <motion.div {...fadeInUp(0.1)}>
                    <img src='/img/actionable-insights.svg' alt='Actionable Insights' />
                  </motion.div>
              </div>
            </div>
      </section>

      <IconsTextGridThree title="Seamless Integration" layout="two" items={items_four}/>
      <CtaSection title="With Arkam" description="Create a smarter more engaging financial experience for your customers." cta={{text: 'Get Started Today', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
