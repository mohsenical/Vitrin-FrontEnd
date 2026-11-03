import React from 'react'

import MenuMobile from "@/components/modules/MenuMobile"

import { AiFillHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";


function FooterMobile() {
    return (
        <div className='sticky bottom-0  left-0 right-0 z-10 sm:hidden flex justify-evenly w-full p-1.5 bg-gray-100 sm:bg-none border-t border-t-gray-300 shadow-[0_1px_4px_rgba(0,0,0,08)] *:flex *:flex-col *:justify-center *:items-center *:cursor-pointer'>


            <MenuMobile href="/">
                <AiFillHome className='text-[12px] mb-0.5' />
                <span className='text-[8px]'>خانه</span>
            </MenuMobile>

            <MenuMobile href="/category">
                <BiCategoryAlt className='text-[12px] mb-0.5' />
                <span className='text-[8px]'>دسته بندی</span>
            </MenuMobile>

            <MenuMobile href="/basket">
                <RiShoppingCartLine className='text-[12px] mb-0.5' />
                <span className='text-[8px]'>خرید</span>
            </MenuMobile>

            <MenuMobile href="/">
                <GoHeartFill className='text-[12px] mb-0.5' />
                <span className='text-[8px]'>علاقه مندی</span>
            </MenuMobile>

            <MenuMobile href="/contact-us">
                <FaUser className='text-[12px] mb-0.5' />
                <span className='text-[8px]'>ویترین من</span>
            </MenuMobile>
        </div>
    )
}

export default FooterMobile
