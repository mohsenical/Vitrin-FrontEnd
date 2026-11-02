"use client"
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProposalProducts from './ProposalProducts';


function Proposal({ sectiontitle }) {
    return (
        <div className='w-full bg-gray-50 p-2 sm:p-2 border border-gray-300 rounded-md shadow shadow-black/10 my-2'>
            {/* Headers */}
            <div className='w-full justify-start items-center mb-3 mr-2'>
                <span className='text-[10px] font-bold'>{sectiontitle}</span>
            </div>

            {/* Mobile Size */}
            <div className="inline-block sm:hidden h-[90%] sm:h-full w-full rounded-xl">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={3}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[]}
                    className="h-full rounded-md "
                >

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-1.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-2.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-3.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-4.webp" price="12,300,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-5.webp" price="121,000,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-6.webp" price="178,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-7.webp" price="10,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-8.webp" price="7,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-9.webp" price="760,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-10.webp" price="3,700,000" />
                    </SwiperSlide>

                    {/* 
                    <SwiperSlide className="overflow-hidden bg-white">
                        <div className="flex flex-col justify-evenly items-center gap-y-1 h-full w-full bg-white py-1 sm:py-0">
                            <Link href="/" className="flex flex-col gap-y-1 justify-center items-center">
                                <IoIosArrowRoundBack className="text-gray-700 text-[12px]" />
                                <span className="text-gray-700 text-[8px]">مشهاده همه</span>
                            </Link>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>

            {/* Ipad Size */}
            <div className="hidden sm:inline-block md:hidden h-full sm:h-full w-full rounded-xl">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={4}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[]}
                    className="h-full rounded-md"
                >

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-1.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-2.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-3.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-4.webp" price="12,300,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-5.webp" price="121,000,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-6.webp" price="178,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-7.webp" price="10,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-8.webp" price="7,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-9.webp" price="760,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-10.webp" price="3,700,000" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* deskTop Size */}
            <div className="hidden md:inline-block h-full sm:h-full w-full rounded-xl">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={3}
                    freeMode={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[]}
                    className="h-full rounded-md"
                >

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-1.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-2.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-3.webp" price="1,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-4.webp" price="12,300,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-5.webp" price="121,000,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-6.webp" price="178,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-7.webp" price="10,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-8.webp" price="7,200,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-9.webp" price="760,000" />
                    </SwiperSlide>

                    <SwiperSlide className="h-[90%] overflow-hidden ">
                        <ProposalProducts image="product-10.webp" price="3,700,000" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Proposal


