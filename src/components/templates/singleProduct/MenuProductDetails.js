import React from 'react'

function MenuProductDetails() {
    return (
        <div className='flex justify-start items-center w-full border-b border-gray-300 px-2 *:py-1 *:px-4 transition-all *:transition-all *:cursor-pointer'>
            <div className='border-b-4 border-red-500 *:text-red-500 rounded-sm  *:transition-all'>
                <span className='text-[9px] font-bold text-gray-600'>بررسی تخصصی</span>
            </div>

            <div className='hover:border-b-4 hover:border-red-500 hover:*:text-red-500 hover:rounded-sm *:transition-all'>
                <span className='text-[9px] font-bold text-gray-600'>مشخصات</span>
            </div>

            <div className='hover:border-b-4 hover:border-red-500 hover:*:text-red-500 hover:rounded-sm *:transition-all'>
                <span className='text-[9px] font-bold text-gray-600'>دیدگاه ها</span>
            </div>

        </div>
    )
}

export default MenuProductDetails
