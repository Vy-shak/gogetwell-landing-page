import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
    return (
        <section className='flex flex-col gap-y-3 md:gap-y-5  items-center justify-center w-full'>
            <div className='flex gap-y-3 flex-col items-center justify-center w-full '>
            <div className='flex flex-col items-center justify-center w-full '>
                <h1 className='md:text-6xl text-4xl font-bold text-goViolet-500 text-center '>Website Builder</h1>
                <h1 className='md:text-6xl text-4xl font-bold text-goGreen-500 text-center '>For Healthcare Facilitators</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full '>
                <h6 className='font-semibold md:text-lg whitespace-nowrap text-goViolet-500 text-center text-md'><span>Create the </span><span className='text-goBlue-500'>AI store</span><span> in 2 Minutes</span></h6>
                <h6 className='font-semibold md:text-lg  text-goViolet-500 text-center  text-md'><span>Boost Patients Conversion and </span><span className='text-goBlue-500'>Earn While Sleeping</span></h6>
            </div>
            </div>
            <div className='flex items-center gap-x-4    justify-center w-full'>
                <Button className=' bg-white md:py-5 md:px-8 text-neutral-800 font-semibold text-md px-6 py-4 rounded-sm '>Login</Button>
                <Button className=' bg-goViolet-600 md:py-5 text-white font-semibold text-md px-6 py-4 rounded-sm '>Get Started</Button>
            </div>
        </section>
    )
}

export default Hero
