import Link from 'next/link'
import React from 'react'

import { IoIosArrowBack } from "react-icons/io"


function MobileHeaders() {
    return (
        < div className='md:hidden sticky top-0 self-start flex justify-between items-center w-full px-3 py-2 bg-white shadow-black/20 shadow-sm z-100 ' >
            <div>
                <span className="text-[12px] text-gray-800 font-bold">سبد خرید</span>
            </div>

            <button className='flex gap-x-1 *:text-blue-600'>
                <Link href="/register" className="text-[9px] text-gray-800 cursor-pointer">ورود به حساب کاربری</Link>

                <IoIosArrowBack className="text-[9px] text-gray-800" />
            </button>
        </div >
    )
}

export default MobileHeaders
