import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { Button } from './ui/button';
interface GridItemProps {
    visible: boolean
}

export function CoursesSell1() {
    return (
        <div className='flex flex-col w-full bg-[#f7f7f7] rounded-lg '>
            <div className='h-full'>
                <Image src={'/design.svg'} alt='' width={200} height={200} className='object-contain w-full rounded-lg'></Image>
            </div>
            <div className='flex flex-col w-full px-2 py-4'>
                <div className='flex justify-between w-full py-2'>
                    <h1 className='font-semibold'>Design</h1>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-gray-300 text-xl' />
                        <p className='font-semibold'>5.0</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                </div>
                <div className='py-2'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero culpa fugit dolor ratione eveniet accusamus</p>
                </div>
                <div className='flex items-center gap-4 py-2'>
                    <Button variant={'outline'} className='border border-black hover:bg-black hover:text-slate-50'>Enroll Now</Button>
                    <h1 className='font-semibold'>$400</h1>
                </div>
            </div>
        </div>
    )
}

//#########################################################################################################

export function CoursesSell2() {
    return (
        <div className='flex flex-col w-full bg-[#f7f7f7] rounded-lg'>
            <div className='h-full'>
                <Image src={'/programing.svg'} alt='' width={200} height={200} className='object-contain w-full rounded-lg'></Image>
            </div>
            <div className='flex flex-col w-full px-2 py-4 h-full contain-content'>
                <div className='flex justify-between w-full py-2'>
                    <h1 className='font-semibold'>Programming</h1>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-gray-300 text-xl' />
                        <p className='font-semibold'>5.0</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Introduction to Python</h1>
                </div>
                <div className='py-2'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero culpa fugit dolor ratione eveniet accusamus</p>
                </div>
                <div className='flex items-center gap-4 py-2'>
                    <Button variant={'outline'} className='border border-black hover:bg-black hover:text-slate-50'>Enroll Now</Button>
                    <h1 className='font-semibold'>$400</h1>
                </div>
            </div>
        </div>
    )
}

//#########################################################################################################

export function CoursesSell3() {
    return (
        <div className='flex flex-col w-full bg-[#f7f7f7] rounded-lg'>
            <div>
                <Image src={'/Business.svg'} alt='' width={200} height={200} className='object-contain w-full rounded-lg'></Image>
            </div>
            <div className='flex flex-col w-full px-2 py-4'>
                <div className='flex justify-between w-full py-2'>
                    <h1 className='font-semibold'>Business</h1>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-gray-300 text-xl' />
                        <p className='font-semibold'>5.0</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Data Analysis for Beginners</h1>
                </div>
                <div className='py-2'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero culpa fugit dolor ratione eveniet accusamus</p>
                </div>
                <div className='flex items-center gap-4 py-2'>
                    <Button variant={'outline'} className='border border-black hover:bg-black hover:text-slate-50'>Enroll Now</Button>
                    <h1 className='font-semibold'>$400</h1>
                </div>
            </div>
        </div>
    )
}

//#########################################################################################################

export function CoursesSell4 ({visible:visible}:GridItemProps) {
    return visible ? (
        <div className='flex flex-col w-full bg-[#f7f7f7] rounded-lg'>
            <div>
                <Image src={'/art.svg'} alt='' width={200} height={200} className='object-contain w-full rounded-lg'></Image>
            </div>
            <div className='flex flex-col w-full px-2 py-4'>
                <div className='flex justify-between w-full py-2'>
                    <h1 className='font-semibold'>Art</h1>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-gray-300 text-xl' />
                        <p className='font-semibold'>5.0</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Art Specialization</h1>
                </div>
                <div className='py-2'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero culpa fugit dolor ratione eveniet accusamus</p>
                </div>
                <div className='flex items-center gap-4 py-4'>
                    <Button variant={'outline'} className='border border-black hover:bg-black hover:text-slate-50'>Enroll Now</Button>
                    <h1 className='font-semibold'>$400</h1>
                </div>
            </div>
        </div>
    ) : null;
}

//#########################################################################################################

export function CoursesSell5( {visible:visible}:GridItemProps) {
    return visible ?  (
        <div className='flex flex-col w-full bg-[#f7f7f7] rounded-lg'>
            <div>
                <Image src={'/law.svg'} alt='' width={200} height={200} className='object-contain w-full rounded-lg'></Image>
            </div>
            <div className='flex flex-col w-full px-2 py-4'>
                <div className='flex justify-between w-full py-2'>
                    <h1 className='font-semibold'>Law</h1>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-gray-300 text-xl' />
                        <p className='font-semibold'>5.0</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Rule of Law</h1>
                </div>
                <div className='py-2'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero culpa fugit dolor ratione eveniet accusamus</p>
                </div>
                <div className='flex items-center gap-4 py-2'>
                    <Button variant={'outline'} className='border border-black hover:bg-black hover:text-slate-50'>Enroll Now</Button>
                    <h1 className='font-semibold'>$400</h1>
                </div>
            </div>
        </div>
    ) : null;
}

//#########################################################################################################

export function CoursesSell6({visible:visible}:GridItemProps) {
    return visible ?  (
        <div className='flex flex-col w-full bg-[#f7f7f7] rounded-lg'>
            <div>
                <Image src={'/tech.svg'} alt='' width={200} height={200} className='object-contain w-full rounded-lg'></Image>
            </div>
            <div className='flex flex-col w-full px-2 py-4'>
                <div className='flex justify-between w-full py-2'>
                    <h1 className='font-semibold'>Tech</h1>
                    <div className='flex justify-center items-center gap-2'>
                        <FaStar className='text-gray-300 text-xl' />
                        <p className='font-semibold'>5.0</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold'>Introduction to webflow</h1>
                </div>
                <div className='py-2'>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero culpa fugit dolor ratione eveniet accusamus</p>
                </div>
                <div className='flex items-center gap-4 py-2'>
                    <Button variant={'outline'} className='border border-black hover:bg-black hover:text-slate-50'>Enroll Now</Button>
                    <h1 className='font-semibold'>$400</h1>
                </div>
            </div>
        </div>
    ) : null;
}