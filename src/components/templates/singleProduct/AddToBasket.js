import React from 'react'

import { AiFillProduct } from "react-icons/ai";
import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { BsTruckFront } from "react-icons/bs";

import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";



function AddToBasket() {
    return (
        <div className='hidden md:inline-block sticky self-start top-20 w-[35%]'>
            <div className='w-full rounded-md border border-gray-300 bg-gray-50 px-3 *:py-4 max-h-73 overflow-hidden'>

                {/* TopBar */}
                <div className='flex flex-col gap-y-4 border-b border-b-gray-300'>
                    <div className='flex justify-between items-center'>
                        <span className='text-[10px]'>فروشنده</span>

                        <div className='flex justify-center items-center gap-x-0.5 *:text-[8px] *:text-blue-600 cursor-pointer'>
                            <span className=''>3</span>
                            <span className=''>فروشنده دیگر</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-1.5 '>
                        <div className='flex gap-x-1 justify-start items-center'>
                            <AiFillProduct className='text-xl p-[3px] rounded-full bg-red-500 text-white ' />
                            <span className='text-[10px] text-gray-800'>ویترین</span>
                        </div>

                        <div className='flex justify-center items-center w-full divide-x divide-gray-400 *:px-1'>
                            <div className='flex justify-center items-center gap-x-0.5'>
                                <div className='flex justify-center items-center *: *:'>
                                    <FaStar className='text-gray-400 text-[9px]' />
                                    <FaStar className='text-gray-400 text-[9px]' />
                                    <FaStar className='text-yellow-600 text-[9px]' />
                                    <FaStar className='text-yellow-600 text-[9px]' />
                                    <FaStar className='text-yellow-600 text-[9px]' />

                                </div>
                                <span className='flex justify-center items-center text-[8px]'>رضایت از کالا</span>
                            </div>
                            <div className='flex justify-center items-center'>
                                <span className='text-[8px]'>عملکرد <span className='text-green-700'> عالی </span></span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Add to basket */}
                <div className='flex flex-col gap-y-2 border-b border-b-gray-300'>
                    <div className='flex flex-col justify-center gap-y-0.5 items-end py-0.5'>
                        <div className='flex justify-center items-center gap-0.5'>
                            <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>

                            <div className=' flex justify-center items-center bg-red-500 p-1 rounded-3xl'>
                                <span className='text-[8px] text-white'>4%</span>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-[10px] text-gray-800'>62,500,000</span>
                            <span className='text-[8px] text-red-600'>تومان</span>
                        </div>
                    </div>

                    <button className='w-full px-3 py-2 text-[10px] rounded-sm text-white bg-gradient-to-t from-red-600 to-red-500 cursor-pointer'>افزودن به سبد خرید</button>

                    <div className='flex justify-start items-center gap-x-1 mt-1'>
                        <RiShieldCheckLine className='text-[10px] text-gray-700 mb-0.5' />
                        <span className='text-[8px] text-gray-700'>گارانتی 18 ماه ویترین سرویس</span>
                    </div>
                </div>

                {/* Document */}
                <div className='flex flex-col gap-y-3'>
                    <div className='flex justify-between items-center cursor-pointer'>
                        <div className='flex justify-center items-center gap-x-1'>
                            <HiOutlineClipboardCheck className='text-[15px] text-blue-800' />

                            <span className='text-[9px] text-gray-800'>روش و هزینه و تحویل</span>
                        </div>

                        <IoIosArrowBack className='text-[12px] text-gray-500' />
                    </div>

                    <div className='flex flex-col justify-center items-start w-full gap-y-1.5'>
                        <div className='flex justify-center items-center gap-x-2 px-1'>
                            <div className='w-[5px] h-[5px] rounded-full bg-blue-800'></div>

                            <div className='flex justify-start items-center gap-x-0.5 w-full cursor-pointer'>
                                <BsTruckFront className='text-[10px] text-red-600' />

                                <div className='flex justify-center items-center'>
                                    <span className='text-[8px] text-gray-500'>باربری توسط ویترین . </span>
                                    <span className='text-[8px] text-gray-700'>وابسته به خرید</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-x-2 px-1'>
                            <div className='w-[5px] h-[5px] rounded-full bg-blue-800'></div>

                            <div className='flex justify-start items-center gap-x-0.5 w-full cursor-pointer'>
                                <BsTruckFront className='text-[10px] text-red-600' />

                                <div className='flex justify-center items-center'>
                                    <span className='text-[8px] text-gray-500'>باربری توسط ویترین . </span>
                                    <span className='text-[8px] text-gray-700'>وابسته به خرید</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddToBasket
