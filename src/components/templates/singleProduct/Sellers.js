"use client"

import { useState } from "react";

import Seller from "@/components/modules/Seller";

import { FaStar } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { BsTruckFront } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


function Sellers() {

    const sellers = [
        {
            id: 1,
            name: "دیجی‌کالا",
            price: 2599000,
            oldPrice: 3544000,
            discount: 43,
            warranty: "گارانتی ۱۸ ماهه شرکتی",
            rating: 96.6,
            performance: "عالی",
            delivery: "تحویل عادی دیجی‌کالا",
        },
        {
            id: 2,
            name: "ویترین",
            price: 2695400,
            oldPrice: 3745000,
            discount: 28,
            warranty: "گارانتی ۱۸ ماهه ایستا",
            rating: 78.4,
            performance: "عالی",
            delivery: "تحویل عادی دیجی‌کالا",
        },
        {
            id: 3,
            name: "پارس بلو",
            price: 2690000,
            oldPrice: null,
            discount: null,
            warranty: "گارانتی ۱۸ ماهه آذین ارتباط ایرانیان",
            rating: 87.8,
            performance: "عالی",
            delivery: "تحویل عادی دیجی‌کالا",
        },
        {
            id: 4,
            name: "های تک کالا",
            price: 2800000,
            oldPrice: null,
            discount: null,
            warranty: "گارانتی ۱۸ ماهه ایستا",
            rating: 85,
            performance: "خیلی خوب",
            delivery: "تحویل عادی دیجی‌کالا",
        },
    ];

    const [showPanel, setShowPanel] = useState(false)

    const showAllSellers = () => {
        setShowPanel(!showPanel)
    }

    return (
        <div className="my-2">
            {/* Headers */}
            <div className='sm:py-2 py-1 sm:px-3 px-2'>
                <div className='hidden md:flex flex-col justify-center items-start gap-y-2 py-2 px-3 sm:w-[40%] md:w-[30%]'>
                    <span className='text-[12px] text-gray-700 font-bold'>فروشگاه ها</span>
                    <div className='bg-red-500 w-[40%] h-[1.5px] rounded-full'></div>
                </div>

                <div className='md:hidden flex justify-between items-center w-full'>
                    <div>
                        <span className='text-[9px] text-gray-800 font-bold'>فروشگاه ها</span>
                    </div>

                    <button onClick={showAllSellers} className="flex justify-center items-center gap-x-0.5 cursor-pointer">
                        <span className="text-[8px] text-blue-700">مشاهده همه</span>
                        <IoIosArrowBack className="text-[9px] text-blue-700" />
                    </button>
                </div>
            </div>

            {/* Sellers to Descktop */}
            <div className="hidden sm:inline-block w-full my-1">
                <div className="text-center *:odd:bg-gray-100 *:even:bg-white *:grid *:grid-cols-4 *:py-2 *:w-full">
                    <Seller />
                    <Seller />
                    <Seller />
                    <Seller />
                    <Seller />
                </div>

                {/* Show all */}
                <div className="flex justify-start items-center w-full px-2 ">
                    <button className="flex justify-center items-center gap-x-1  p-1.5 rounded-md cursor-pointer transition-all">
                        <span className="text-[9px] text-blue-700">مشاهده بیشتر</span>
                        <IoIosArrowBack className="text-[9px] text-blue-700" />
                    </button>
                </div>
            </div >

            {/* Sellers to Mobile */}
            <div className="sm:hidden flex flex-col w-full divide-y divide-gray-300 *:py-3 *:px-3">
                <div className="">
                    <div className="flex justify-start items-center ">
                        <AiFillProduct className="text-xl p-[3px] rounded-full bg-red-500 text-white " />

                        <div className="flex flex-col items-start justify-center gap-y-2 px-1">
                            <div className="px-1">
                                <p className="text-gray-800 text-[11px] font-bold">ویترین</p>
                            </div>

                            <div className='flex justify-center items-center w-full *:px-1 divide-x divide-gray-400'>
                                <div className='flex justify-center items-center gap-x-0.5'>
                                    <div className='flex justify-center items-center *: *:'>
                                        <FaStar className='text-gray-400 text-[9px]' />
                                        <FaStar className='text-gray-400 text-[9px]' />
                                        <FaStar className='text-yellow-600 text-[9px]' />
                                        <FaStar className='text-yellow-600 text-[9px]' />
                                        <FaStar className='text-yellow-600 text-[9px]' />

                                    </div>
                                    <span className='flex justify-center items-center text-[8px] text-gray-700'>رضایت از کالا</span>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <span className='text-[8px] text-gray-700'>عملکرد <span className='text-green-700'> عالی </span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery */}
                <div className="flex justify-start items-center">
                    <div className="flex flex-col">
                        <div className="flex justify-start items-center gap-x-1">
                            <div className="bg-red-700 p-0.5 flex justify-center items-center rounded-full">
                                <BsTruckFront className="text-[12px] text-white font-bold" />
                            </div>
                            <span className="text-[8px] text-gray-800 font-bold">تحویل عادی ویترین</span>
                        </div>

                        <div>
                            <span className="text-[8px] text-gray-700">تحویل سریع دیجی‌کالا (تهران و کرج)</span>
                        </div>
                    </div>
                </div>

                {/* Warranty */}
                <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center gap-x-1">
                        <div className="bg-blue-800 p-0.5 flex justify-center items-center rounded-full">
                            <GoShieldCheck className="text-[12px] text-white font-bold" />
                        </div>


                        <span className="text-[9px] font-bold text-gray-600">گارانتی ۱۸ ماهه شرکتی</span>
                    </div>
                </div>
            </div>

            {/* Panel */}
            <div className={`sm:hidden fixed inset-0 z-50 h-screen w-full *:px-2 ${showPanel ? "translate-y-0" : "translate-y-full"} bg-gray-50 overflow-hidden transition-transform duration-500 ease-in-out`}>

                {/* Headers */}
                <div className="flex justify-between items-center border-b border-gray-300 py-3 mb-2 shadow shadow-black/15 z-999">
                    <div className="flex flex-col *:text-[10px] gap-y-2">
                        <span className="font-bold">فروشندگان این کالا</span>
                        <span className="text-gray-700">5 فروشنده</span>
                    </div>

                    <div className="cursor-pointer p-1">
                        <IoMdClose onClick={showAllSellers} className="text-[15px]" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col w-full *:my-1 h-full pb-17 overflow-y-auto overscroll-contain">
                    <Seller />
                    <Seller />
                    <Seller />
                    <Seller />
                    <Seller />
                </div>
            </div>
        </div>

    )
}

export default Sellers
