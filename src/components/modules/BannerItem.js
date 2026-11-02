import Link from 'next/link'
import React from 'react'

function BanerItem({ image, alt }) {
    return (
        <Link href="/">
            <img className='w-full h-full object-cover object-center' src={`Images/Baner/${image}`} alt={alt} />
        </Link>
    )
}

export default BanerItem
