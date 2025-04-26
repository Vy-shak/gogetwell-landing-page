import React from 'react'

function Video() {
  return (
    <section className='px-4 md:px-6 mt-6 w-full flex  items-center justify-center'>
        <video className="object-center rounded-lg overflow-hidden w-full" autoPlay
                loop
                muted
                playsInline src="/Goget.mp4"></video>
    </section>
  )
}

export default Video
