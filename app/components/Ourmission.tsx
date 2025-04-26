import React from 'react'
import Marquee from "react-fast-marquee";
import Card from './Card';
import { Growth,Verify } from '../../public';

function Ourmission() {
    return (
        <section className='w-full px-4 flex-col gap-y-4 py-4 bg-goBlue-500 rounded-xl justify-center items-center flex'>
            <div className='w-full flex-col gap-y-4 flex justify-center items-center'>

            <span className='text-xl font-semibold text-white'>Our mission</span>
            <Marquee className=''>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
                <div className='text-neutral-300 ml-3 bg-white rounded w-40 h-20'></div>
            </Marquee>
            </div>
            <div className='w-full '>
                <p className='text-white text-center'>Our mission is to simplify the complex medical tourism process by leveraging advanced AI
tools that optimize healthcare facilitators operations, maximize revenue opportunities, and
provide patients with personalized and stress-free treatment journeys.</p>
<p className='text-white text-center'>We strive to become the leading platform for healthcare tourism management and digital
transformation.</p>
            </div>
            <div className='w-full flex-col gap-y-3  flex justify-center items-center'>
                <Card image={Verify}  subtitle='Optimizing operations with technology' title='AI-Powered Solutions'/>
                <Card image={Growth}  subtitle='Growth Focus' title='Maximizing revenue and
opportunities'/>
            </div>
        </section>
    )
}

export default Ourmission
