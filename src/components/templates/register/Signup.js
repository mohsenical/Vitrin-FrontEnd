import React from 'react'
import Link from 'next/link'

import { IoArrowBackOutline } from "react-icons/io5";



function Signup({ registerHandeler }) {



    return (
        <div className='flex flex-col gap-y-5 p-3 border border-gray-300 rounded-md min-w-[15rem] max-w-[15rem]'>
            <div className='flex  w-full'>
                <Link href='/'>
                    <IoArrowBackOutline className='rotate-180 cursor-pointer text-gray-800' />
                </Link>

                <div className='flex justify-center items-center w-[90%]'>
                    <span className='text-[15px] font-bold text-red-600'>ویترین</span>
                </div>
            </div>

            <div className='w-full flex flex-col gap-y-2 '>
                <span className='text-gray-800 font-bold text-[10px]'>ورود یا ثبت‌نام در ویترین </span>
                <span className='text-gray-500 text-[8px]'> لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
            </div>

            <div className='flex justify-center'>
                <div className='flex flex-col items-start gap-y-2 w-[90%]'>
                    <div className='flex justify-center items-center p-1 border border-gray-300 w-full rounded-md '>
                        <input placeholder='شماره موبایل' className='w-full h-full text-[10px] text-gray-800 border-none focus:border-none outline-none focus:outline-none' />
                    </div>
                    <span className='text-[8px] px-1 text-red-500'>لطفا این قسمت را خالی نگذارید</span>
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <button onClick={registerHandeler} className='w-[90%] p-2 text-[12px] rounded-md text-white bg-gradient-to-t from-red-600 to-red-500 cursor-pointer'>
                    ورود به ویترین
                </button>
            </div>

            <div className='text-[12px] text-gray-600'>
                <span className='text-[8px]'> ورود شما به معنای پذیرش  <Link href="/" className='text-red-500'>شرایط دیجی‌کالا</Link> و  <Link href="/" className='text-red-500'>قوانین حریم ‌خصوصی</Link> است</span>
            </div>

        </div>
    )
}

export default Signup
