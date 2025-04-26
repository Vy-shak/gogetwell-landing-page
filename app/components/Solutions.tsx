import React from 'react'
import Solutioncard from './Solutioncard'

function Solutions() {
  return (
    <section className='w-full  flex-col justify-center items-center flex'>
        <span className='text-xl font-bold text-goViolet-500'>Our Comprehensive Solutions</span>
        <div className='flex gap-y-4 items-center justify-center w-full flex-wrap'>
            <div className='w-full gap-x-3 md:flex-row items-center flex-col justify-center flex'>
                <Solutioncard title='Custom AI-Powered Website' description='Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.'/>
                <Solutioncard title='Enhanced Patient Conversion' description='Smart conversion optimization tools to turn visitors into patients with personalized experiences.'/>
                <Solutioncard title='Real-Time Query Handling' description='Instant response system for patient inquiries with AI-powered chat support.'/>
            </div>
            <div className='w-full gap-y-4  gap-x-3 flex-col md:flex-row  items-center justify-center flex'>
                <Solutioncard title='Medical Report Analysis' description='Advanced AI analysis of medical reports for quick and accurate patient assessments.'/>
                <Solutioncard title='Improved Lead Generation' description='Data-driven lead generation strategies to attract and engage potential patients.'/>
                <Solutioncard title='Comprehensive Healthcare Database' description='Streamline processes through automation for increased efficiency.'/>
            </div>
        </div>
    </section>
  )
}

export default Solutions
