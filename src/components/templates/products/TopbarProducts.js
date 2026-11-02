import React from 'react'

import { IoFilter } from "react-icons/io5";

function TopbarProducts() {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center w-full *:p-1 gap-y-1 sm:gap-y-0'>
            <div className='flex justify-start items-center gap-x-3 w-full sm:w-[80%] md:w-[50%] p-0 sm:p-2 *:text-[8px] *:text-gray-500 *:hover:text-gray-700 *:transition-all *:cursor-pointer'>
                <div className='flex justify-center items-center gap-x-0.5'>
                    <IoFilter className='text-[8px] text-gray-700' />
                    <span className='text-[8px] text-gray-700'>مرتبط ترین</span>
                </div>

                <span>
                    پربازدید ترین
                </span>

                <span>
                    جدید ترین
                </span>

                <span>
                    پرفروش ترین
                </span>

                <span>
                    ارزان ترین
                </span>

                <span>
                    گزان ترین
                </span>
            </div>

            <div className='flex justify-start sm:justify-end items-center gap-x-1 w-full sm:w-[20%] md:w-[50%]'>
                <span className='text-[9px] text-gray-500'>16,956,000</span>
                <span className='text-[9px] text-gray-500'>کالا</span>
            </div>
        </div>
    )
}

export default TopbarProducts
