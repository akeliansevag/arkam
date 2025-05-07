import React from 'react';
import Hero from '@/app/components/Hero';
import * as motion from "motion/react-client";
import { fadeInUp } from '@/app/config/animations';
import IconsTextGrid from '@/app/components/IconsTextGrid';
import HorizontalSlider from '@/app/components/HorizontalSlider';

export const metadata = {
    title: 'Technologies | Business Process Workflow',
    description: 'Business Process Workflow',
}

const page = () => {
  const items = [
    {
        icon: '/img/up.svg',
        title: 'High Straight-Through Processing (STP) Rates Across Departments',
        description: 'Tasks or processes are completed automatically, reducing the need for human involvement.'
    },
    {
        icon: '/img/workflow-automation.svg',
        title: 'Workflow Automation for Approvals',
        description: 'Instead of relying on staff to manually review and approve transactions or requests, an automated system can trigger approvals based on pre-defined rules and criteria.'
    },
    {
        icon: '/img/tight-compliance.svg',
        title: 'Tight Compliance Built-In from the Ground Up',
        description: 'Compliance with legal, regulatory, and industry standards is integrated into the system from the beginning, not added as an afterthought.'
    },
    {
        icon: '/img/full-audit.svg',
        title: 'Full Audit Trails and Granular Access Controls',
        description: 'Audit Trails: Full traceability and accountability, which is essential for both compliance and security purposes.Granular Access Controls: Only authorized individuals can access certain information, reducing the risk of unauthorized data access. Securing Every Step While Reducing Costs: Each step of the workflow is protected to ensure data integrity and privacy.'
    },
    {
        icon: '/img/digital-foundation.svg',
        title: 'Digital Foundation Satisfying Regulators and Boosting Efficiency',
        description: 'By digitizing workflows, businesses can meet regulatory standards more easily because the system can automatically enforce the required rules, handle data securely, and keep track of every step.'
    },
    {
        icon: '/img/customer-information.svg',
        title: 'Customer Information Stays Pristine with Segregated Views',
        description: 'Different teams or departments within an organization only have access to the information they need. Keeping customer information clean and organized with proper access controls eliminates the confusion and risk that comes with sharing sensitive data across multiple departments unnecessarily.'
    },
    {
        icon: '/img/zero-print.svg',
        title: 'Zero Print, No Paper Piles, No Lost Forms',
        description: 'A digital workflow ensures that documents and customer information are safely stored in a centralized, secure system, making retrieval and management easier, more efficient, and less error prone.'
    },
    
  ]


  return (
    <>
        <Hero title="Business Process Workflow" />

        <HorizontalSlider icon="/img/workflow.svg" items={items}/>
        
    </>
  )
}

export default page;
