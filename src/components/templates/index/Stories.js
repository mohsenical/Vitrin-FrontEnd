import Story from '@/components/modules/Story'
import React from 'react'

import { FaPlus } from "react-icons/fa6";

function Stories() {
    return (
        <div className="flex flex-col justify-center items-end h-full space-x-5 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className='flex justify-end gap-x-0.5 scrollbar-hide px-1 sm:px-0' >
                <Story image="cover-1.webp" sectiontitle="ویترین" active={true} />
                <Story image="cover-2.webp" sectiontitle="دیجیکالا" active={false} />
                <Story image="cover-3.webp" sectiontitle="تروب" active={false} />
                <Story image="cover-4.webp" sectiontitle="محسن" active={true} />
                <Story image="cover-3.webp" sectiontitle="علی" active={true} />
                <Story image="cover-2.webp" sectiontitle="mohsenIcal" active={true} />

                <button className='flex flex-col gap-y-0.5 py-1 justify-center items-center shrink-0 overflow-hidden cursor-pointer'>
                    <div className="flex justify-center items-center w-[25px] md:w-[35px] h-[25px] md:h-[35px] rounded-full  mb-1 border border-gray-800">
                        <FaPlus className='text-gray-500' />
                    </div>

                    <span className='text-[8px] text-gray-700'>ستوری جدید</span>
                </button >
            </div >
        </div >
    )
}

export default Stories
