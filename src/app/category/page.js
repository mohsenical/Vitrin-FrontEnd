import React from 'react'

import FooterMobile from '@/components/modules/FooterMobile'
import TopBar from '@/components/modules/TopBar'
import TopbarMobile from '@/components/templates/index/TopbarMobile'

import { CiMobile3 } from "react-icons/ci";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoColorPaletteSharp } from "react-icons/io5";
import { GiPirateCoat } from "react-icons/gi";

export const metadata = {
    title: "دسته بندی",
}

function page() {
    return (
        <>
            <TopBar />
            <TopbarMobile />
            <div className='flex justify-between bg-red-500 '>
                <div className='flex flex-col items-center max-w-[20%] *:flex *:flex-col *:items-center *:justify-center *:gap-y-1 *:py-2 *:px-0.5 *:text-center *:w-full *:cursor-pointer'>
                    <div className=''>
                        <CiMobile3 className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>موبایل</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <LiaLaptopCodeSolid className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>لپتاپ ها</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <AiOutlineProduct className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>کالاهای دیجیتال</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <CgSmartHomeRefrigerator className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>لواظم خانگی و برقی</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <IoColorPaletteSharp className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>لواظم تحریر</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <GiPirateCoat className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>لباس</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <GiPirateCoat className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>لباس</span>
                    </div>

                    <div className='border-l border-gray-300 bg-gray-100'>
                        <GiPirateCoat className='text-gray-500 text-[12px]' />
                        <span className='w-full text-[7px] text-gray-500 leading-3'>لباس</span>
                    </div>
                </div>


                <div className='flex flex-col justify-start items-center w-[85%] p-2'>hi</div>
            </div>
            <FooterMobile />
        </>
    )
}

export default page
