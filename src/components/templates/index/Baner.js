"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';

function Baner() {
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                pagination={{
                    dynamicBullets: true,
                }}

                modules={[Autoplay]}
                className="w-full h-26 sm:h-55 md:h-80 my-0 sm:m-2"
            >
                <SwiperSlide className='px-0.5 rounded-md overflow-hidden' >
                    <Link href="/">
                        <img className='w-full h-full object-cover object-center' src='Images/Baner/Baner-1.webp' alt='Baner-1' />
                    </Link>
                </SwiperSlide>

                <SwiperSlide className='px-0.5 rounded-md overflow-hidden' >
                    <Link href="/">
                        <img className='w-full h-full object-cover object-center' src='Images/Baner/Baner-2.webp' alt='Baner-2' />
                    </Link>
                </SwiperSlide >

                <SwiperSlide className='px-0.5 rounded-md overflow-hidden' >
                    <Link href="/">
                        <img className='w-full h-full object-cover object-center' src='Images/Baner/Baner-3.webp' alt='Baner-3' />
                    </Link>
                </SwiperSlide >

                <SwiperSlide className='px-0.5 rounded-md overflow-hidden' >
                    <Link href="/">
                        <img className='w-full h-full object-cover object-center' src='Images/Baner/Baner-4.webp' alt='Baner-4' />
                    </Link>
                </SwiperSlide >
            </Swiper >
        </>
    )
}

export default Baner


