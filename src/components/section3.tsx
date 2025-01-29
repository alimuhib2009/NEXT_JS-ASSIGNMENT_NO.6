'use client'
import React from 'react'
import { Courses1,Courses2,Courses3,Courses4,Courses5,Courses6,Courses7,Courses8,Courses9 } from './courses'
import {Button} from '@/components/ui/button'
import  {useState}  from 'react';   

const Section3 = () => {

  const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
      
    return (
        <div className='px-4 py-10'>
            <div className='flex justify-center px-4'><h1 className='text-3xl font-bold text-center'>Explore Courses By Category</h1></div>
            <div className='py-4'><p className='text-center'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 py-10'>
                    <Courses1 />
                    <Courses2 />
                    <Courses3 />
                    <Courses4 visible={!isVisible}/>
                    <Courses5 visible={!isVisible}/>
                    <Courses6 visible={!isVisible}/>
                    <Courses7 visible={!isVisible}/>
                    <Courses8 visible={!isVisible}/>
                    <Courses9 visible={!isVisible}/>

            </div>
            <div className='flex justify-center p-6 '><Button variant={'outline'} onClick={toggleVisibility} className='border border-black'>{isVisible ? 'View All Courses' : 'View Less Courses'}</Button></div>
        </div>
    )
}

export default Section3