'use client';
import React from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';
import Link from 'next/link';

const JobOpenings = () => {
  const openings = [
    {
       title: 'Regional Sales Manager',
       location: 'South East Asia – Remote',
       description: 'The Regional Sales Manager/Director is responsible for all the commercial activities in South East Asia, and will spearhead all direct sales and business development activities within the region.',
       cta: {
          text: 'Apply Now',
          link: 'https://www.linkedin.com/jobs/view/4337007601/'
       }
    },
    {
       title: 'Regional Sales Manager',
       location: 'Latin America – Remote',
       description: 'The Regional Sales Manager/Director is responsible for all the commercial activities in Latin America, with the possibility to be based in Brazil, Mexico, or Colombia, or any other country, and will spearhead all direct sales and business development activities within the region.',
       cta: {
          text: 'Apply Now',
          link: 'https://www.linkedin.com/jobs/view/4336868175/'
       }         
    },
    {
       title: 'DevOps Engineer',
       location: 'Lebanon',
       description: 'Your role as a DevOps Engineer is to be responsible for tackling Monty Holding’s technical problems with close coordination with the Sr. DevOps Engineer and driving technical excellence at all levels, and working with senior management to support the execution of the organization\'s vision.',
       cta: {
          text: 'Apply Now',
          link: 'https://www.linkedin.com/jobs/view/4335213129/'
       }         
    },
  ];
  return (
    <section>
        <div className='container'>
            <motion.h2 {...fadeInUp()} className="text-center section-title">Current Openings</motion.h2>
            <motion.p className="max-w-[800px] mx-auto text-center">We are currently hiring for the following positions</motion.p>
            <div className='flex gap-5 max-lg:flex-col mt-10'>
                {
                    openings && openings.map((job,key)=>
                        (
                            <motion.div key={key} {...fadeInUp(key/10)} className="bg-gradient-light rounded-2xl p-8 w-full text-center">
                                <div className='flex justify-center mb-4'>
                                    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 25.5L4.5 25.15C4.5 22.2097 4.5 20.7396 5.07222 19.6165C5.57555 18.6287 6.3787 17.8255 7.36655 17.3222C8.48958 16.75 9.95972 16.75 12.9 16.75L24.1 16.75C27.0403 16.75 28.5104 16.75 29.6334 17.3222C30.6213 17.8256 31.4244 18.6287 31.9278 19.6165C32.5 20.7396 32.5 22.2097 32.5 25.15L32.5 25.5M4.5 25.5C2.567 25.5 0.999999 27.067 0.999999 29C0.999999 30.933 2.567 32.5 4.5 32.5C6.433 32.5 8 30.933 8 29C8 27.067 6.433 25.5 4.5 25.5ZM32.5 25.5C30.567 25.5 29 27.067 29 29C29 30.933 30.567 32.5 32.5 32.5C34.433 32.5 36 30.933 36 29C36 27.067 34.433 25.5 32.5 25.5ZM18.5 8L18.5 25.5M18.5 8C16.567 8 15 6.433 15 4.5C15 2.567 16.567 0.999999 18.5 0.999999C20.433 0.999999 22 2.567 22 4.5C22 6.433 20.433 8 18.5 8ZM18.5 25.5C16.567 25.5 15 27.067 15 29C15 30.933 16.567 32.5 18.5 32.5C20.433 32.5 22 30.933 22 29C22 27.067 20.433 25.5 18.5 25.5Z" stroke="url(#paint0_linear_1645_1763)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1645_1763" x1="36" y1="16.75" x2="0.999999" y2="16.75" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#05A6A6"/>
                                    <stop offset="1" stopColor="#0D5B6A"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>
                                </div>
                                

                                <h5 className="small-title text-gray-200 hover:text-white">{job.title}</h5>
                                <div className="italic mb-4 mt-2">{job.location}</div>
                                <p className="mt-3 line-clamp-3">{job.description}</p>
                                {
                                    job.cta && job.cta.text && job.cta.link && (
                                        <Link target="_blank" href={job.cta.link} className="button-primary !mt-6 inline-block">{job.cta.text}</Link>
                                    )
                                }
                            </motion.div>
                        )
                    )
                }
                
            </div>
        </div>
    </section>
  )
}

export default JobOpenings
