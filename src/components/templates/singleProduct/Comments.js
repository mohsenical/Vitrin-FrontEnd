import React from 'react'
import SectionHeaders from '@/components/modules/SectionHeaders'

import { FaStar } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Comment from '@/components/modules/Comment';

function Comments() {
    return (
        <div className='w-full py-2'>
            <SectionHeaders sectiontitle="دیدگاه ها" />

            <div className='flex flex-col md:flex-row justify-between gap-x-1'>

                {/* Side bar */}
                <div className='inline-block md:sticky md:self-start md:top-20 md:w-[25%] p-2 *:py-2 border border-gray-300 bg-gray-50 rounded-md'>
                    <div className='flex justify-start items-center gap-x-0.5'>
                        <span className='text-[17px] text-gray-800'>4.5</span>
                        <span className='text-[10px] text-gray-600'>از 5</span>
                    </div>

                    <div className='flex justify-start items-center gap-x-1'>
                        <div className='flex justify-start items-center *:text-[10px]'>
                            <FaStar className='text-yellow-600' />
                            <FaStar className='text-yellow-600' />
                            <FaStar className='text-yellow-600' />
                            <FaStar className='text-yellow-600' />
                            <FaStar className='text-yellow-600' />
                        </div>

                        <div className='flex justify-between w-full'>
                            <span className='md:hidden text-[8px] text-gray-600'>از مجموع ۲,۶۸۸ امتیاز</span>

                            <div className='flex justify-center items-center'>
                                <span className='text-[8px] text-gray-600'>۱,۲۰۶ دیدگاه</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className='text-[8px] text-gray-600'>شما هم درباره این کالا دیدگاه ثبت کنید</span>
                    </div>

                    <button className='w-full flex justify-center items-center p-2 border border-red-500 rounded-md cursor-pointer'>
                        <span className='text-[10px] text-red-500'>ثبت دیدگاه</span>
                    </button>
                </div>

                {/* Content */}
                <div className='flex flex-col gap-y-2 w-full px-2'>

                    {/* TopBar Comments */}
                    <div className='hidden sm:flex justify-between '>
                        <div className='flex items-center justify-center gap-x-1'>
                            <div className='p-1 rounded-2xl bg-gradient-to-br from-[#1687ff] via-[#6257ed] to-[#9637e8]'>
                                <BsStars className='text-white' />
                            </div>

                            <span className='text-[9px] '>خلاصه دیدگاه‌های خریدارها</span>
                        </div>

                        <div className='flex justify-center items-center'>
                            <span className='text-[8px] text-gray-600'>۱,۲۰۶ دیدگاه</span>
                        </div>
                    </div>

                    {/* Comments */}
                    <div className=''>
                        <div className='divide-y divide-gray-300 *:py-3'>
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>

                        <div className='flex justify-start items-center w-full mt-2'>
                            <button className={`flex justify-center items-center gap-x-1 text-[8px] font-bold text-blue-700 cursor-pointer`}>
                                <span>مشاهده بیشتر</span>
                                <IoIosArrowBack />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Comments
