'use client';

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { REVIEWS } from "../constants"


const testomonial = () => {

    const size = screen.width;
    const isSmallScreen = size <= 640; 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Screen width at which the settings should change
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <section id= "testomonial" className=''>
    
        <div className='flex flex-wrap justify-between padding-container'>  <h1 className='capitalize lg:bold-64 md:bold-52 sm:bold-32 mt-10 text-MainColorOrange pl-10 '>Trusted Results</h1>

            <div className='w-3/4 m-auto'>
            
                <div className='mt-20'>

                
                    <Slider {...settings} >
                        {REVIEWS.map((review) => (
                    
                                <div className='bg-MainColorOrange h-[450px] text-white rounded-xl border-4 border-[#898989]'> 
                                    <div className='rounded-t-xl bg-MainColorLightOrange flex justify-center items-center'>
                                    <img src={review.img} alt='image' className='h-44 w-44 rounded-full'></img>
                                    </div>

                                    <div className='flex flex-col justify-center items-center gap-4 p-4'> 
                                        <p className='text-xl font-semibold'>{review.name}</p>
                                        <p>{review.review}</p>
                                    </div>

                                </div>
                
                            

                        ))}
                    </Slider>
                </div>
            
            </div>
        </div>
    </section>
  );
}



export default testomonial
