import React from 'react';
import Hero from '@/app/components/Hero';
import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Platform | Hybrid Banking',
    description: 'Hybrid Banking: The Best of Both Worlds',
}

const page = () => {
  const slider = [
    {
        icon: '/img/uninterruptive.svg',
        title: 'Ensure Uninterrupted Services',
        description: 'Guarantee continuous operations and safeguard your banking services with enterprise-grade availability and disaster recovery both on-premises and in the clouds. Our hybrid approach keeps you online, serving customers no matter what.'
    },
    {
        icon: '/img/maintain.svg',
        title: 'Maintain Robust On-Premises Control',
        description: 'Manage sensitive data and critical processes within your own data centers, ensuring high-security banking operations remain under on-premises supervision. Our hybrid model allows you to steer the wheel manually while embracing the benefits of the cloud.'
    },
    {
        icon: '/img/leverage.svg',
        title: 'Leverage the Elasticity of the Cloud',
        description: 'Scale up or down at the speed of your business. Respond to the constantly evolving customer demands while keeping your costs in check. Our cloud native architecture enables you to level up your financial services while increasing operational efficiency and reducing costs.'
    },
    {
        icon: '/img/empower.svg',
        title: 'Empower Your Workforce',
        description: 'Provide your employees with modern tools that facilitate their operations and enable them to excel. Our intuitive, cloud-based interfaces will enable your staff to deliver quick, efficient, and personalized services across multiple channels.'
    },
    {
        icon: '/img/accelerate.svg',
        title: 'Accelerate Time-to-Market',
        description: 'Launch new products faster than ever. Our streamlined, cloud-based development and deployment model eliminates traditional IT bottlenecks, giving you a competitive edge.'
    },
  ]
  return (
    <>
        <Hero title="Hybrid Banking" subtitle="Hybrid Banking: The Best of Both Worlds" description="Give Your Customers the Choice <br /> Cater to Diverse Banking Needs <br /> Blend Digital Preferences with Hands-on Support" />

        <HorizontalSlider bottomDescription="Introducing our transformative Hybrid Banking platform, the perfect equilibrium between innovation and stability answering the diverse customer needs in the banking industry." items={slider} description="In today's fast-paced financial landscape, the bank branch of the future offers consumers a hybrid experience blending traditional and digital banking to meet their distinct preferences. That's why we've engineered a core banking solution that seamlessly blends the power of the cloud with the control of on-premises infrastructure." title="Transformative Hybrid Banking Platform" icon="/img/hybrid-banking.svg"/>
        
    </>
  )
}

export default page;
