import Link from 'next/link'
import React from 'react'

import { AiOutlineShop } from "react-icons/ai";

function HeaderProduct() {
    return (
        <div className='flex justify-between items-center w-full p-1'>
            {/* BreadCrump */}
            <div className='flex justify-start items-center w-full sm:w-[80%]'>
                <div className='flex justify-center items-center divide-x divide-gray-300 *:px-2 py-2'>

                    <Link href="/" className='text-[8px] text-gray-500 hover:text-gray-600 transition-all'>
                        خانه
                    </Link>



                    <Link href="/" className='text-[8px] text-gray-500 hover:text-gray-600 transition-all'>
                        محصولات
                    </Link>



                    <Link href="/" className='text-[8px] text-gray-500 hover:text-gray-600 transition-all'>
                        صندلی بچه ها
                    </Link>

                </div>
            </div>

            {/* Sellers Button */}
            <button className='hidden sm:flex justify-end items-center gap-x-1 w-[20%] cursor-pointer *:text-gray-400 hover:*:text-gray-600 *:transition-all'>
                <span className='text-[8px]'>فروش در ویترین</span>

                <AiOutlineShop className='text-[12px]' />
            </button>
        </div>
    )
}

export default HeaderProduct
