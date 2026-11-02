import React from 'react'

import { RxExclamationMark } from "react-icons/rx"
import { FaGift } from "react-icons/fa";


function BasketSidebar() {
    return (
        <>
            <div className='hidden sm:inline-block sticky self-start top-20 w-[40%] md:w-[35%] border border-gray-300 rounded-md bg-gray-50'>

                {/* Headers */}
                <div className='hidden sm:flex justify-start items-center w-full py-4 px-3'>
                    <span className='text-[12px] font-bold text-gray-800'>جزئیات پرداخت</span>
                </div>

                {/* Comtent */}
                <div className='flex flex-col *:py-2 *:px-3'>
                    <div className='flex justify-between items-center px-1'>
                        <div className='flex justify-center items-center gap-x-0.5 *:text-gray-700'>
                            <span className='text-[9px]'>مجموع قیمت کالاها</span>
                            <span className='text-[9px]'>(۱ کالا)</span>
                        </div>

                        <div className='flex justify-center items-center gap-x-0.5'>
                            <span className='text-[9px] text-gray-700'>۱۱,۹۰۰,۰۰۰</span>
                            <span className='text-[8px] text-red-500'>تومان</span>
                        </div>
                    </div>

                    <div className='flex justify-between items-center bg-green-100 px-1'>
                        <div className='flex justify-center items-center gap-x-1 *:text-green-600'>
                            <FaGift className='text-[9px]' />
                            <span className='text-[9px]'>سود شما از خرید</span>
                        </div>

                        <div className='flex justify-center items-center gap-x-0.5 *:text-green-600'>
                            <span className='text-[10px]'>۱۱,۹۰۰,۰۰۰</span>
                            <span className='text-[8px]'>تومان</span>
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-1'>
                        <div className='flex justify-center items-center gap-x-0.5 *:text-gray-800'>
                            <span className='text-[9px]'>مجموع سبد خرید</span>
                        </div>

                        <div className='flex justify-center items-center gap-x-0.5'>
                            <span className='text-[9px] text-gray-700'>۱۱,۹۰۰,۰۰۰</span>
                            <span className='text-[8px] text-red-500'>تومان</span>
                        </div>
                    </div>
                </div>

                {/* Button  */}
                <div className='px-3 w-full my-3'>
                    <button className='flex justify-center items-center w-full bg-gradient-to-t from-red-600 to-red-500 cursor-pointer p-2.5 rounded-md'>
                        <span className='text-white text-[10px]'>ثبت سفارش</span>
                    </button>
                </div>

                {/* Warning */}
                <div className='flex justify-between items-center gap-x-1 px-3 mb-3'>
                    <div className='bg-mist-400 rounded-full mt-1 p-0.5'>
                        <RxExclamationMark className='rounded-full text-[10px] text-gray-200' />
                    </div>

                    <div className=''>
                        <span className='text-[8px] text-gray-500'>مبلغ سفارش هنوز پرداخت نشده و‌ در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketSidebar
