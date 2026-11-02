import React from 'react'
import Link from 'next/link';


function category({ image, alt, sectiontitle }) {
    return (
        <div className='p-2 '>
            <Link href="/" className='flex flex-col justify-center items-center gap-1'>
                <img src={`/Images/Categoreis/${image}`} className='w-[50px] h-[50px] object-contain object-center ' alt={alt} />
                <span className='text-[8px] text-gray-500 truncate'>{sectiontitle}</span>
            </Link>
        </div>
    )
}

export default category
