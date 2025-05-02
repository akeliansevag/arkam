
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
    title: 'Digital Products | Customer Onboarding',
    description: 'Make a lasting first impression with an intuitive onboarding process that ensures security, compliance, and a smooth customer journey. From effortless verification to personalized engagement, we help you turn new users into loyal customers.',
  }

const page = () => {
  const items_one = [
    {
      icon: '/img/smart-onboarding-journeys.svg',
      title: 'Smart Onboarding Journeys',
      description: 'Guide users with step-by-step introductions to key features based on their needs.'
    },
    {
      icon: '/img/targeted-content-and-insights.svg',
      title: 'Targeted Content & Insights',
      description: 'Deliver personalized recommendations, financial tips, and incentives to keep users engaged.'
    },
    {
      icon: '/img/interactive-learning-tools.svg',
      title: 'Interactive Learning Tools',
      description: 'Offer tutorials, financial literacy resources, and real-time assistance to boost confidence.'
    }
  ]

  const items_two = [
    {
      icon: '/img/aml-compliance.svg',
      title: 'AML/KYC Compliance',
      description: 'Stay ahead of regulations with seamless identity verification that balances security with user convenience.'
    },
    {
      icon: '/img/video-liveness-help.svg',
      title: 'Video Liveness Check',
      description: 'Instantly confirm user authenticity with AI-driven facial recognition, preventing fraud in real time.'
    },
    {
      icon: '/img/ocr-data-campture.svg',
      title: 'OCR Data Capture',
      description: 'Automate document processing for quick and accurate onboarding, reducing manual errors and delays.'
    }
  ]

  const items_four = [
    {
      icon: '/img/automated-invoicing.svg',
      title: 'Seamless Account Setup',
      description: 'Let users complete onboarding in minutes with intuitive navigation.'
    },
    {
      icon: '/img/customizable-digital-statements.svg',
      title: 'Autonomous Financial Management',
      description: 'Provide easy access to tools like budgeting, transfers, and account insights.'
    },
    {
      icon: '/img/eco-friendly.svg',
      title: 'Ongoing Support & Guidance',
      description: 'Ensure customers always have the resources they need to succeed.'
    }
  ]

  return (
    <div>
      <Hero title="Customer Onboarding" subsubtitle="Effortless, Secure, and Engaging from the Start" subtitle="Welcome New Customers with a Seamless Onboarding Experience" description="Make a lasting first impression with an intuitive onboarding process that ensures security, compliance, and a smooth customer journey. From effortless verification to personalized engagement, we help you turn new users into loyal customers."/>

      <IconsTextGridTwo description="Ensure compliance and protect your platform with a frictionless identity verification process." title="Effortless Verification & Security" items={items_two} background="/img/effortless-verification-and-security.webp" />

      <IconsTextGridThree title="Personalized Welcome & Engagement" description="Turn onboarding into a tailored journey that excites and engages new customers." items={items_one}/>


      <IconsTextGridFive title="Self-Service & Exploration" description="Empower customers to navigate your platform independently with ease." items={items_four}/>
      
      <CtaSection title="Build Trust from the First Interaction" description="With Arkam, deliver a smooth, secure, and intuitive journey that makes users feel at home from day one." cta={{text: 'Schedule a Demo', link: '/'}} cta2={{text: 'Contact Us', link: '/contact-us'}}/>
    </div>
  )
}

export default page;
