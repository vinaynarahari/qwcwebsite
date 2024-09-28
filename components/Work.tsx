"use client";

import React from 'react'
import Button from './Button'
import Image from 'next/image'
import {CldVideoPlayer} from 'next-cloudinary'

const work = () => {
    return (
        <section> 
            <h1 className='capitalize lg:bold-64 md:bold-52 sm:bold-32 mt-10 text-MainColorOrange pl-10 pb-2 '>Specialized Teams, Consistent Work </h1>
            <h3 className='pl-24 text-MainColorGray pb-16 lg:bold-16 md:bold16 sm:bold16 capitalize'>* We use licensed subcontractors for plumbers and roofers.</h3>
         
                <video width="1920" height="1080" controls preload="none">
                <source src="/8mb video compressor.mp4" type="video/mp4" />
                <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
                </video>
            




        </section>
      );
}

export default work
