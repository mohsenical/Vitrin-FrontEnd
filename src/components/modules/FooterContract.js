import Link from 'next/link'
import React from 'react'

function FooterContract({ image, sectiontitle }) {
    return (
        <Link href="/">
            <img src={`/Images/Contract/${image}`} className='w-[35px] h-[35px] ' />
            <span className='sm:text-[7px] md:text-[9px] text-gray-700'>{sectiontitle}</span>
        </Link>
    )
}

export default FooterContract
