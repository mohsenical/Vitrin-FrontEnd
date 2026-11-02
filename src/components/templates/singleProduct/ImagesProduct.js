import React from 'react'

import { BiSolidOffer } from "react-icons/bi";

function ImagesProduct() {
    return (
        <div className='w-full md:w-[35%] pt-2 bg-white'>
            <div className='hidden sm:flex justify-between items-center bg-red-200 p-2 rounded-md'>
                <span className='text-red-500 text-[10px] '>پیشنهاد شگفت انگیز</span>

                <div className='flex justify-center items-center gap-x-0.5 *:text-red-500 '>
                    <span className='text-[9px]'> 2 : 35: 25 </span>
                    <BiSolidOffer className='text-[10px] mb-0.5' />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row md:flex-col justify-center items-center'>
                <div className='flex justify-center items-center max-w-[15rem] min-w-[15rem] bg-red-500'>
                    <img src='/Images/SingleProduct/iphone-1.webp' alt='product-1' className='w-full' />
                </div>

                <div className='grid grid-cols-4 sm:grid-cols-3  py-1 md:grid-cols-6 gap-1 w-full overflow-hidden px-5 sm:px-0 *:max-w-[6rem] *:min-w-[3rem]'>
                    <div className='border border-gray-300 rounded-xl overflow-hidden p-1 bg-white cursor-pointer'>
                        <img src='/Images/SingleProduct/iphone-1.webp' alt='' className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='border border-gray-300 rounded-xl overflow-hidden p-0.5 bg-white cursor-pointer'>
                        <img src='/Images/SingleProduct/iphone-2.webp' alt='' className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='border border-gray-300 rounded-xl overflow-hidden p-0.5 bg-white cursor-pointer'>
                        <img src='/Images/SingleProduct/iphone-3.webp' alt='' className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='border border-gray-300 rounded-xl overflow-hidden p-0.5 bg-white cursor-pointer'>
                        <img src='/Images/SingleProduct/iphone-1.webp' alt='' className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='border border-gray-300 rounded-xl overflow-hidden p-0.5 bg-white cursor-pointer'>
                        <img src='/Images/SingleProduct/iphone-1.webp' alt='' className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='border border-gray-300 rounded-xl overflow-hidden p-0.5 bg-white cursor-pointer'>
                        <img src='/Images/SingleProduct/iphone-1.webp' alt='' className='w-full h-full object-cover object-center' />
                    </div>
                </div>

                <div className='visible sm:hidden flex flex-col bg-red-200 mt-3 rounded-t-xl overflow-hidden w-full'>
                    <div className='w-full bg-red-300 h-0.5'>
                        <div className='w-[80%] bg-red-500 h-full'></div>
                    </div>

                    <div className='w-full p-2 flex justify-between items-center'>
                        <span className='text-red-500 text-[10px] font-bold'>پیشنهاد شگفت انگیز</span>

                        <div className='flex justify-center items-center gap-x-0.5 *:text-red-500 '>
                            <span className='text-[9px]'> 2 : 35: 25 </span>
                            <BiSolidOffer className='text-[10px] mb-0.5' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ImagesProduct
