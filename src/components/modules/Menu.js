"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Menu({ href, children }) {

    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <li className="*:space-x-1">
            <Link href={href} className={`flex *:sm:text-[8px] *:md:text-[8px] ${isActive ? "*:text-gray-800" : "*:text-gray-500"}  hover:*:text-gray-800 *:transition-all`}>
                {children}
            </Link>
        </li>
    )
}

export default Menu
