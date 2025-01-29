import Image from 'next/image'
import React from 'react'
import Slide from '@/components/Slide'

const Section2 = () => {
  return (
    <div className='flex flex-col items-center py-6 md:flex-row overflow-hidden'>
      <div className='md:w-2/5 md:px-4 bg-white'><h1 className='md:text-lg font-bold py-4'>Trusted by the world's best companies <br />[social proof to build credibility]</h1></div>
      <div className='-z-10 md:w-3/5'>
        <Slide />
      </div>
    </div>
  )
}

export default Section2