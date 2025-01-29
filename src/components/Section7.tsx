import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Section7 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4 w-full px-4 py-10'>
      <div className='md:w-1/2'>
        <div><h1 className='text-center md:text-start font-bold py-2'>Subscribe to our newsletter</h1></div>
        <div><p className='text-center md:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
      </div>
      <div className='md:w-1/2'>
        <div className='flex flex-col md:flex-row  justify-center items-center gap-4 py-4'>
          <Input placeholder='Enter your email' className='border border-black' />
          <Button variant={'outline'} className='w-full md:w-auto border border-black hover:bg-black hover:text-slate-50'>Subscribe</Button>
        </div>
        <div className='flex text-xs gap-1 '><p>By subscribing you agree to with our </p><Link href={'/'} className='underline underline-offset-2'> Privacy Policy</Link></div>
      </div>
    </div>
  )
}

export default Section7