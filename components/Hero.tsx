'use client';
import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
const hero = () => {
  return (
 
     <section className=' lg: lg:w-full xl:w-full xxl:bg-pattern-2 xl:bg-pattern-2 lg:bg-none md:bg-pattern-3  bg-no-repeat undraw-svg bg-contain sm:bg-none'>
      <div className=' bg-pattern-2 '/>
      <div className=' max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>

      

        

        {/*Left Side*/}
        <div className='realtive z-20 flex flex-1 flex-col xl:w-1/2'>
          
        <h1 className='bold-52 lg:bold-88 text-MainColorOrange'>Quality Work Construction</h1>
        <p className='bold-8  mt-6 text-MainColorGray xl:max-w-[520px]'>Quality Work Construction was built on the American dream, located in the big, windy city of Chicago, Illinois. Passed down from employer to employee, we have grown tremendously within our industry the past few years. Our expertise is in custom exterior and interior home remodels and additions— focusing on 100% honesty and quality, communicating transparently with all of our clients.</p>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Trusted By Thousands of Homeowners Near You',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Trusted By Thousands of Contractors Near You',
        1000,
        'Trusted By Thousands of Real Estate Investors Near You',
        1000,
        'Trusted By Thousands of Homeowners Seeking Repairs Near You',
        1000
      ]}
      
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.15em', display: 'inline-block', color: "#F79F48", paddingTop: "1rem" }}
      repeat={Infinity}
    />

        <div className='flex flex-col w-full gap-3 sm:flex-row pt-8'>
          <a href='https://calendly.com/qualityworkconstruction/estimates'>
            <Button
            type="button"
            title="Schedule a Meeting"
            variant="btn_black"
            
          />
          </a>
        
        </div>

        </div>

       
        </div>
     </section>
  
  )
}

export default hero
