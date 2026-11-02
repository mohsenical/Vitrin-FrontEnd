import React from 'react'
import Link from 'next/link';

function DetailsHeader() {
    return (
        <div className='flex flex-col justify-center items-start w-full py-3 bg-white rounded-t-xl sm:rounded-none '>
            {/* BreadCrump */}
            <div className='flex justify-start items-center w-[80%]'>
                <div className='flex justify-center items-center divide-x divide-gray-300 *:px-2 py-2'>

                    <Link href="/" className='text-[10px] sm:text-blue-600 text-gray-600 sm:hover:text-blue-600 hover:text-gray-800 transition-all'>
                        خانه
                    </Link>



                    <Link href="/" className='text-[10px] sm:text-blue-600 text-gray-600 sm:hover:text-blue-600 hover:text-gray-800 transition-all'>
                        محصولات
                    </Link>



                    <Link href="/" className='text-[10px] sm:text-blue-600 text-gray-600 sm:hover:text-blue-600 hover:text-gray-800 transition-all'>
                        صندلی بچه ها
                    </Link>

                </div>
            </div>

            <div className='flex flex-col gap-y-2 pt-2 px-2'>
                {/* <div className='flex justify-center items-center w-[30%]  sm:p-1 p-1.5 rounded-md bg-gradient-to-t from-red-600 to-red-500'>
                    <span className='text-white sm:text-[10px] text-[9px] sm:p-2 p-1 '>کالا اصل نیست</span>
                </div> */}


                <span className='text-gray-800 sm:text-[12px] text-[12px] leading-5 md:leading-none font-bold'>کاور مدل سیلیکونی مناسب برای گوشی موبایل اپل iPhone 13/iPhone 14</span>
            </div>
        </div>
    )
}

export default DetailsHeader
