import React from 'react'

import { GoBell } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";



function TopbarMobile() {
    return (
        <div className='sm:hidden flex items-center w-full bg-gray-100'>
            <div className='flex justify-between items-center w-full p-3'>
                <div className='flex justify-start items-center gap-x-2 p-1.5 w-[85%] rounded-full bg-white border border-gray-300'>
                    <IoSearchSharp className='text-gray-400 font-light' />

                    <div className='flex justify-center items-center gap-x-1'>
                        <span className='text-[10px] text-gray-400'>جستجو در</span>
                        <span className='text-[12px] font-bold text-red-600 mb-0.5'>ویترین</span>
                    </div>
                </div>

                <div className='flex justify-center items-center p-1.5 bg-white border border-gray-300 rounded-full *:text-gray-800'>
                    <GoBell />
                </div>
            </div>
        </div>
    )
}

export default TopbarMobile
