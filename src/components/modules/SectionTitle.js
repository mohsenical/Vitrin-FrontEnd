import React from 'react'
import { BiCategoryAlt } from "react-icons/bi";


function SectionTitle({ sectiontitle }) {
    return (
        <div className=' w-full h-[20%] py-1 sm:px-1'>
            <div className='flex justify-start items-center gap-x-1 h-full p-1 border-s-2 border-orange-400'>
                <BiCategoryAlt className='text-[12px] text-gray-700' />
                <span className='text-[12px] text-gray-700'>{sectiontitle}</span>
            </div>
        </div>
    )
}

export default SectionTitle
