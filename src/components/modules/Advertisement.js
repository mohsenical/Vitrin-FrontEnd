import React from 'react'
import Link from 'next/link'


function Advertisement({ image, href }) {
    return (
        <Link href={href}>
            <img src={`/Images/Advertisements/${image}`} className='rounded-md' />
        </Link>
    )
}

export default Advertisement