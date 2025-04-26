import React from 'react'
import { Button } from '@/components/ui/button'
import {AlignJustify} from 'lucide-react'
function Navbar() {
    return (
        <div className='w-full  absolute top-1 flex items-center justify-between px-4 py-2'>
            <div className='w-full bg-white px-6 py-3 flex rounded-md items-center justify-between'>
                <div className='w-40 '>
                    logo
                </div>
                <AlignJustify className='md:hidden'/>
                <div className='w-fit  hidden md:flex items-center gap-x-4'>
                    <div className='w-fit  flex items-center gap-x-4'>
                        <span className='font-semibold text-md'>About us</span>
                        <span className='font-semibold text-md'>Contact us</span>
                        <span className='font-semibold text-md'>FAQ</span>
                    </div>
                    <div className='w-fit flex items-center gap-x-4'>
                        <Button className=' bg-white border-2  border-goViolet-700! text-neutral-800 font-semibold text-md  px-4 py-3 rounded-md'>Login</Button>
                        <Button className=' bg-goViolet-600 text-white border-2 border-goViolet-600  font-semibold text-md px- 4 py-3 rounded-md'>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
