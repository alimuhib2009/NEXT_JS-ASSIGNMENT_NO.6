import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

interface GridItemProps {
    visible: boolean
}
export function Team1(){
    return (
        <div className='flex flex-col items-center'>
            <div><Image src={'/team1.svg'} alt={'team'} width={50} height={50} className='object-contain w-20 my-4'></Image></div>
            <div><h1 className='text-xl font-bold'>James Nduku</h1></div>
            <div><p>Marketing Coordinator</p></div>
            <div className='flex gap-2 py-4'>
                <FaLinkedin className='text-xl' />
                <FaTwitter className='text-xl' />
                <FaDribbble className='text-xl' />
            </div>
        </div>
    ) 
}

//#########################################################################################################################
export function Team2(){
    return (
        <div className='flex flex-col items-center'>
            <div><Image src={'/team2.svg'} alt={'team'} width={50} height={50} className='object-contain w-20 my-4'></Image></div>
            <div><h1 className='text-xl font-bold'>Joseph Munyambu</h1></div>
            <div><p>Nursing Assistant</p></div>
            <div className='flex gap-2 py-4'>
                <FaLinkedin className='text-xl' />
                <FaTwitter className='text-xl' />
                <FaDribbble className='text-xl' />
            </div>
        </div>
    )
}

//#########################################################################################################################
export function Team3(){
    return (
        <div className='flex flex-col items-center'>
            <div><Image src={'/team3.svg'} alt={'team'} width={50} height={50} className='object-contain w-20 my-4'></Image></div>
            <div><h1 className='text-xl font-bold'>Joseph Ngumbau</h1></div>
            <div><p>Medical Assistant</p></div>
            <div className='flex gap-2 py-4'>
                <FaLinkedin className='text-xl' />
                <FaTwitter className='text-xl' />
                <FaDribbble  className='text-xl'/>
            </div>
        </div>
    ) 
}

//#########################################################################################################################
export function Team4({visible:visible}:GridItemProps){
    return visible ? (
        <div className='flex flex-col items-center'>
            <div><Image src={'/team4.svg'} alt={'team'} width={50} height={50} className='object-contain w-20 my-4'></Image></div>
            <div><h1 className='text-xl font-bold'>Erick Kipkemboi</h1></div>
            <div><p>Web Designer</p></div>
            <div className='flex gap-2 py-4'>
                <FaLinkedin className='text-xl' />
                <FaTwitter className='text-xl'/>
                <FaDribbble className='text-xl'/>
            </div>
        </div>
    ) : null;
}

//#########################################################################################################################
export function Team5({visible:visible}:GridItemProps){
    return visible ? (
        <div className='flex flex-col items-center'>
            <div><Image src={'/team5.svg'} alt={'team'} width={50} height={50} className='object-contain w-20 my-4'></Image></div>
            <div><h1 className='text-xl font-bold'>Stephen Kerubo</h1></div>
            <div><p>President of Sales</p></div>
            <div className='flex gap-2 py-4'>
                <FaLinkedin className='text-xl' />
                <FaTwitter className='text-xl'/>
                <FaDribbble className='text-xl'/>
            </div>
        </div>
    ) : null;
}

//#########################################################################################################################
export function Team6({visible:visible}:GridItemProps){
    return visible ? (
        <div className='flex flex-col items-center'>
            <div><Image src={'/team6.svg'} alt={'team'} width={50} height={50} className='object-contain w-20 my-4'></Image></div>
            <div><h1 className='text-xl font-bold'>John Leboo</h1></div>
            <div><p>Dog Trainer</p></div>
            <div className='flex gap-2 py-4'>
                <FaLinkedin className='text-xl' />
                <FaTwitter className='text-xl'/>
                <FaDribbble className='text-xl'/>
            </div>
        </div>
    ) : null;
}

//#########################################################################################################################
