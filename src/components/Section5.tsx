'use client'
import React from 'react'
import {Team1 , Team2 , Team3 , Team4 , Team5 , Team6} from '@/components/team'
import { Button } from './ui/button'
import { useState } from 'react';
const Section5 = () => {
     const [isVisible, setIsVisible] = useState(true);
    
      const toggleVisibility = () => {
          setIsVisible(!isVisible);
      };
  return (
    <div className='flex flex-col w-full px-4 bg-[#f7f7f7] py-10'>
        <div className='flex justify-center px-4'><h1 className='text-3xl font-bold text-center'>Our Team</h1></div>
        <div className='py-4'><p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
            <Team1/>
            <Team2/>
            <Team3/>
            <Team4 visible={!isVisible}/>
            <Team5 visible={!isVisible}/>
            <Team6 visible={!isVisible}/>
        </div>
        <div className='flex justify-center'>
            <Button variant={'outline'} onClick={toggleVisibility} className='border border-black'>{isVisible ? 'Show More' : 'Show Less'}</Button>
        </div>
    </div>
  )
}

export default Section5