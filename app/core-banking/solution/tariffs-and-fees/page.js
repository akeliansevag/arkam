import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import VerticalSlider from '@/app/components/VerticalSlider';

export const metadata = {
    title: 'Solution | Tariffs and Fees',
    description: 'Rapidly innovate and launch new financial products while minimizing costs. With Arkam’s Cost & Fees Management deliver tailored, cost-effective services that meet customer needs efficiently.',
}

const page = () => {
  const items = [
    {
        title: 'Fast and Efficient Calculation and Booking',
        description: '<div>Designed to handle the automated calculation and booking of all types of financial costs:</div> <ul><li>Highly complex transaction costs</li><li>Periodic fees</li><li>Incoming and outgoing retrocessions</li></ul> <div>reduce the manual workload and minimize errors, ensuring seamless financial operations.</div>'
    },
    {
        title: 'Easy and Flexible Customization',
        description: '<div>Customizable Rules for Costs and Fees: </div> <ul><li>Allows financial institutions to define and modify transaction cost structures and periodic fee rules based on customer segments, products, or regions.</li><li>Enables the creation of tailored fee schedules to support innovative financial products like Buy Now, Pay Later (BNPL) or dynamic loan products.</li></ul> <div>This flexibility ensures the platform can adapt to evolving business models or market demands without extensive reconfiguration.</div>'
    },
    {
        title: 'Sophisticated Reporting Functionality',
        description: '<div>Provides advanced reporting tools to monitor and analyze cost and fee structures, offering insights into revenue streams and operational efficiency: </div> <ul><li>Track profitability by product, customer segment, or transaction type.</li><li>Identify cost leakages or areas for optimization.</li><li>Meet compliance requirements by providing transparent cost and fee breakdowns.</li></ul> <div>Supports integration with BI (Business Intelligence) tools to enhance decision-making capabilities.</div>'
    },
    
  ]


  return (
    <>
        <Hero title="Tariffs and Fees" description="Rapidly innovate and launch new financial products while minimizing costs. With Arkam’s Cost & Fees Management deliver tailored, cost-effective services that meet customer needs efficiently."/>

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Minimize the Workload, Maximize Efficiency</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Streamline operations with Arkam's automated, accurate cost calculations to boost efficiency and reduce manual effort. Implement transparent, customizable pricing structures that build customer trust and drive satisfaction, strengthening client relationships. With Arkam's advanced solutions, the ability to analyze and optimize fee structures empowers you to increase revenue, seize profitable opportunities, and swiftly adapt to evolving market demands, ensuring sustained competitiveness and growth.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/minimise-workload.svg' alt="Minimize The Workload" />
                    </div>
                    
                </div>
            </div>
        </section>

        <section>
            <div className='container'>
                <div className='flex max-lg:flex-col items-center gap-10'>
                    <div className='max-lg:w-full lg:w-2/3'>
                        <div>
                            <VerticalSlider items={items} />
                        </div>
                        
                    </div>
                    <div className='lg:w-1/3'>
                        <img className='mx-auto' src='/img/fast-and-efficient.svg' alt="Hand Person" />
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default page;
