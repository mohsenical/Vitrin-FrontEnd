import React from 'react'

import { FaUserTie } from "react-icons/fa6";
import { MdOutlineHomeWork } from "react-icons/md";

function Comment() {
    return (
        <div className='full'>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center gap-x-2'>
                    <div className='flex justify-center items-center gap-x-1'>
                        <div className='flex justify-center items-center rounded-full bg-gray-300 p-1'>
                            <FaUserTie className='text-[12px]' />
                        </div>

                        <span className='text-[9px] md:text-[10px] text-gray-600 '>محسن پیغامی</span>
                    </div>

                    <div className='flex justify-center items-center bg-green-200 p-1 rounded-xl'>
                        <span className='text-[8px] text-green-800'>خریدار</span>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <span className='text-[8px] md:text-[9px] text-gray-600'>۲۵ شهریور ۱۴۰۵</span>
                </div>
            </div>

            <div className='flex px-1 w-full py-4'>
                <span className='text-[9px] leading-4 text-gray-600'>
                    سلام. دوستان با مصرف دو ماه و هر ماه دو عدد کپسول گرید چرب کبد بنده از ۲ به ۱.۵ کاهش پیدا کرد. منتظر موندم که تاثیرشو واقعی ببینم بعد اطلاع بدم. دوباره سفارش میدم ازش و ممنون از داروخانه مکمل کده که هم موقع سفارش تاریخ انقضای زیادی داشت و سالم به دستم رسید.
                </span>
            </div>

            <div className='flex justify-start items-center gap-x-1 px-1'>
                <MdOutlineHomeWork className='text-[12px]' />

                <span className='text-[9px] text-gray-600'>داروخانه مکمل کده</span>
            </div>
        </div>
    )
}

export default Comment
