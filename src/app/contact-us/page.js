import React from 'react'

import Footer from "@/components/modules/Footer";
import FooterMobile from "@/components/modules/FooterMobile";
import TopBar from "@/components/modules/TopBar";
import TopbarMobile from '@/components/templates/index/TopbarMobile';

export const metadata = {
    title: "ارتباط با ما",
}


function index() {
    return (
        <div>
            <TopBar />
            <TopbarMobile />


            <div className='flex justify-center items-center m-0 sm:m-2'>
                <div className=' w-full sm:w-[95%] md:w-[90%] p-0 sm:p-2 space-y-0 sm:space-y-2'>

                    <div className='flex flex-col gap-y-1.5 h-[15%] p-2 space-y-0 sm:space-y-0.5'>
                        <div className='flex items-center space-x-1'>
                            <div className='w-[3px] h-full bg-red-600 rounded-full text-red-600'>|</div>
                            <span className='text-[9px] sm:text-[12px] text-gray-800'>با ما تماس بگیرید</span>
                        </div>

                        <span className='text-[7px] sm:text-[10px] text-gray-500'>از طریق فرم زیر با ما تماس بگیرید و تیم فنی ویترین  در اسرع وقت به راهنمایی شما پاسخ میدهد</span>
                    </div>


                    <div className='h-[85%] py-0 sm:py-0 px-2 sm:px-4 border bg-white border-gray-300 rounded-none sm:rounded-md overflow-hidden'>

                        {/* Headers */}
                        <div className='flex justify-center sm:justify-center items-center h-[10%] py-3 sm:p-3 border-b border-gray-300'>
                            <span className='text-[9px] sm:text-[10px] text-gray-800'> کاربر محترم, برای پاسخ گویی بهتر لطفا تمایی فیلد های زیر را پر کنید</span>
                        </div>

                        {/* Body */}
                        <div className='flex flex-col md:flex-row w-full h-full'>

                            {/* Inputs */}
                            <div className='flex flex-col gap-y-2 sm:gap-y-4 w-full md:w-[50%] p-5 h-full border-b sm:border-none border-gray-300'>

                                <div className='grid grid-cols-2 w-full gap-x-3'>
                                    <div className='flex flex-col gap-y-1 sm:gap-y-2'>
                                        <span className='text-[8px] sm:text-[10px] text-gray-600'>نام و نام خانوادگی:</span>
                                        <input type='text' placeholder='مثال: محسن پیغامی' className='flex justify-center items-center h-6 leading-6 px-1 text-[8px] sm:text-[9px] rounded-md border border-gray-300 placeholder:text-[8px] sm:placeholder:text-[9px] focus:outline-none' />
                                    </div>

                                    <div className='flex flex-col gap-y-1 sm:gap-y-2'>
                                        <span className='text-[8px] sm:text-[10px] text-gray-600'>شماره موبایل:</span>
                                        <input type='text' placeholder='مثال: 09141493036' className='flex justify-center items-center h-6 leading-6 px-1 text-[8px] sm:text-[9px] rounded-md border border-gray-300 placeholder:text-[8px] sm:placeholder:text-[9px] focus:outline-none' />
                                    </div>
                                </div>

                                <div className='grid w-full gap-x-3'>
                                    <div className='flex flex-col gap-y-1 sm:gap-y-2'>
                                        <span className='text-[8px] sm:text-[10px] text-gray-600'>موضوع شما:</span>
                                        <input type='text' placeholder='مثال: مرجوع کردن محصول' className='flex justify-center items-center h-6 leading-6 px-1 text-[8px] sm:text-[9px] rounded-md border border-gray-300 placeholder:text-[8px] sm:placeholder:text-[9px] focus:outline-none' />
                                    </div>
                                </div>

                                <div className='grid w-full gap-x-3'>
                                    <div className='flex flex-col gap-y-1 sm:gap-y-2'>
                                        <span className='text-[8px] sm:text-[10px] text-gray-600'>موضوع شما:</span>
                                        <textarea type='textarea' placeholder='مثال: مرجوع کردن محصول' className='flex justify-center items-center max-h-30 min-h-30 leading-6 px-1 text-[8px] sm:text-[9px] rounded-md border border-gray-300 placeholder:text-[8px] sm:placeholder:text-[9px] focus:outline-none' />
                                    </div>
                                </div>

                                {/* button */}
                                <div className='flex justify-center sm:justify-start items-center w-full gap-x-1 sm:gap-x-3'>
                                    <button className='text-[8px] sm:text-[10px] p-1 text-red-500 cursor-pointer'>انصراف</button>
                                    <button className='text-[8px] sm:text-[10px] bg-gradient-to-t from-red-700 to-red-400 text-white p-2 rounded-xl cursor-pointer'>ثبت و ارسال</button>
                                </div>
                            </div>

                            {/* Image */}
                            <div className='flex justify-center items-center w-full md:w-[50%] h-ful'>
                                <img src='/Images/Support/support.png' className='w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-contain object-center -rotate-90' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <FooterMobile />
        </div>
    )
}

export default index
