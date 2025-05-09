import React from 'react';
import * as motion from "motion/react-client";
import { fadeInUp, fadeInUpOnMount } from '../config/animations';
import ReusableForm from '../components/ReusableForm';
import Hero from '../components/Hero';
import CtaContact from '../components/CtaContact';

export const metadata = {
    title: 'Arkam | Let\'s Connect',
    description: 'Tell us more about yourself, your company, and your goals.',
  }

const page = () => {
    const fields = [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'mobile', label: 'Mobile Number', type: 'text' },
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'company', label: 'Company Website', type: 'text' },
        { name: 'message', label: 'Message', type: 'textarea', fullWidth: true },
    ];
  return (
    <>  
        <Hero hideShape={true} title="Let's Connect" subtitle="Tell us more about yourself, your company, and your goals." description="Our team is excited to hear from you!" />
        <div className='container'>
            <div className='form-container'>
            <ReusableForm
                apiUrl="https://example.com/wp-json/contact-form-7/v1/contact-forms/1234/feedback"
                fields={fields}
            />
            </div>
        </div>
        <CtaContact />
    </>
  )
}

export default page;
