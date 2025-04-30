
import Hero from '@/app/components/Hero';
import React from 'react';
import CtaSection from '@/app/components/CtaSection';

import VerticalSlider from '@/app/components/VerticalSlider';

export const metadata = {
    title: 'Digital Products | Loyalty Management',
    description: 'Turn Loyalty into a Competitive Edge',
  }

const page = () => {

  const slider_items = [
    {
        title: 'Reward What Matters',
        subtitle: '',
        description: '<ul><li>Reward on-time payments, increased balances, and referrals.</li><li>Encourage deeper engagement with a program tailored to your goals.</li><li>Turn satisfied customers into lifelong brand advocates.</li></ul>'
    },
    {
      title: 'Make Every Reward Memorable',
      subtitle: 'Let your customers redeem rewards their way',
      description: '<ul><li>Exclusive merchandise and premium gift cards.</li><li>Unforgettable travel experiences.</li><li>Charitable donations that make a difference.</li></ul>'
    },
    {
      title: 'Understand & Personalize Customer Experiences',
      subtitle: 'Use advanced loyalty analytics to',
      description: '<ul><li>Gain deeper insights into customer behavior.</li><li>Deliver personalized promotions that resonate.</li><li>Continuously refine your rewards program for maximum impact.</li></ul>'
    },
    {
      title: 'Frictionless Integration, Scalable Growth',
      subtitle: 'Use advanced loyalty analytics to',
      description: '<ul><li>Seamlessly integrate into your existing digital banking platform.</li><li>Easily adapt to changing trends and customer needs.</li><li>Keep your rewards program fresh, engaging, and ahead of the curve.</li></ul>'
    }

  ]

  return (
    <div>
      <Hero title="Loyalty Management" subtitle="Turn Loyalty into a Competitive Edge" description="Give your customers more reasons to stay engaged and connected through a rewarding experience they’ll love."/>

      <section>
        <div className='container flex max-lg:flex-col lg:items-center'>
          <div className='lg:w-2/3'>
            <VerticalSlider items={slider_items}/>
          </div>
          <div>
            <img className='max-lg:mx-auto' src='/img/reward-what-matters.svg' />
          </div>
          
        </div>
      </section>

      <CtaSection title="With Arkam" description="Build a rewards program that drives engagement, strengthens relationships, and fuels long-term growth." cta={{text: 'Get Started Today', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
