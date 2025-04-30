'use client';
import React, { useRef } from 'react';
import { motion } from "motion/react";
import { fadeInUp } from '../config/animations';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LeftRightGrid from './LeftRightGrid';

const VerticalSlider = ({items}) => {
    let sliderRef = useRef(null);
    
    var settings = {
        dots: true,
        dotsClass: 'custom-pagination',
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
    <section>
       
        <div className='lg:px-20 lg:mt-24 max-lg:mt-10'>
            <motion.div {...fadeInUp()} className='vertical-slider'>
                
                <Slider
                        ref={slider => {
                        sliderRef = slider;
                        }}
                        {...settings}
                        className='lg:!flex lg:flex-row-reverse gap-10 lg:items-center max-lg:text-center'
                    >
                    {
                        items.map((item,index)=>{
                            return (
                                <div className='vertical-slider-content' key={index}>
                                    
                                    <h2 className='section-title'>{item.title}</h2>
                                    {
                                        item.subtitle && (
                                            <p>{item.subtitle}</p>
                                        )
                                    }
                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />          
                                  
                                </div>
                            )
                        })
                    }
                </Slider>
            </motion.div>
            
        </div>
    </section>
  )
}

export default VerticalSlider;
