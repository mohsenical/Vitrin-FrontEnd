import Link from 'next/link'
import React from 'react'

function Story({ image, sectiontitle, active }) {
    return (
        <Link href="/" className='flex flex-col py-1 px-1.5 justify-center items-center shrink-0 overflow-hidden'>
            <div className={`${active ? "bg-gradient-to-tr from-yellow-400 via-red-500 via-pink-500 to-purple-600 p-[2px]" : "bg-gray-300 p-[2px]"} rounded-full p-[1px] mb-1`}>
                <img src={`Images/story/${image}`} className='w-[25px] md:w-[35px] h-[25px] md:h-[35px] rounded-full' />
            </div>

            <span className='text-[8px] text-gray-700'>{sectiontitle}</span>
        </Link >
    )
}

export default Story
