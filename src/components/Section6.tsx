'use client'
import React from 'react'
import { Testimonial1, Testimonial2, Testimonial3, Testimonial4, Testimonial5, Testimonial6 } from '@/components/Testimonial'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const CustomerTesti = () => {
    return (
        <div className='px-4 py-10'>
            <div>
                <h1 className='text-3xl font-bold hidden md:block'>Customer Testimonials</h1>
                <h1 className='text-2xl font-bold md:hidden'>What Our Student Say</h1>
            </div>
            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <div className=' py-10 md:hidden'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem><Testimonial1 /></CarouselItem>
                        <CarouselItem><Testimonial2 /></CarouselItem>
                        <CarouselItem><Testimonial3 /></CarouselItem>
                        <CarouselItem><Testimonial4 /></CarouselItem>
                        <CarouselItem><Testimonial5 /></CarouselItem>
                        <CarouselItem><Testimonial6 /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
            <div className='py-10 hidden md:block'>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <div className='flex gap-2'>
                                <Testimonial1 />
                                <Testimonial2 />
                                <Testimonial3 />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className='flex gap-2'>
                                <Testimonial4 />
                                <Testimonial5 />
                                <Testimonial6 />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    )
}

export default CustomerTesti