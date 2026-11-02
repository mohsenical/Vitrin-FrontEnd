"use client"

import React from 'react'
import { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";

function Accordion({ sectiontitle }) {

    const [showAccordion, setShowAccordion] = useState(false)

    const showAccordionHandeler = () => {
        setShowAccordion(!showAccordion)
    }

    return (
        <div className='flex flex-col px-3 bg-white rounded-md border border-gray-300 overflow-hidden mb-1' onClick={showAccordionHandeler}>
            <div className={`flex w-full justify-between items-center *:text-gray-700 cursor-pointer ${showAccordion ? "p-2 border-b border-gray-300 mb-1" : "p-1"}`}>
                <span className='text-[10px]'>{sectiontitle}</span>
                <IoIosArrowDown className={`text-[10px] transition-all ${showAccordion ? "rotate-180" : ""}`} />
            </div>

            <div className={`w-full ${showAccordion ? "" : "hidden"} `}>
                <span className='text-[8px] text-gray-500 leading-2 mt-2'>فروشگاه آنلاین ما با ارائه مجموعه‌ای متنوع از محصولات باکیفیت، تلاش می‌کند تجربه‌ای سریع، مطمئن و لذت‌بخش از خرید اینترنتی را برای شما فراهم کند. تمامی کالاها با دقت انتخاب شده‌اند تا از نظر کیفیت، اصالت و ارزش خرید، انتظارات شما را برآورده کنند. امکان بررسی مشخصات، مقایسه محصولات و ثبت سفارش تنها در چند دقیقه، خرید را ساده‌تر از همیشه کرده است. با ارسال سریع، پشتیبانی پاسخگو و تضمین اصالت کالا، می‌توانید با اطمینان خرید خود را انجام دهید. هدف ما ایجاد تجربه‌ای رضایت‌بخش برای مشتریان است؛ از لحظه انتخاب محصول تا زمان تحویل سفارش. همواره تلاش می‌کنیم با ارائه قیمت‌های مناسب، تنوع بالا و خدمات قابل اعتماد، خرید آنلاین را به تجربه‌ای آسان و مطمئن تبدیل کنیم. در فروشگاه ما، رضایت مشتری در اولویت قرار دارد. به همین دلیل، اطلاعات کامل هر محصول، تصاویر باکیفیت و مشخصات دقیق در اختیار شما قرار گرفته است تا بتوانید بهترین انتخاب را داشته باشید. ما معتقدیم خرید اینترنتی باید سریع، شفاف و بدون دغدغه باشد و همواره در مسیر بهبود خدمات و افزایش کیفیت تجربه کاربران گام برمی‌داریم.</span>
            </div>

        </div>
    )
}

export default Accordion
