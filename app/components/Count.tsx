"use client"
import React from 'react'
import CountUp from 'react-countup';

function Count({text, value}: {text: string, value: number}) {
    return (
        <div className=" flex w-fit flex-col justify-start items-start text-5xl font-bold">
            <div className='flex items-center  w-fit'>
                <CountUp  enableScrollSpy className='text-goViolet-500 text-3xl md:text-4xl' end={value} duration={2} />
                <span className='text-goViolet-500   text-2xl md:text-4xl'>+</span>
            </div>
            <span className='text-sm md:text-lg  font-bold whitespace-nowrap text-goViolet-500'>{text}</span>
        </div>
    )
}

export default Count
