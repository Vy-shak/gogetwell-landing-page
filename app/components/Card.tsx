import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface CardProps {
    image: StaticImageData,
    title: string,
    subtitle: string,
}

function Card({ image, title, subtitle }: CardProps) {
    return (
        <div className='flex shadow-md items-start justify-start w-full bg-white rounded-md p-2'>
            <Image src={image} alt="Card Image" className='w-12 h-12 rounded-md object-cover' />
            <div className='flex  flex-col items-start justify-start ml-4'>
                <span className='text-sm font-medium text-neutral-700'>{title}</span>
                <span className='text-sm font-medium text-neutral-500'>{subtitle}</span>
            </div>
        </div>
            )
}

export default Card
