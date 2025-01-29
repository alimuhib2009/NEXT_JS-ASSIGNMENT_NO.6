import React from 'react'

const acheivement = () => {
    return (
        <div className='px-4 py-10'>
            <div className='flex justify-center px-4'><h1 className='text-3xl font-bold text-center'>Our Achievement</h1></div>
            <div className='py-4'><p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam quis quo dolorem aliquid sunt tenetur </p></div>
            <div className='flex flex-col md:flex-row md:justify-between items-center gap-12 w-full p-4'>
                <div className='flex justify-around gap-4 w-full'>
                    <div>
                        <h1 className='text-center text-2xl md:text-4xl font-bold'>+200</h1>
                        <h2 className='text-center'>Courses</h2>
                    </div>
                    <div>
                        <h1 className='text-center text-2xl md:text-4xl font-bold'>50k</h1>
                        <h2 className='text-center'>Mentors</h2>
                    </div>
                </div>
                <div className='flex justify-around gap-4 w-full'>
                    <div>
                        <h1 className='text-center text-2xl md:text-4xl font-bold'>370k</h1>
                        <h2 className='text-center'>Students</h2>
                    </div>
                    <div>
                        <h1 className='text-center text-2xl md:text-4xl font-bold'>100+</h1>
                        <h2 className='text-center'>Recognitions</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default acheivement