import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='py-10'>
            <div className='flex flex-col md:flex-row justify-between px-4'>
                <div className='flex justify-center md:justify-start items-start'><Image src={'/Ddsgnr Library.svg'} alt='Ddsgnr' width={200} height={200}></Image></div>
                <div>
                    <ul className='flex flex-col gap-2 text-center md:text-start'>
                        <h1 className='py-4 text-lg font-bold'>Courses</h1>
                        <li><Link href={'/'}>Business</Link></li>
                        <li><Link href={'/'}>Development</Link></li>
                        <li><Link href={'/'}>Technology</Link></li>
                        <li><Link href={'/'}>Design</Link></li>
                        <li><Link href={'/'}>Programming</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-2 text-center md:text-start'>
                        <h1 className='py-4 text-lg font-bold'>Resources</h1>
                        <li><Link href={'/'}>Career</Link></li>
                        <li><Link href={'/'}>Resume</Link></li>
                        <li><Link href={'/'}>Learning</Link></li>
                        <li><Link href={'/'}>Interview Preparation</Link></li>
                        <li><Link href={'/'}>Jobs</Link></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-2 text-center md:text-start'>
                        <h1 className='py-4 text-lg font-bold'>About Us</h1>
                        <li><Link href={'/'}>Contact</Link></li>
                        <li><Link href={'/'}>Help/Support</Link></li>
                        <li><Link href={'/'}>FAQ</Link></li>
                        <li><Link href={'/'}>Terms and Conditions</Link></li>
                        <li><Link href={'/'}>Partners</Link></li>
                    </ul>
                </div>
            </div>
            <div className='px-4 py-8 '>
                <hr className='border border-t-black b' />
            </div>
            <div className='flex flex-col md:flex-row md:justify-between px-4'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-2 '>
                    <p className=' text-sm md:text-sm'>2023 Ddsgnr Library. All rights reserved.</p>
                    <div className='flex gap-2 md:gap-4 text-xs md:text-sm'>
                        <Link href={'/'} className='underline underline-offset-4'>Privacy Policy</Link>
                        <Link href={'/'} className='underline underline-offset-4'>Terms of Service</Link>
                        <Link href={'/'} className='underline underline-offset-4'>Cookie Settings</Link>
                    </div>
                </div>
                <div className='flex gap-2 justify-center py-4 text-xl'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Footer