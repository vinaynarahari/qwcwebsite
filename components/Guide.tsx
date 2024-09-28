import Image from 'next/image'
import React from 'react'

const guide = () => {
  return (
    <div>
      <section className='flexCenter flex-col h-full bg-feature-bg bg-contain bg-no-repeat guide-bg' id='guide'>
        <div className='padding-container max-container w-full pb-24'>
          <Image 
          src="/circlelogoQWC.png"
          width={125}
          height={125}
          alt='demo-logo'
          />
          <p className='uppercase regular-18 -mt-1 mb-3 text-MainColorLightOrange'> we are here for you</p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className='capitalize  text-MainColorOrange  bold-40 lg:bold-64 xl: max-w-[390px]'>Flawless Execution</h2>
            <p className='regular-24 text-MainColorOrange xl:max-w-[520px] bold-20 font-outline-2'>Revamping Chicago’s homes with flawless execution, we’re the epitome of professionalism and transparency in every addition and remodel project.</p>
          </div>
        </div>

        <div className='max-w-7xl  mx-auto w-full grid grid-cols-9 h-full pb-20 sm:pb-20 gap-3'>

        {/*First Timeline */}
          <div className='col-span-4 w-full h-full '>

            <div className='w-full h-full border-4  border-gray-120  rounded-2xl p-7 text-MainColorLightOrange bg-MainColorGray md:py-4 sm:hover:scale-90 lg:hover:scale-110 md:hover:scale-90  transition-all duration-500  hover:p-8 transformTextOrange borderTransitionOrange '>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Consultation and Quote</h1>
              <p className='text-white sm:text-sm text-xs pt-3'>Quality Work Construction offers unparalleled craftsmanship and efficient project completion. Fair pricing for exceptional quality. Let’s build your vision into a lasting legacy. Reach out for a custom quote.</p>
            </div>
          </div>
            <div className='col-span-1 w-full h-full flex justify-center items-center'>
              <div className='h-full w-1 bg-MainColorLightOrange'> </div>
              <div className='absolute w-6 h-6 rounded-full bg-MainColorOrange z-10 text-white text-center'>1</div>
            </div>
 
            <div className='col-span-4 w-full h-full'> </div>

{/*Second Timeline */}
          <div className='col-span-4 w-full h-full'> </div>

          <div className='col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-MainColorLightOrange'> </div>
            <div className='absolute w-6 h-6 rounded-full bg-MainColorOrange z-10 text-white text-center'>2</div>
          </div>

          <div className='col-span-4 w-full h-full'>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-MainColorLightOrange bg-MainColorGray  md:py-4 lg:hover:scale-110 xs:hover:scale-90 transition-all duration-500  hover:p-8 transformTextOrange borderTransitionOrange'>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Vision and Design</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>Immerse yourself in the future of your project with our bespoke 3D renderings. Our design team translates your unique style into a vivid preview, ensuring every detail aligns with your dream. Before the first stone is set, witness your vision in full clarity.</p>
            </div>
          </div>
          {/*Third Timeline */}
          <div className='col-span-4 w-full h-full'>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-MainColorLightOrange bg-MainColorGray  md:py-4 lg:hover:scale-110 xs:hover:scale-90 transition-all duration-500  hover:p-8 transformTextOrange borderTransitionOrange'>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Planning and Scheduling</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>With the approval of your design, our orchestration begins. We meticulously align every detail with precision, guided by our expert crews. Entrust us with the intricacies, and enjoy the peace of mind that comes with knowing your project is in capable hands.</p>
            </div>
          </div>
            <div className='col-span-1 w-full h-full flex justify-center items-center'>
              <div className='h-full w-1 bg-MainColorLightOrange'> </div>
              <div className='absolute w-6 h-6 rounded-full bg-MainColorOrange z-10 text-white text-center'>3</div>
            </div>
 
            <div className='col-span-4 w-full h-full'> </div>

            {/*fourth Timeline */}
          <div className='col-span-4 w-full h-full'> </div>

          <div className='col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-MainColorLightOrange '> </div>
            <div className='absolute w-6 h-6 rounded-full bg-MainColorOrange border-1 z-10 text-white text-center'>4</div>
          </div>

          <div className='col-span-4 w-full h-full'>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-MainColorLightOrange bg-MainColorGray  md:py-4 lg:hover:scale-110 xs:hover:scale-90 transition-all duration-500  hover:p-8 transformTextOrange borderTransitionOrange'>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Remodeled Transformation</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>Get ready for a transformation! With precision and creativity, we'll turn your space into something extraordinary. Expect cutting-edge designs, seamless execution, and a space that truly reflects your style. Stay informed with regular updates as we bring dream to reality!</p>
            </div>
          </div>

          
        </div>

      </section>
    </div>
  )
}

export default guide
