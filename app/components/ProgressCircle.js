import React from 'react';

const ProgressCircle = ({number,title,description, hideArrow}) => {
  return (
    <div className='relative flex max-lg:flex-col-reverse lg:flex-row-reverse items-center w-full lg:px-2 max-lg:mb-4 lg:mb-10'>
        <div className='w-[55px] h-[54px] max-lg:-translate-y-2 lg:-translate-x-2 max-lg:rotate-90'>
            {
                !hideArrow && (
                    <img src='/img/arrow-right.svg' alt="arrow right"/>
                )
            }
        </div>
        
        
        <div className="relative max-lg:w-full max-lg:mx-auto lg:w-[calc(100%-55px)] aspect-square inline-block">
                <div className='absolute lg:right-1/6 flex items-center justify-center w-1/5 aspect-square rounded-full border border-secondary max-lg:bottom-1/7 max-lg:right-0 lg:top-0 z-30 bg-[linear-gradient(140deg,_#0C3D48_0%,_#1D2838_100%)]'>
                    <span className='text-gold font-bold text-2xl'>
                        {number}
                    </span>
                </div>
                <div className="absolute inset-0 rounded-full before:content-[''] rotate-y-180 max-lg:rotate-z-[-119deg] lg:rotate-z-[-30deg] before:absolute before:inset-0 before:rounded-full before:[background:conic-gradient(#113b50_0deg,_#0a767f_135deg,_#05a6a6_300deg,_transparent_300deg,_transparent_360deg)] before:z-0" />

                <div className='absolute flex items-center justify-center bg-[linear-gradient(142.27deg,_#0C3D48_-6.13%,_rgba(29,_40,_56,_0.5)_107.12%)] w-[80%] h-[80%] rounded-full z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-8'>
                    <div className='text-center'>
                        <h5 className='text-xl mb-2 text-balance'>{title}</h5>
                        <p className='!mb-0'>{description}</p>
                    </div>
                </div>
        
                <div className="absolute inset-0 m-[6px] rounded-full bg-primary-900 z-10" />
        </div>
    </div>
    
  )
}

export default ProgressCircle
