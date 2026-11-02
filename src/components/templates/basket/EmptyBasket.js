import React from 'react'

function EmptyBasket() {
    return (
        <div className='flex flex-col justify-center items-center gap-y-2 w-full h-40'>
            <img src='/Images/Basket/hand-basket.svg' className='w-[80px] h-[80px]' />
            <span className='text-[12px] font-bold text-gray-800'>سبد خرید شما خالی است!</span>
        </div>
    )
}

export default EmptyBasket
