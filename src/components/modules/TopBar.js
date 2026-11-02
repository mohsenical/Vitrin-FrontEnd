import Link from "next/link";
import React from 'react'

import { IoMdArrowDropdown } from "react-icons/io";

import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";

import { LuSquareArrowOutDownLeft } from "react-icons/lu"

import { RiMenu3Line } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { GiPc } from "react-icons/gi";

import { IoLocationSharp } from "react-icons/io5";
import Menu from "./Menu";

function TopBar() {
    return (
        <>
            {/* TopBar */}
            <div className="hidden md:inline-block sticky top-0 self-start space-y-1 sm:space-y-0  w-full *:py-1 px-2 py-0 sm:py-1 sm:my-0 sm:px-3 bg-gray-100 sm:bg-white z-999 sm:shadow-sm sm:shadow-black/10">
                {/* Logo & Search - Sign-Up & basKet */}
                <div className="flex items-center w-full h-[60%]">

                    {/* Enput-Search & Logo */}
                    <div className="flex justify-start items-center gap-x-3 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
                        <div className="flex justify-center items-center ">
                            <span className="font-bold text-red-600">ویترین</span>
                        </div>

                        <div className="flex items-center justify-between px-2 w-[65%] h-[80%] sm:h-[60%] rounded-2xl overflow-hidden bg-white sm:bg-gray-100">
                            <IoSearchSharp className="w-[10%] sm:w-[5%] me-1.5 text-gray-400" />
                            <div className="flex items-center w-[95%] h-[50%]">
                                <input type="text" placeholder="جستجو" className="h-full py-1 w-full placeholder:text-[9px] sm:placeholder:text-[10px] text-[9px] sm:text-[10px] placeholder:text-gray-400 border-none focus:border-none outline-none focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    {/* Sign-Up & basKet */}
                    <div className="flex justify-end items-center h-full w-[15%] sm:w-[30%] md:w-[40%] lg:w-[50%] sm:space-x-1 md:space-x-3 sm:divide-x sm:divide-gray-200">
                        <div className="flex justify-center items-center h-[40%]">
                            <GoBell className="sm:text-[12px] md:me-2 sm:me-1.5 sm:text-black hover:text-gray-500 cursor-pointer transition-all text-gray-600  border sm:border-none border-gray-300 bg-white sm:bg-none p-1 sm:p-0 text-[23px] rounded-2xl " />

                            <Link href="/register" className="hidden sm:flex justify-center items-center space-x-2 p-1.5 sm:me-1.5 md:me-2.5 rounded-md border border-gray-200 cursor-pointer">
                                <LuSquareArrowOutDownLeft className="text-[10px] text-black" />

                                <span className="sm:text-[8px] md:text-[9px] text-black truncate p-1"> ورود | ثبت نام </span>
                            </Link>
                        </div>

                        <Link href="/basket">
                            <RiShoppingCartLine className="hidden sm:inline-block text-[12px] text-black hover:text-gray-500 cursor-pointer transition-all" />
                        </Link>
                    </div>

                </div>

                {/* Categories & Select Address */}
                <div className="flex justify-between items-center w-full h-[40%]">

                    {/* Categories */}
                    <div className="flex justify-between items-center sm:w-[80%] h-full my-0.5">
                        <ul className="hidden sm:flex items-center justify-center h-full *:flex *:justify-center *:items-center *:sm:px-1 *:md:px-2 *:space-x-1 divide-x divide-gray-200">

                            <Menu href={"/"}>
                                <RiMenu3Line className="text-[20px]" />
                                <span className="truncate font-bold">دسبندی کالاها</span>
                                <IoMdArrowDropdown className="text-gray-800 ms-0.5" />
                            </Menu>

                            <Menu href={"/contact-us"}>
                                <FaLaptop className="*:sm:text-[17px] *:md:text-[20px]" />
                                <span className="truncate font-bold p-1 h-full">ارتباط با ما</span>
                            </Menu>

                            <Menu href={"/products"}>
                                <CiMobile3 className="*:sm:text-[17px] *:md:text-[20px]" />
                                <span className="truncate font-bold p-1 h-full">محصولات</span>
                            </Menu>

                            <Menu href={"/basket"}>
                                <IoTvOutline className="*:sm:text-[17px] *:md:text-[20px]" />
                                <span className="truncate font-bold p-1 h-full">سبد خرید</span>
                            </Menu>

                            <Menu href={"/"}>
                                <GiPc className="*:sm:text-[17px] *:md:text-[20px]" />
                                <span className="truncate font-bold p-1 h-full">دسبندی کالاها</span>
                            </Menu>

                        </ul>
                    </div>

                    <div className="flex justify-start sm:justify-end items-center w-[100%] sm:w-[20%] h-full">

                        {/* Select Address */}
                        <Link href="/" className="flex *:text-[9px] space-x-1 px-2 py-1.5 rounded-xl sm:bg-orange-100 text-orange-400 sm:*:text-orange-400 border border-orange-200 sm:border-orange-100 hover:border hover:bg-orange-100 sm:hover:border-orange-200 transition">
                            <IoLocationSharp />
                            <span className="">انتخاب آدرس</span>
                        </Link >

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar
