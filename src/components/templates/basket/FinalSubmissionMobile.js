"use client"

import React, { useState } from 'react'

import { FaGift } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"

function FinalSubmissionMobile() {

    const [showPanel, setShowPanel] = useState(false)

    const showDitalsData = () => {
        setShowPanel(!showPanel)
    }

    return (
        <>
            <div className='sm:hidden sticky bottom-0 flex justify-between items-center w-full py-2 px-3 bg-white z-100'>

                {/* Button  */}
                <div className=''>
                    <button className='flex justify-center items-center w-full bg-gradient-to-t from-red-600 to-red-500 cursor-pointer p-2 rounded-md'>
                        <span className='text-white text-[10px]'>ثبت سفارش</span>
                    </button>
                </div>

                <div className='flex flex-col justify-end items-end gap-y-1'>
                    <div className='flex justify-center items-center gap-x-2'>
                        <button onClick={showDitalsData} className='flex justify-center items-center gap-x-0.5 *:text-gray-800 cursor-pointer'>
                            <span className='text-[9px]'>جمع ۲ کالا</span>
                            <IoIosArrowBack className='text-[9px] mb-0.5 ' />
                        </button>

                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>


                            <div className='flex justify-center items-center p-0.5 bg-red-500 rounded-full *:text-white *:text-[8px]'>
                                <span className='mt-0.5'>4%</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-x-1'>
                        <span className='text-[10px] text-black'>62,500,000</span>
                        <span className='text-[8px] text-red-600 font-bold'>تومان</span>
                    </div>
                </div>
            </div>

            {/* Panel */}
            <div className={`z-150 sm:hidden fixed inset-0 h-screen w-full *:px-2 ${showPanel ? "translate-y-0" : "translate-y-full"} overflow-hidden transition-transform duration-500 ease-in-out transition-all`}>
                <div className='w-full bg-white fixed bottom-0 py-5'>
                    {/* Headers */}
                    <div className='flex justify-start items-center w-full mb-3 px-2'>
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
                        <button onClick={showDitalsData} className='flex justify-center items-center w-full cursor-pointer p-2.5 rounded-md border border-gary-800'>
                            <span className='text-gary-800 text-[10px]'>متوجه شدم</span>
                        </button>
                    </div>
                </div>
            </div>


            {
                showPanel ? (<div onClick={showDitalsData} className='sm:hidden fixed inset-0 bg-gray-800/50 transition-colors z-120'></div>) : null
            }
        </>
    )
}

export default FinalSubmissionMobile
