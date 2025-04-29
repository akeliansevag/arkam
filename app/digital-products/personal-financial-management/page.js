import CtaSection from '@/app/components/CtaSection';
import Hero from '@/app/components/Hero';
import IconsTextBlock from '@/app/components/IconsTextBlock';
import IconsTextGrid from '@/app/components/IconsTextGrid';
import IconsTextGridFour from '@/app/components/IconsTextGridFour';
import React from 'react';

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

  return (
    <div>
      <Hero title="Personal Financial Management (PFM)" subtitle="Smarter Money Management, Made Simple" description="Give your customers the tools they need to track, plan, and grow their wealth, all in one place."/>

      <section>
        <div className='container'>
          <IconsTextBlock title="A Complete Financial Hub" items={items_one} backgroundClass="bg-gradient-one"/>
        </div>
        
      </section>
    </div>
  )
}

export default page;
