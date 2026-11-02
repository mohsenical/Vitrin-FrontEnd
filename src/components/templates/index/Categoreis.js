"use client"

import React, { useState } from 'react'
import Category from '@/components/modules/Category';
import SectionTitle from '@/components/modules/SectionTitle';


function Categoreis() {

    const [showAllCategory, setShowAllCategory] = useState(true)

    const showAllCategoryHandeler = () => {
        setShowAllCategory(!showAllCategory)
    }

    return (
        <div className='w-full border border-gray-200 sm:rounded-md relative'>

            {/* sectiontitle */}
            <SectionTitle sectiontitle="دسته بندی ها" />

            {/* Categoreis */}
            <div className={`w-full ${showAllCategory ? "h-40" : ""} md:h-full mt-1 overflow-hidden transition-all m-1`}>
                <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-9 gap-y-1 h-[80%] w-full *:flex *:justify-center *:items-center'>
                    <Category image="category-1.webp" alt="category-1" sectiontitle="موبایل" />
                    <Category image="category-2.webp" alt="category-1" sectiontitle="لپ تاپ" />
                    <Category image="category-3.webp" alt="category-1" sectiontitle="کالا دیجیتال" />
                    <Category image="category-4.webp" alt="category-1" sectiontitle="آشپذخانه" />
                    <Category image="category-5.webp" alt="category-1" sectiontitle="لوتزم خانگی برقی" />
                    <Category image="category-6.webp" alt="category-1" sectiontitle="آرایشی بهداشتی" />
                    <Category image="category-7.webp" alt="category-1" sectiontitle="مد و پوشاک" />
                    <Category image="category-8.webp" alt="category-1" sectiontitle="طلا و نقره" />
                    <Category image="category-9.webp" alt="category-1" sectiontitle="خودرو و موتور سیکلت" />
                    <Category image="category-10.webp" alt="category-1" sectiontitle="ابزار آلات و تجهیزات" />
                    <Category image="category-11.webp" alt="category-1" sectiontitle="تجهیزات پزشکی" />
                    <Category image="category-12.webp" alt="category-1" sectiontitle="کتاب و لوازم تحریر" />
                    <Category image="category-13.webp" alt="category-1" sectiontitle="ورزش و سفر" />
                    <Category image="category-14.webp" alt="category-1" sectiontitle="کارت هدیه و گیفت کارت" />
                    <Category image="category-15.webp" alt="category-1" sectiontitle="خوراکی" />
                    <Category image="category-16.webp" alt="category-1" sectiontitle="اسباب بازی" />
                    <Category image="category-17.webp" alt="category-1" sectiontitle="محصولات بومی و محلی" />
                    <Category image="category-18.webp" alt="category-1" sectiontitle="پت شاپ" />
                </div>
            </div>

            <button className='flex md:hidden justify-center items-center bg-white border border-gray-300 text-center py-1 px-1.5 rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 cursor-pointer'>
                <span className='text-[8px] text-gray-500 truncate' onClick={showAllCategoryHandeler}>مشاهده بیشتر</span>
            </button>
        </div>
    )
}

export default Categoreis
