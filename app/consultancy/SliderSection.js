'use client';
import React, { useRef } from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderSection = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    var settings = {
        dots: true,
        dotsClass: 'custom-dots',
        customPaging: i => {
            return (
                <div></div>
            )
            
        },
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const items = [
        {
            title: 'Legal Services & Consulting',
            description: 'Expert guidance on regulatory requirements and structuring.',
            image: '/img/legal-services-and-consulting.webp'
        },
        {
            title: 'Legal Services & Consulting',
            description: 'Expert guidance on regulatory requirements and structuring.',
            image: '/img/legal-services-and-consulting.webp'
        },
        {
            title: 'Legal Services & Consulting',
            description: 'Expert guidance on regulatory requirements and structuring.',
            image: '/img/legal-services-and-consulting.webp'
        },
        {
            title: 'Legal Services & Consulting',
            description: 'Expert guidance on regulatory requirements and structuring.',
            image: '/img/legal-services-and-consulting.webp'
        },
        {
            title: 'Legal Services & Consulting',
            description: 'Expert guidance on regulatory requirements and structuring.',
            image: '/img/legal-services-and-consulting.webp'
        },
    ];
  return (
    <section>
        <div className='container max-w-[1100px]'>
            <motion.h2 {...fadeInUp()} className="section-title text-center">Licensing</motion.h2>
            <motion.p {...fadeInUp(0.1)} className="text-center">
            MSB, E-Money & Payment Institution Licensing <br />
            Get fully licensed to operate your <span className='text-white'>digital banking, e-wallet, or payment institution</span> with our all-in-one licensing solution. We handle everything, so you can stay focused on growing your business.
            </motion.p>
        </div>
        <div className='container lg:px-20 lg:mt-24 max-lg:mt-10'>
            <motion.div {...fadeInUp()} className='relative'>
                <div className='max-md:hidden hover:cursor-pointer group absolute z-10 top-1/2 -left-15 -translate-y-1/2' onClick={previous}>
                    <svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='stroke-gray-500  group-hover:stroke-white' d="M20.5 39.25L1.75 20.5L20.5 1.75" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div onClick={next} className='max-md:hidden group hover:cursor-pointer rotate-180 absolute z-10 top-1/2 -right-15 -translate-y-1/2'>
                    <svg width="22" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='stroke-gray-500  group-hover:stroke-white' d="M20.5 39.25L1.75 20.5L20.5 1.75" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <Slider
                        ref={slider => {
                        sliderRef = slider;
                        }}
                        {...settings}
                    >
                    {
                        items.map((item,index)=>{
                            return (
                                <div key={index}>
                                    <div className='bg-custom-gradient'>
                                        <div>
                                            <h3 className='text-xl'>{item.title}</h3>
                                            <p className='mt-2'>{item.description}</p>
                                            <img className='mt-10' src={item.image} alt={item.title}/>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </motion.div>
            
            <motion.p {...fadeInUp(0.1)} className="max-w-[800px] mx-auto text-center mt-10">We provide full-fledged <span className='text-white'>E-Money & Payment Institution Licensing</span> services and  <span className='text-white'>MSB registration</span> with a streamlined, hassle-free process.</motion.p>
            
        </div>
    </section>
  )
}

export default SliderSection;
