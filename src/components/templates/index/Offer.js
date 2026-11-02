"use client"

import React from "react";
import Link from "next/link";

import OfferProduct from "@/components/modules/OfferProduct";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


function Offer() {
    return (
        <div className="bg-red-500 h-35 sm:h-55 md:h-50 py-3 sm:py-1 w-full sm:rounded-md overflow-hidden">
            <div className="flex flex-col md:flex-row justify-center h-full mx-1">

                <div className="flex md:flex-col items-center justify-between md:justify-center md:space-y-3 w-full h-[25%] md:h-full md:w-[15%] px-2 py-1">

                    <div className="flex flex-row md:flex-col justify-center gap-y-1 items-center space-x-1.5 md:space-y-1">
                        <img src="/Images/Offer/AmazingOffer.svg" className="w-[22px] sm:w-[40px] md:w-[120px] h-[22px] sm:h-[20px] md:w-[120px] " alt="AmazingOffer" />
                        <span className="text-[10px] sm:text-[12px] text-white"> شگفت انگیز </span>
                    </div>

                    <button className={`flex justify-center items-center sm:px-1 sm:py-1 sm:rounded-2xl sm:border sm:border-white  sm:hover:bg-red-100 *:text-white hover:*:text-gray-700 sm:hover:*:text-red-500 transition-all cursor-pointer`}>
                        <span className="text-[10px]">مشاهده همه</span>
                        <IoIosArrowBack className="text-[9px]" />
                    </button>


                </div>

                {/* Mobile Size */}
                <div className="inline-block sm:hidden h-[90%] sm:h-full w-full md:w-[85%] rounded-xl">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={3}
                        freeMode={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[]}
                        className="h-full rounded-md "
                    >

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-1.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-2.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-3.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-4.webp" price="12,300,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-5.webp" price="121,000,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-6.webp" price="178,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-7.webp" price="10,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-8.webp" price="7,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-9.webp" price="760,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-10.webp" price="3,700,000" />
                        </SwiperSlide>


                        <SwiperSlide className="overflow-hidden bg-white">
                            <div className="flex flex-col justify-evenly items-center gap-y-1 h-full w-full bg-white py-1 sm:py-0">
                                <Link href="/products" className="flex flex-col gap-y-1 justify-center items-center">
                                    <IoIosArrowRoundBack className="text-gray-700 text-[12px]" />
                                    <span className="text-gray-700 text-[8px]">مشهاده همه</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Ipad Size */}
                <div className="hidden sm:inline-block md:hidden h-full sm:h-full w-full md:w-[85%] rounded-xl">
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
                            <OfferProduct image="product-1.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-2.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-3.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-4.webp" price="12,300,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-5.webp" price="121,000,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-6.webp" price="178,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-7.webp" price="10,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-8.webp" price="7,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-9.webp" price="760,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-10.webp" price="3,700,000" />
                        </SwiperSlide>


                        <SwiperSlide className="h-[90%] overflow-hidden bg-white ">
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <Link href="/products" className="flex flex-col gap-y-1 justify-center items-center">
                                    <IoIosArrowRoundBack className="text-gray-700 text-[12px]" />
                                    <span className="text-gray-700 text-[10px]">مشهاده همه</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* deskTop Size */}
                <div className="hidden md:inline-block h-full sm:h-full w-full md:w-[85%] rounded-xl">
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
                            <OfferProduct image="product-1.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-2.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-3.webp" price="1,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-4.webp" price="12,300,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-5.webp" price="121,000,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-6.webp" price="178,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-7.webp" price="10,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-8.webp" price="7,200,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-9.webp" price="760,000" />
                        </SwiperSlide>

                        <SwiperSlide className="h-[90%] overflow-hidden ">
                            <OfferProduct image="product-10.webp" price="3,700,000" />
                        </SwiperSlide>


                        <SwiperSlide className="h-[90%] overflow-hidden bg-white ">
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <Link href="/products" className="flex flex-col gap-y-1 justify-center items-center">
                                    <IoIosArrowRoundBack className="text-gray-700 text-[12px]" />
                                    <span className="text-gray-700 text-[10px]">مشاهده همه</span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        </div >
    );
}

export default Offer
