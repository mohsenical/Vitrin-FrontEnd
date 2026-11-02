import Link from 'next/link'
import React from 'react'

function ProposalProducts() {
    return (
        <div className='p-[1px] rounded-md overflow-hidden'>
            <Link href="/products/next" className='flex flex-col gap-y-1 h-full w-full bg-white border-gray-300 border border-gray-300 rounded-md cursor-pointer overflow-hidden'>
                <div>
                    <img src='/Images/SingleProduct/iphone-1.webp' alt='' className='' />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='w-full flex justify-start items-center px-2'>
                        <span className='text-[8px] sm:text-[9px] font-bold leading-3 sm:leading-4 line-clamp-3 sm:line-clamp-none'>کاور مدل سیلیکونی مناسب برای گوشی موبایل اپل iPhone 13/iPhone 14</span>
                    </div>

                    <div className='flex flex-col justify-end items-end gap-y-1 p-1'>
                        <span className='text-gray-500 text-[8px] line-through'>12,500,000</span>

                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-[8px] text-gray-800'>62,500,000</span>
                            <span className='text-[8px] text-red-600'>تومان</span>
                        </div>
                    </div>
                </div >
            </Link>
        </div>
    )
}

export default ProposalProducts
