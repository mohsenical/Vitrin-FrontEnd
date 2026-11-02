import Link from 'next/link'
import React from 'react'

function OfferProduct({ price, image }) {
    return (
        <Link href="/products/react">
            <div className=" flex flex-col justify-evenly items-center gap-y-1 h-full w-full bg-white py-1 sm:py-0">
                <img src={`/Images/Products/${image}`} className="w-full h-[50%] sm:h-[60%] object-contain object-center" />

                <div className="flex flex-col gap-y-1 sm:gap-y-3 w-full px-0 sm:px-3">
                    <div className='w-full flex justify-center items-center'>
                        <p className="text-[7px] sm:text-[9px] leading-2.5 sm:leading-3 text-gray-700 font-bold">صورت شارژی کیمی</p>
                    </div>


                    <div className='flex flex-col justify-end items-end gap-y-0.5 w-full px-1'>
                        <span className='text-gray-500 text-[7px] line-through'>12,500,000</span>

                        <div className='flex justify-center items-center gap-x-1'>
                            <span className='text-[7px] text-gray-800'>62,500,000</span>
                            <span className='text-[7px] text-red-600'>تومان</span>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default OfferProduct