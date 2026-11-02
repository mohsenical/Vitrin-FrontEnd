import React from 'react'

import { IoIosArrowBack } from "react-icons/io";

function SectionHeaders({ sectiontitle, leftBtn }) {
    return (
        <div className='sm:py-2 py-1 sm:px-3 px-2'>
            <div className='hidden md:flex flex-col justify-center items-start gap-y-2 py-2 px-3 sm:w-[40%] md:w-[30%]'>
                <span className='text-[12px] text-gray-700 font-bold'>{sectiontitle}</span>
                <div className='bg-red-500 w-[40%] h-[1.5px] rounded-full'></div>
            </div>

            <div className='md:hidden flex justify-between items-center w-full'>
                <div>
                    <span className='text-[9px] text-gray-800 font-bold'>{sectiontitle}</span>
                </div>

                <button className="flex justify-center items-center gap-x-0.5 cursor-pointer">
                    <span className="text-[8px] text-blue-700">{leftBtn}</span>
                    <IoIosArrowBack className="hidden md:inline-block text-[9px] text-blue-700" />
                </button>
            </div>
        </div>
    )
}

export default SectionHeaders
