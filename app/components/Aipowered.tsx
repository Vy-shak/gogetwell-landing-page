import React from 'react'
import { Button } from '@/components/ui/button'

function Aipowered() {
  return (
    <div className='flex h-fit py-6 gap-y-6 px-4 flex-col items-start justify-start w-full bg-goBlue-500'>
      <div className='w-full flex flex-col justify-start items-start '>
        <span className='text-white font-bold  text-2xl'>Get Your Patient Ready Website Now</span>
        <p className='text-white font-normal text-md'>Use power AI to transform your online presence and automate patient
        interactions</p>
      </div>
      <Button size={"sm"} className='bg-white max-w-sm w-full rounded-sm text-goBlue-500 font-md'>Join the waiting list</Button>
    </div>
  )
}

export default Aipowered
