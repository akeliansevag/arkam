import React from 'react';
import * as motion from "motion/react-client";
import { fadeInUp, fadeInUpOnMount } from '../config/animations';
import ReusableForm from '../components/ReusableForm';

export const metadata = {
    title: 'Arkam | Partner With Us',
    description: 'Partner With Us',
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
        <section>
            <div className='container'>
                <motion.h2 className="text-center text-3xl lg:text-5xl xl:text-8xl leading-tight" {...fadeInUpOnMount()}>Partner With Us</motion.h2>
                <div className='form-container'>
                <ReusableForm
                    apiUrl="https://example.com/wp-json/contact-form-7/v1/contact-forms/1234/feedback"
                    fields={fields}
                />
                </div>
            </div>
        </section>
    </>
  )
}

export default page;
