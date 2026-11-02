import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function Filter({ sectiontitle }) {
    return (
        <div className=''>
            <span className='text-[10px] text-blue-900 leading-4'>{sectiontitle}</span>
            <IoIosArrowDown className='text-[10px]' />
        </div>
    )
}

export default Filter
