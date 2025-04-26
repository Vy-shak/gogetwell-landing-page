import React from 'react'
import { Button } from '@/components/ui/button'

function Hero() {
    return (
        <section className='flex flex-col gap-y-3 items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center w-full '>
                <h1 className='text-7xl font-bold text-goViolet-500 whitespace-nowrap'>Website Builder</h1>
                <h1 className='text-7xl font-bold text-goGreen-500 whitespace-nowrap'>For Healthcare Facilitators</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full '>
                <h6 className='font-semibold whitespace-nowrap text-goViolet-500 text-md'><span>Create the </span><span className='text-goBlue-500'>AI store</span><span> in 2 Minutes</span></h6>
                <h6 className='font-semibold whitespace-nowrap text-goViolet-500 text-md'><span>Boost Patients Conversion and </span><span className='text-goBlue-500'>Earn While Sleeping</span></h6>
            </div>
            <div className='flex items-center gap-x-4    justify-center w-full'>
                <Button className=' bg-white text-neutral-800 font-semibold text-md px-12 py-6 rounded-md mt-4'>Login</Button>
                <Button className=' bg-goViolet-600 text-white font-semibold text-md px-12 py-6 rounded-md mt-4'>Get Started</Button>
            </div>
        </section>
    )
}

export default Hero
