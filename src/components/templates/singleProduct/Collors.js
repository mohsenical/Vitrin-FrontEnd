import Color from '@/components/modules/Color'
import React from 'react'

function Collors() {
    return (
        <div className='flex flex-col items-start justify-center w-full gap-y-2 '>
            <div className='flex justify-center items-center gap-x-1 pb-3 md:pb-0'>
                <span className='text-[12px] text-gray-800'>رنگ: قرمز روشن</span>

                <div className='flex justify-center items-center p-[1px] w-[15px] h-[15px] overflow-hidden border border-gray-400 rounded-full'>
                    <div className='w-full h-full bg-red-500 border-gray-200 rounded-full'></div>
                </div>
            </div>

            <div className='flex justify-start items-center gap-x-1 md:gap-x-0.5 md:grid md:grid-cols-12 w-full'>
                <Color bgColor="red" color="سبز" active />
                <Color bgColor="blue" color="قرمز" />
                <Color bgColor="#FF5733" color="زرد" />
                <Color bgColor="" color="آبی" />
            </div>
        </div>
    )
}

export default Collors
