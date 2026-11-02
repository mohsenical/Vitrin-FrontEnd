import React from 'react'

import { AiFillProduct } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { BsTruckFront } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";


function Seller() {
    return (
        <div className="flex sm:flex-row flex-col justify-center  items-start sm:items-center *:py-2 text-center border border-gray-300 rounded-md sm:border-none">
            <div className='sm:hidden px-3 flex justify-start items-center w-full'>
                <span className='text-[10px] font-bold'>فروشنده</span>
            </div>

            {/* Seller */}
            <div className="px-3">
                <div className="flex justify-start md:justify-center items-center ">
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
            <div className="px-3 flex justify-start sm:justify-center items-center">
                <div className="flex flex-col justify-center items-start">
                    <div className="flex justify-center items-center gap-x-1">
                        <BsTruckFront className="text-[12px] text-black" />
                        <span className="text-[8px] text-gray-800">تحویل عادی دیجی‌کالا</span>
                    </div>

                    <div>
                        <span className="text-[8px] text-gray-700">تحویل سریع دیجی‌کالا (تهران و کرج)</span>
                    </div>
                </div>
            </div>

            {/* Warranty */}
            <div className="px-3 sm:px-0 flex justify-start sm:justify-center items-center">
                <div className="flex justify-center items-center gap-x-1">
                    <GoShieldCheck className="text-[12px] text-black mb-0.5 font-bold" />
                    <span className="text-[9px] font-bold text-gray-600">گارانتی ۱۸ ماهه شرکتی</span>
                </div>
            </div>

            {/* Add to basket & Price */}
            <div className='flex sm:justify-end justify-between items-center gap-x-1.5 px-3 w-full'>
                <div className='flex items-center justify-center gap-x-1 py-0.5'>
                    <div className='flex flex-row sm:flex-col gap-y-1 gap-x-1 sm:gap-x-0'>
                        <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>

                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-[8px] text-gray-800'>62,500,000</span>
                            <span className='text-[8px] text-red-600'>تومان</span>
                        </div>
                    </div>

                    <div className='flex justify-center items-center bg-red-500 rounded-full p-1 gap-x-0.5'>
                        <span className='text-[7px] text-white mb-0.5'>4%</span>
                    </div>
                </div>

                <button className='px-2 py-2 text-[10px] min-w-[7rem] rounded-sm text-white bg-gradient-to-t from-red-600 to-red-500 cursor-pointer'>افزودن به سبد خرید</button>

            </div>
        </div>
    )
}

export default Seller
