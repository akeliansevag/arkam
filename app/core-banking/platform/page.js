import React from 'react';
import Hero from '@/app/components/Hero';
import IconsTextGridThree from '@/app/components/IconsTextGridThree';
import IconsTextGrid from '@/app/components/IconsTextGrid';
import LeftRightGrid from '@/app/components/LeftRightGrid';
import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Core Banking | Platform',
    description: 'Whether cloud based, hybrid or on-premises, our platform will elevate your financial services, streamline your operations and safeguard your data.',
}

const page = () => {
  const items = [
    {
        image: '/img/banking-products.svg',
        title: 'Banking Products',
        description: 'A unified platform efficiently managing a wide selection of financial tools. Deliver customer-centric services with accelerated time-to-market.'
    },
    {
        image: '/img/regulatory-compliance-1.svg',
        title: 'Regulatory Compliance',
        description: 'Designed to monitor regulatory evolutions and implement standard solutions ensuring continuous operation within the set regulatory frameworks.Save costs -up to 70%! -while staying compliant.'
    },
    {
        image: '/img/real-time-accounting.svg',
        title: 'Real-time Accounting',
        description: 'Transactions are processed in real-time and updated instantly. Satisfy your customers and employees with accuracy and reduced errors.'
    },
    {
        image: '/img/single-instance.svg',
        title: 'Multi Entity Capability – single instance',
        description: 'Multi-entity support applying single best practices and processes throughout. In particular, international banks with multiple centers. Grow your business –fast scale across geographies and markets.'
    },
  ]

  const slider = [
    {
        icon: '/img/agile-and-flexible.svg',
        title: 'Agile and Flexible',
        description: 'Accelerate your time to market, with over 95% of customers going live within 2 months. Arkam’s platform seamlessly adapts to your customers’ needs, as it is a cloud-based, agnostic solution that makes it simple to integrate new features and digital tools.'
    },
    {
        icon: '/img/cost-efficient.svg',
        title: 'Cost Efficient',
        description: 'Reduce your expenses remarkably with Arkam’s Core Banking Platform. Minimize your budget with lower operation costs, automated updates and fewer resources required to go live while offering your customers exceptional seamless financial services.'
    },
    {
        icon: '/img/secure.svg',
        title: 'Secure',
        description: 'Enhance security and safeguard customer data from cyberattacks and breaches with the robust cybersecurity measures offered by Arkam’s Core Banking Platform. By eliminating security concerns, you can focus on what matters most: delivering unique customer experiences.'
    },
    {
        icon: '/img/innovative.svg',
        title: 'Innovative',
        description: 'Leveraging advanced AI algorithms and predictive analytics, Arkam’s Core Banking allows you to deliver tailored financial services that resonate with today’s digital-savvy consumers. These advancements enable real-time processing and personalized services, significantly improving operational efficiency and customer experience.'
    },
    {
        icon: '/img/time-efficient.svg',
        title: 'Time Efficient',
        description: 'Reduce time waste over lengthy processes and gain competitive advantage by being first in a fast-paced financial environment. Arkam’s Core Banking allows you to deliver functionalities faster, release new products within a shorter span of time and fast-track design and implementation of your services'
    },
  ]
  return (
    <>
        <Hero title="Platform" subtitle="Whether cloud based, hybrid or on-premises, our platform will elevate your financial services, streamline your operations and safeguard your data. " description="Compass: The all-in-one platform designed to optimize financial services empowering next gen fintech, Digital banks, Telcos, and traditional banks. <br /> <br />Created with agility and flexibility in mind, it’s where banking and payments are united at last. Compass seamlessly bridges crucial financial functions on a single, unified platform." />

        <LeftRightGrid title="Financial Services" items={items} />

        <HorizontalSlider items={slider} title="Title" icon="/img/fist.svg"/>
        
    </>
  )
}

export default page;
