import React from 'react'
import Count from '../components/Count'
import Card from '../components/Card'
import { Boost, Message, Community, infra, Lock, Internet } from '../../public/index'


function Numbers() {
  return (
    <section className='w-full flex flex-col items-center justify-center '>
        <div className='flex items-center gap-x-12 md:gap-x-18 lg:gap-x-30 justify-center w-full'>
            <Count text='Qualified Docters' value={2100} />
            <Count text='Hospitals' value={1000}/>
            <Count text='Treatment plans' value={800}/>
        </div>
        <div className='flex flex-col items-center justify-center w-full max-w-2xl'>
        <div className='w-full flex-col md:flex-row  md:gap-x-6 md:px-12 gap-y-3 flex items-center justify-center mt-6'>
            <Card image={Internet} title="Online Website With AI Agent" subtitle="Intelligent digital presence"/>
            <Card image={Message} title="Patient Conversation" subtitle="Seamless communication"/>
        </div>


        <div className='w-full flex-col md:flex-row md:gap-x-36 gap-y-3 flex items-center justify-center mt-6'>
            <Card image={Boost} title="Boost Revenue" subtitle="Increase your earnings"/>
            <Card image={infra} title="Build Digital Business" subtitle="Scale your operations"/>
        </div>


        <div className='w-full flex-col md:flex-row md:gap-x-6 md:px-12 gap-y-3 flex items-center justify-center mt-6'>
            <Card image={Community} title="Lead Generation Support" subtitle="Convert visitors to clients"/>
            <Card image={Lock} title="24/7 Support for patient" subtitle="Round-the-clock assistance"/>
        </div>
        </div>
    </section>
  )
}

export default Numbers
