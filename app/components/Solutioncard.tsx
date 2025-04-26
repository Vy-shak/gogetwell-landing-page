import React from 'react'

interface SolutionCardProps {
    title: string,
    description: string,
}

function Solutioncard({ title, description }: SolutionCardProps) {
    return (
        <div className='flex border-b-4 border-b-goBlue-500 flex-col justify-start items-start w-full bg-white rounded-md p-4 shadow-md'>
            <div className='w-full h-20 bg-neutral-300 rounded-lg'>

            </div>
            <div className='flex flex-col justify-start items-start'>
                <span className='font-bold text-goViolet-500'>{title}</span>
                <p className='text-neutral-500 font-medium'>{description}</p>
            </div>
        </div>
    )
}

export default Solutioncard
