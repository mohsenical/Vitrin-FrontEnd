import Link from 'next/link'
import React from 'react'

function SingleProductsContarct({ image, sectiontitle }) {
    return (
        <Link href="/" className=''>
            <img src={`/Images/Contract/${image}`} className=' w-[35px] h-[35px] ' />
            <span className='sm:text-[7px] md:text-[7px] text-gray-600'>{sectiontitle}</span>
        </Link>
    )
}

export default SingleProductsContarct
