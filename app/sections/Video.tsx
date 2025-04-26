import React from 'react'

function Video() {
  return (
    <section className='px-18 mt-12 w-full flex  items-center justify-center'>
        <video className="object-center rounded-lg overflow-hidden w-full" autoPlay
                loop
                muted
                playsInline src="/Goget.mp4"></video>
    </section>
  )
}

export default Video
