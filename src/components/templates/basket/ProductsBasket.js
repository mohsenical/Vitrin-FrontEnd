import React from 'react'

import BasketProducts from '@/components/modules/BasketProducts';

function ProductsBasket() {
    return (
        <div className='w-full sm:w-[60%] md:w-[65%] h-full rounded-md md:border md:border-gray-300 mt-0.5'>
            <div className='hidden md:flex justify-start items-center w-full p-4'>
                <span className='text-[12px] font-bold text-gray-800'>سبد خرید</span>
            </div>

            {/* <EmptyBasket /> */}

            {/* Basket Products */}
            <div className='flex flex-col divide-y divide-gray-300 *:py-3 px-2'>
                <BasketProducts />
                <BasketProducts />
                <BasketProducts />
                <BasketProducts />
            </div>
        </div>
    )
}

export default ProductsBasket
