'use client'
import Link from 'next/link'
import React from 'react'
import { CoursesSell1 , CoursesSell2, CoursesSell3, CoursesSell4, CoursesSell5, CoursesSell6 } from './CoursesSell'
import { Button } from './ui/button'
import { useState } from 'react';
const Section4 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
      setIsVisible(!isVisible);
  };
  
  return (
    <div className='px-4 py-10'>
        <div className='flex justify-center px-4'><h1 className='text-3xl font-bold text-center'>Courses</h1></div>
        <div className='py-4'><p className='text-center'>Your Unlimite Guide to Learn</p></div>
        <div className='flex justify-center text-sm gap-4 md:gap-6 lg:gap-8'>
          <Link href={'/'} className='hover:underline hover:underline-offset-8'>Popular</Link>
          <Link href={'/'} className='hover:underline hover:underline-offset-8'>Recommended</Link>
          <Link href={'/'} className='hover:underline hover:underline-offset-8'>Best Price</Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-6'>
          <CoursesSell1/>
          <CoursesSell2/>
          <CoursesSell3/>
          <CoursesSell4 visible={!isVisible}/>
          <CoursesSell5 visible={!isVisible}/>
          <CoursesSell6 visible={!isVisible}/>
        </div>
        <div className='flex justify-center py-10'>
          <Button variant={'outline'} onClick={toggleVisibility} className='border border-black'>{isVisible ? 'View All Courses' : 'View Less Courses'}</Button>
        </div>
    </div>
  )
}

export default Section4