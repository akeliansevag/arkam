import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';
import CtaContact from '@/app/components/CtaContact';

export const metadata = {
    title: 'Arkam | Solution',
    description: 'Solution',
}

const page = () => {
  const items = [
    {
        icon: '/img/fees.svg',
        title: 'Tariffs and Fees',
        description: 'Optimize your operations with Arkam\'s automated and precise cost calculations, enhancing efficiency and minimizing manual effort.',
        cta: {
            link: '/core-banking/solution/tariffs-and-fees',
            text: 'Read More'
        }
    },
    {
        icon: '/img/corporate-banking.svg',
        title: 'Corporate Banking',
        description: 'Future proof your corporate banking business with Arkam’s corporate banking solution.',
        cta: {
            link: '/core-banking/solution/corporate-banking',
            text: 'Read More'
        }
    },
    {
        icon: '/img/retail-banking.svg',
        title: 'Retail Banking',
        description: 'Modernize your banking services to meet the evolving needs of today’s customers with Arkam’s cutting-edge Retail Banking Solution.',
        cta: {
            link: '/core-banking/solution/retail-banking',
            text: 'Read More'
        }
    },
    {
        icon: '/img/analytics.svg',
        title: 'Analytics & Reports',
        description: 'Empower your business with enhanced operational efficiency and informed decision-making through Arkam’s Analytics and Reports.',
        cta: {
            link: '/core-banking/solution/analytics-and-reports',
            text: 'Read More'
        }
    },
  ]


  return (
    <>
        <Hero title="Solution" />

        <IconsTextGridThree title="Solution" items={items} />
        {/* <CtaContact title="Contact Us" description="Phone: +961 71 871 871</div> <br /> Address: Gefinor Center - Bloc E - Level LG" />  */}
    </>
  )
}

export default page;
