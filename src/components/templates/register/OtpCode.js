import React from 'react'
import Link from 'next/link'

import { IoArrowBackOutline } from "react-icons/io5";


function OtpCode({ phone, backRegister }) {
    return (
        <div className='flex flex-col gap-y-5 p-3 border border-gray-300 rounded-md min-w-[15rem] max-w-[15rem]'>
            <div className='flex  w-full'>
                <button onClick={backRegister} >
                    <IoArrowBackOutline className='rotate-180 cursor-pointer text-gray-800' />
                </button>

                <div className='flex justify-center items-center w-[90%]'>
                    <span className='text-[15px] font-bold text-red-600'>ویترین</span>
                </div>
            </div>

            <div className='w-full flex flex-col gap-y-3'>
                <span className='text-gray-800 font-bold text-[10px]'>کد تایید را وارد کنید </span>

                <div className='flex flex-col gap-y-1.5'>
                    <span className='text-[8px] text-gray-500'>حساب کاربری با شماره موبایل {phone} وجود ندارد.</span>
                    <span className='text-[8px] text-gray-500'>برای ساخت حساب جدید، کد تایید برای این شماره ارسال گردید</span>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='flex flex-col justify-center items-center gap-y-3 w-full'>
                    <div className='flex justify-center items-center p-1 border border-gray-300 w-full rounded-md '>
                        <input placeholder='کد را وارد کنید' className='text-center w-full h-full text-[10px] text-gray-800 border-none focus:border-none outline-none focus:outline-none' />
                    </div>

                    {/* <span className='text-[8px] text-gray-800'>۰۱:۳۰ مانده تا دریافت مجدد کد</span> */}
                    <span className='text-[8px] text-gray-800'>دریافت مجدد کد از طریق <Link href="/" className='text-red-500'>پیامک</Link></span>
                </div>
            </div>



            <div className='w-full flex justify-center items-center'>
                <button className='w-full p-2 text-[12px] rounded-md text-white bg-gradient-to-t from-red-600 to-red-500 cursor-pointer'>
                    تایید
                </button>
            </div>
        </div>
    )
}

export default OtpCode
