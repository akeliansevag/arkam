'use client';
import React, { useRef } from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HorizontalSlider  = ({items,title,description,icon, bottomDescription}) => {
    let sliderRef = useRef(null);
    
    var settings = {
        dots: true,
        dotsClass: 'custom-pagination-two',
        customPaging: i => {
            return (
                <div>{i+1}</div>
            )
            
        },
        fade: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    
  return (
    <section className='bg-gradient-blue'>
        <div className='container'>
            <div className='text-center max-w-[800px] mx-auto mb-10'>
                <h2 className='section-title'>{title}</h2>
                {
                    description && (
                        <h5>{description}</h5>
                    )
                }
            </div>
            
            <div className='w-full flex max-lg:flex-col '>
                <div className='relative lg:w-1/2 py-12 max-lg:px-5 lg:px-12'>
                    <div className='slider-bg'></div>
                    <motion.div {...fadeInUp()} className='horizontal-slider'>
                        
                        <Slider
                                ref={slider => {
                                sliderRef = slider;
                                }}
                                {...settings}
                            >
                            {
                                items.map((item,index)=>{
                                    return (
                                        <div className='text-center flex-col justify-center items-center' key={index}>
                                            <div>
                                                <img className='mx-auto' src={item.icon} alt={item.title}/>
                                            </div>
                                            <h3 className='font-bold mt-5 text-xl'>{item.title}</h3>
                                            {
                                                item.subtitle && (
                                                    <p>{item.subtitle}</p>
                                                )
                                            }
                                            <div className='mt-3 lg:mb-10 text-base' dangerouslySetInnerHTML={{ __html: item.description }} />          
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </motion.div>                    
                </div>
                
                <div className='relative lg:w-1/2 py-12 flex items-center justify-center max-lg:px-5 lg:px-12'>
                    <div className='slider-bg-2'></div>
                    {
                        icon && (
                            <motion.div {...fadeInUp(0.1)}>
                                <img src={icon} alt="icon"/>
                            </motion.div>
                           
                        )
                    }
                </div>
                
            </div>
            
            {
                bottomDescription && (
                    <motion.div {...fadeInUp(0.2)} className='max-w-[1000px] mx-auto text-center mt-12'>
                        <p className='!text-white'>{bottomDescription}</p>
                    </motion.div>
                )
            }
            
        </div>
        
    </section>
  )
}

export default HorizontalSlider ;
