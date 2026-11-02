"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function CategoryMobile({ href, children }) {

    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link href={href} className={`${isActive ? "text-gray-800" : "text-gray-500"} hover:text-gray-800 transition-all`}>
            {children}
        </Link>
    )
}

export default CategoryMobile
