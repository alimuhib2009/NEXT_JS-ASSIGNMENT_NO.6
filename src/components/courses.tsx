import React from 'react'
import Image from 'next/image'

interface GridItemProps {
    visible: boolean
}
export function Courses1(){
    return(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/frame1.png'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Design & Development</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    )
}

//#####################################################################################################################
export function Courses2(){
    return(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/Frame2.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Marketing</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    )
}

//#####################################################################################################################
export function Courses3(){
    return(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/Frame3.png'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Development</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    )
}

//#####################################################################################################################
export function Courses4({visible:visible}:GridItemProps){
    return visible ?(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/Frame4.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Communication</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    ) : null;
}

//#####################################################################################################################
export function Courses5({visible:visible}:GridItemProps){
    return visible ?(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/frame5.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Digital Marketing</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    ) : null;
}

//#####################################################################################################################
export function Courses6({visible:visible}:GridItemProps){
    return visible ?(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/frame6.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Self Development</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    ) : null;
}

//#####################################################################################################################
export function Courses7({visible:visible}:GridItemProps){
    return visible ?(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/frame 7.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Business</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    ) : null;
}

//#####################################################################################################################
export function Courses8({visible:visible}:GridItemProps){
    return visible ?(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/frame8.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Finance</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    ) : null;
}

//#####################################################################################################################
export function Courses9({visible:visible}:GridItemProps){
    return visible ?(
        <div className='flex items-center bg-[#f7f7f7] p-2 rounded-lg w-full'>
            <div className='w-2/6'>
                <Image src={'/frame9.svg'} alt='' width={200} height={200} className='w-20 rounded-lg'/>
            </div>
            <div>
                <div><h1 className='font-bold'>Consulting</h1></div>
                <div><p>50+ Courses Avialable</p></div>
            </div>
        </div>
    ) : null;
}

//#####################################################################################################################
