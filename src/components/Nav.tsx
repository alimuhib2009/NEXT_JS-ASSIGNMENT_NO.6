import React from 'react'
import Image from 'next/image'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link'
import {Button} from '@/components/ui/button'
const Nav = () => {
    return (
            <div className='flex justify-between items-center px-4 lg:px-8 py-3 border-slate-950 border-b-2 md:bg-[#f7f7f7]'>
                    <div className='md:w-1/6 h-2/3 p-1'><Image src={"/Ddsgnr Library.svg"}  alt={"logo"} width={200} height={200} className='object-contain w-full md:w-auto '></Image></div>
                <div className='hidden md:flex '>
                    <ul className='flex gap-1.5 lg:gap-4 md:w-full items-center bg-white pl-2 md:text-sm lg:text-lg'>
                        <li><Link href={'/'} className='hover:underline hover:underline-offset-8 '>Home</Link></li>
                        <li><Link href={'/'} className='hover:underline hover:underline-offset-8'>Courses</Link></li>
                        <li><Link href={'/'} className='hover:underline hover:underline-offset-8'>Services</Link></li>
                        <li><Link href={'/'} className='hover:underline hover:underline-offset-8'>Achievement</Link></li>
                        <li><Link href={'/'} className='hover:underline hover:underline-offset-8'>About Us</Link></li>
                        <li><Link href={'/'} className='hover:underline hover:underline-offset-8'>Testemonial</Link></li>
                        <li><Button variant={"outline"} className=' font-semibold border-black hover:bg-black hover:text-slate-50  '>Log In</Button></li>
                        <li><Button variant={"outline"} className=' font-semibold border-black bg-black text-slate-50 '>Sign Up</Button></li>
                    </ul>
                </div>
                <div className='flex items-center md:hidden'>
                    <DropdownMenu>
                        <DropdownMenuTrigger><IoMdMenu className='text-xl'/></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><Link href={'/'}>Home</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={'/'}>Courses</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={'/'}>Services</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={'/'}>Achievement</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={'/'}>About Us</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={'/'}>Testemonial</Link></DropdownMenuItem>
                            <DropdownMenuItem><Button variant={"outline"} className='w-full font-semibold border-black bg-black text-slate-50'>Sign Up</Button></DropdownMenuItem>
                            <DropdownMenuItem><Button variant={"outline"} className='w-full font-semibold border-black hover:bg-black hover:text-slate-50'>Log In</Button></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
)
}

export default Nav