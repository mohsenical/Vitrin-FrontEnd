import React from 'react'

import Color from '@/components/modules/Color';
import Tooltip from '@/components/modules/Tooltip';
import SectionHeaders from '@/components/modules/SectionHeaders';


import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { PiSpeedometerBold } from "react-icons/pi";
import { RxExclamationMark } from "react-icons/rx";

import { GrMoney } from "react-icons/gr";
import { MdNotificationImportant } from "react-icons/md";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import Collors from './Collors';


function DetailsCard() {
    return (
        <div className='flex flex-col w-full md:w-[65%] md:border-t md:border-gray-300 bg-white *:px-2 md:*:px-0 divide-y md:divide-none divide-gray-300 *:py-3 '>

            {/* Score */}
            <div className='flex items-center justify-start gap-x-1 w-full '>
                <div className='flex justify-center items-center gap-x-1'>
                    <FaStar className='text-[8px] sm:text-[9px] mb-0.5 text-yellow-600' />
                    <span className='text-[8px] sm:text-[9px] text-gray-700'>4.4</span>
                    <span className='text-[8px] sm:text-[9px] text-gray-400'>(امتیاز 429 خردار)</span>
                </div>

                <div className='flex justify-center items-center gap-x-1 bg-gray-200 p-1 rounded-2xl'>

                    <div className='flex justify-center items-center gap-x-0.5'>
                        <BsStars className='text-[8px] text-blue-800' />

                        <span className='text-gray-600 text-[8px]'>خلاصه دیدگاه ها</span>
                    </div>

                    <IoIosArrowBack className='text-[8px] text-gray-600' />

                </div>

                <div className='flex justify-center items-center gap-x-1 bg-gray-200 p-1 rounded-2xl'>
                    <span className='text-gray-600 text-[8px]'>257 دیدگاه</span>

                    <IoIosArrowBack className='text-[8px] text-gray-600' />

                </div>
            </div>

            {/* Colors */}
            <Collors />

            {/* Tomorow */}
            <div className='hidden md:flex justify-start items-center gap-x-1 bg-mist-200 rounded-md border-b-2 border-blue-900 w-full my-1'>
                <PiSpeedometerBold className='text-[15px] text-blue-900 mr-2' />

                <div className='flex justify-center items-center gap-x-1 *:text-[10px]'>
                    <span className='text-gray-900'>تحویل فردا</span>
                    <span className='text-gray-500'>با تحویل سریع ویترین</span>
                </div>
            </div>

            {/* Ditails */}
            <div className='flex flex-col gap-y-4 pt-2 w-full md:my-2 my-0'>
                <SectionHeaders sectiontitle="مشخصات کالا" leftBtn="مشاهده همه" />

                <div className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-1'>
                    <Tooltip sectiontitle="نوع اتصال" deck="دانگل USB و بلوتوث" />
                    <Tooltip sectiontitle="رابط‌ها" deck="دانگل USB، بلوتوث" />
                    <Tooltip sectiontitle="قابلیت‌های دسته بازی" deck="شارژ دسته از طریق کابل " />
                    <Tooltip sectiontitle="درگاه‌های ارتباطی" deck="USB Type-C" />
                </div>
            </div>

            {/* All Options */}
            <div className='hidden md:flex justify-center items-center w-full'>
                <div className='flex-1 h-[1px] bg-gray-200'></div>

                <button className='mx-2 flex items-center gap-2 py-2 px-3 rounded-2xl border border-gray-200 bg-white  shadow-sm cursor-pointer'>
                    <span className='text-[9px] text-gray-600'>مشاهده همه ویژگی ها</span>

                    <IoIosArrowBack className='text-[9px] text-gray-600' />
                </button>

                <div className='flex-1  h-[1px] bg-gray-200'></div>
            </div>

            {/* Danger */}
            <div className=' flex flex-col sm:flex-row gap-x-1 md:gap-x-0 md:flex-col gap-y-2 w-full md:my-2 my-0 '>
                <div className='sm:py-2 py-1 sm:px-3 px-2'>
                    <div className='md:hidden flex justify-between items-center w-full'>
                        <div>
                            <span className='text-[9px] text-gray-800 font-bold'>شرایط و قوانین</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between gap-x-1 px-1 md:px-0'>
                    <div className='pt-1'>
                        <RxExclamationMark className='rounded-full text-[12px] bg-mist-400 text-gray-200' />
                    </div>

                    <div className=''>
                        <span className='text-[8px] -leading-3 text-gray-500'>درخواست مرجوع کردن کالا در گروه دسته بازی با دلیل "انصراف از خرید" تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</span>
                    </div>
                </div>

                <div className='md:hidden w-full items-center divide-y divide-gray-300 *:py-2 *:px-1'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-x-1'>
                            <MdNotificationImportant className='text-[15px]7mb-1 text-gray-800' />
                            <span className='text-[9px] text-gray-600'>گذارش قیمت مناسب تر</span>
                        </div>

                        <IoIosArrowBack className='text-[10px] text-gray-500' />
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-x-1'>
                            <GrMoney className='text-[15px] mb-1 text-gray-700' />
                            <span className='text-[9px] text-gray-600'>روش قیمت گذاری و نضارت بر قیمت</span>
                        </div>

                        <IoIosArrowBack className='text-[10px] text-gray-500' />
                    </div>

                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center gap-x-1'>
                            <BsFileEarmarkBarGraph className='text-[15px] m7-1 text-gray-800' />
                            <span className='text-[9px] text-gray-600'>گذارش مشخصات کالا یا موارد غیر قانونی</span>
                        </div>

                        <IoIosArrowBack className='text-[10px] text-gray-500' />
                    </div>
                </div>
            </div >

        </div >
    )
}

export default DetailsCard
