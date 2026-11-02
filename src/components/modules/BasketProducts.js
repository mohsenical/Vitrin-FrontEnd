import React from 'react'

import { IoIosArrowBack } from "react-icons/io"
import { MdOutlineHomeWork } from "react-icons/md"
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";

function BasketProducts() {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-x-1 md:gap-x-2'>

            <div className='flex gap-x-1 md:gap-x-2 h-full'>

                {/* Images */}
                <div className='w-[25%] md:w-[30%] h-[25%] md:h-[30%] border border-gray-200 rounded-md overflow-hidden'>
                    <img src='/Images/Products/product-3.webp' className='w-full h-full object-cover object-center' />
                </div>


                {/* Details */}
                <div className='flex flex-col justify-center gap-y-2 '>
                    {/* Offer */}
                    <div className='flex justify-start items-center gap-x-1 *:text-red-400 px-1'>
                        <TbSquareRoundedPercentage className='text-[12px] mb-0.5' />

                        <span className='text-[8px] font-bold'> فروش فوری </span>
                    </div>

                    {/* SectionTitle */}
                    <span className=' text-[8px]'>دسته بازی فیلیپس مدل 5010</span>

                    {/* Seller */}
                    <div className='flex flex-col gap-y-1'>
                        <div className='flex items-center gap-x-1'>
                            <MdOutlineHomeWork className='text-[10px] md:text-[12px] mb-0.5 text-gray-600' />

                            <div className='flex justify-center items-center *:text-gray-600'>
                                <span className='text-[7px] md:text-[8px]'>شیک سنتر</span>
                                <div className='w-[2px] md:w-[3px] h-[2px] md:h-[3px] bg-gray-400 mx-0.5 md:mx-1 rounded-full'></div>
                                <span className='text-[7px] md:text-[8px]'>سرویس ویژه دیجی کالا: 7 روز تضمین بازگشت کالا</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-x-1 *:text-gray-600'>
                            <HiOutlineColorSwatch className='text-[10px] md:text-[12px] mb-0.5' />

                            <span className='text-[7px] md:text-[8px]'>رنگ سفید</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Count Desktop */}
            <div className='hidden md:flex flex-col justify-between items-start gap-y-5 p-2'>
                <div className='flex flex-col gap-y-4'>

                    {/* Price */}
                    <div className='flex flex-col justify-end items-end gap-y-1 p-1'>
                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>


                            <div className='flex justify-center items-center p-0.5 bg-red-500 rounded-full *:text-white *:text-[8px]'>
                                <span className='mt-0.5'>4%</span>
                            </div>
                        </div>

                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-[8px] text-gray-800'>62,500,000</span>
                            <span className='text-[8px] text-red-600'>تومان</span>
                        </div>
                    </div>

                    {/* Count */}
                    <div className='flex items-center justify-center gap-x-3 bg-gray-200 rounded-xl p-0.5'>
                        <div className='flex justify-center items-center p-1 hover:bg-gray-300 rounded-full transition-all cursor-pointer'>
                            <MdOutlineAddCircleOutline className='text-[12px]' />
                        </div>

                        <span className='text-[12px] text-gray-800'>2</span>

                        <div className='flex justify-center items-center p-1 hover:bg-gray-300 rounded-full transition-all cursor-pointer'>
                            <LuTrash2 className='text-[12px]' />
                        </div>
                    </div>
                </div>

                {/* Btn */}
                <button className='mx-2 flex justify-center items-cente gap-x-1 cursor-pointer w-full'>
                    <span className='text-[8px] text-gray-800'>بعدا میخرم</span>

                    <IoIosArrowBack className='text-[9px] text-gray-800' />
                </button>
            </div>

            {/* Count Mobile */}
            <div className='flex md:hidden flex-row justify-between mt-2 w-full'>
                <div className='flex items-center justify-center gap-x-2 bg-gray-200 rounded-xl p-0.5'>
                    <div className='flex justify-center items-center p-1 hover:bg-gray-300 rounded-full transition-all cursor-pointer'>
                        <MdOutlineAddCircleOutline className='text-[10px] md:text-[12px]' />
                    </div>

                    <span className='text-[10px] md:text-[12px] text-gray-800'>2</span>

                    <div className='flex justify-center items-center p-1 hover:bg-gray-300 rounded-full transition-all cursor-pointer'>
                        <LuTrash2 className='text-[10px] md:text-[12px]' />
                    </div>
                </div>

                <div className='flex flex-col justify-end items-end gap-y-0.5'>
                    <div className='flex justify-center items-center gap-x-1'>
                        <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>


                        <div className='flex justify-center items-center p-0.5 bg-red-500 rounded-full *:text-white *:text-[8px]'>
                            <span className='mt-0.5'>4%</span>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-x-1'>
                        <span className='text-[8px] text-gray-800'>62,500,000</span>
                        <span className='text-[8px] text-red-600'>تومان</span>
                    </div>
                </div>

                <button className='mx-2 flex items-center gap-1 p-2 cursor-pointer'>
                    <span className='text-[8px] text-gray-800'>بعدا میخرم</span>

                    <IoIosArrowBack className='text-[9px] text-gray-800' />
                </button>
            </div>
        </div >
    )
}

export default BasketProducts
