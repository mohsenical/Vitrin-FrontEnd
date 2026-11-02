import React from 'react'

import { RiShieldCheckLine } from "react-icons/ri";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdOutlineHomeWork } from "react-icons/md";

function MiniCard() {
    return (
        <div className='hidden sm:inline-block sticky self-start top-20 sm:w-[30%] md:w-[20%] my-2'>
            <div className='flex flex-col border border-gray-300 rounded-md bg-gray-50'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center w-[40%] p-2'>
                        <img src='/Images/SingleProduct/iphone-1.webp' alt='iphone-1.webp' className='w-[100%] h-[100%]' />
                    </div>
                    <span className='text-[8px] w-[60%] leading-3 text-gray-600 font-bold'>کاور مدل سیلیکونی مناسب برای گوشی موبایل اپل iPhone 13/iPhone 14</span>
                </div>

                <div className='w-[90%] border-t border-gray-200 mx-auto'></div>

                <div className='flex flex-col gap-y-1 px-2 py-4'>
                    <div className='flex flex-col gap-y-3 *:flex *:justify-start *:items-center *:gap-x-1'>
                        <div>
                            <MdOutlineHomeWork className='text-[12px] text-gray-800' />
                            <span className='text-[8px] text-gray-600'>داروخانه مکمل کده</span>
                        </div>

                        <div>
                            <RiShieldCheckLine className='text-[12px] text-gray-800' />
                            <span className='text-[8px] text-gray-600'>تاریخ انقضا بین دو تا سه ماه</span>

                        </div>

                        <div>
                            <HiOutlineClipboardCheck className='text-[12px] text-blue-600' />
                            <span className='text-[8px] text-gray-600'>موجود در انبار فروشنده</span>
                        </div>

                    </div>
                    <div className='flex flex-col gap-y-2 border-b border-b-gray-300'>
                        <div className='flex flex-col justify-center gap-y-0.5 items-end py-0.5'>
                            <div className='flex justify-center items-center gap-0.5'>
                                <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>

                                <div className=' flex justify-center items-center bg-red-500 p-1 rounded-2xl'>
                                    <span className='text-[8px] text-white'>4%</span>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-x-1'>
                                <span className='text-[10px] text-gray-800'>62,500,000</span>
                                <span className='text-[8px] text-red-600'>تومان</span>
                            </div>
                        </div>

                        <button className='w-full px-3 py-2 text-[10px] rounded-sm text-white bg-gradient-to-t from-red-600 to-red-500 cursor-pointer'>افزودن به سبد خرید</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniCard
