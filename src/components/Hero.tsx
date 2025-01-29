import Image from 'next/image'
import React from 'react'
import {Button} from '@/components/ui/button'

const hero = () => {
    return (
            <div className='flex flex-col md:justify-between  md:h-auto md:flex-row'>
                <div className='flex flex-col py-8 px-4 justify-center md:w-4/6'>
                <div className='w-full'>
                        <h1 className='text-3xl font-bold pr-4 py-4 md:text-5xl lg:text-6xl '>Learn new skills <br /> online with ease</h1>
                </div>
                <div className='w-full '>
                        <p className='text-lg '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                </div>
                    <div className='flex gap-2 py-6'>
                        <Button variant={"outline"} className=' md:w-auto font-semibold border-black bg-black text-slate-50'>Start learning Now</Button>
                        <Button variant={"outline"} className=' md:w-auto font-semibold border-black hover:bg-black hover:text-slate-50 '>Explore Courses</Button>
                    </div>
                </div>
                    <div className='md:w-2/4 h-96 md:h-full overflow-hidden'>
                        <Image src={"/hero-logo.svg"} alt={"logo"} width={200} height={200} className='w-full h-auto object-contain'></Image>
                    </div>
            </div>

    )
}

export default hero