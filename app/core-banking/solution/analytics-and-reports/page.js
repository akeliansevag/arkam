import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
 import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Solution | Analytics and Reports',
    description: 'Easily generate various reports and present critical data with Arkam’s Analytics and Reports.',
}

const page = () => {
  const items = [
    {
        icon: '/img/customizable.svg',
        title: 'Customizable Reporting and Data Presentation',
        description: 'Create customized reports according to the specific needs of your financial institution. This flexibility ensures that reports can cover everything from financial statements to business performance, helping you stay on top of operations in real-time.'
    },
    {
        icon: '/img/database.svg',
        title: 'Data Accessibility and Ease of Management',
        description: 'Easily access data to review, print, and manage reports when necessary. This ensures that you can quickly retrieve and analyze information without delays, improving decision-making and operational efficiency.'
    },
    {
        icon: '/img/reports.svg',
        title: 'Financial Reports and Statements',
        description: 'The system provides a variety of financial reports, including statements for accounts and other essential documents, enabling you to maintain accurate and up-to-date records.'
    },
    {
        icon: '/img/additional-tools.svg',
        title: 'Additional Analytics Tools',
        description: 'Additional analytics tools that can be integrated to create specific, tailored reports for more granular insights, allowing you to conduct deep dives into areas like customer behavior, transaction patterns, and operational efficiencies.'
    },
    {
        icon: '/img/separation.svg',
        title: 'Separation of Technical and Business Reports',
        description: 'A separate set of technical reports ensures that your back-office team can access detailed system information, such as server logs, performance metrics, and error tracking, allowing for more effective troubleshooting and system optimization.'
    },
    {
        icon: '/img/uf.svg',
        title: 'Visual and User-Friendly Format',
        description: 'Reports can be displayed in various visual formats, making complex data easier to understand and present. View key metrics, financial balances, and performance data in a format that is both informative and visually digestible.'
    },
  ]


  return (
    <>
        <Hero title="Analytics and Reports" description="Easily generate various reports and present critical data with Arkam’s Analytics and Reports."/>

        <section className='bg-gray'>
            <div className='container'>
                <div className='flex gap-8 max-lg:flex-col items-center justify-between'>
                    <div className='lg:w-1/2'>
                        <motion.h2 {...fadeInUp(0.1)} className='section-title'>Drive operational excellence</motion.h2>
                        <motion.h4 {...fadeInUp(0.2)}>Save time and reduce manual effort while enhancing the accuracy of financial data. Arkam’s Analytics and Reports solution ensures you have the right information at your fingertips, with customizable reporting tools that enable your company to adapt to evolving business needs and regulatory requirements.</motion.h4>
                       
                    </div>
                    <div className='lg:w-1/2'>
                        <motion.img {...fadeInUp(0)} className='mx-auto' src='/img/drive-operational.svg' alt="Drive Operational" />
                    </div>
                    
                </div>
            </div>
        </section>

        <HorizontalSlider darkBg={true} title="Analytics and Reports Benefits" items={items} icon="/img/analytics-reports.svg" />
        
    </>
  )
}

export default page;
