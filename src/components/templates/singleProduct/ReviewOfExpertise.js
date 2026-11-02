"use client"

import React, { useState } from 'react'

import SectionHeaders from '@/components/modules/SectionHeaders'

import { IoIosArrowBack } from "react-icons/io";


function ReviewOfExpertise() {

    const [showText, setShowText] = useState(true)

    const showTextHandeler = () => {
        setShowText(!showText)
    }

    return (
        <div className='w-[100%] py-2'>
            <div className='w-full'>
                <SectionHeaders sectiontitle="برسی تخصصی" />


                <div className='w-full px-2'>
                    <span className={`text-[8px]  text-gray-600 ${showText ? "line-clamp-4 leading-4" : ""}`}> گوشی سامسونگ Galaxy A07 بازیگر جدید سامسونگ در بازار گوشی‌های اقتصادی است که تلاش می‌کند امکانات زیادی را در بازه قیمتی پایین ارائه دهد. این گوشی به پردازنده مدیاتک Helio G99 مجهز است و تجربه‌ای روان در اجرای برنامه‌های روزمره و بازي‌های سبک فراهم می‌کند. صفحه نمایش ۶.۷ اینچی از نوع LCD با وضوح HD+ و نرخ نوسازی ۹۰ هرتز تعادل خوبی میان وضوح تصویر و مصرف انرژی ارائه می‌دهد و در عین حال حرکت بین منوها و صفحات مختلف را نرم‌تر جلوه‌ می‌دهد. در بخش دوربین، Galaxy A07 یک ترکیب دوگانه ارائه می‌دهد. دوربین اصلی ۵۰ مگاپیکسلی با دیافراگم f/1.8 توانایی ثبت تصاویر واضح در شرایط نوری مناسب را دارد و دوربین دوم ۲ مگاپیکسلی نیز از نوع عمق‌سنج است. برای دوربین سلفی در این مدل، سامسونگ از یک سنسور ۸ مگاپیکسلی استفاده کرده است. باتری بزرگ ۵۰۰۰ میلی آمپر ساعتی این دستگاه نشان دهنده دوام بالای باتری در استفاده روزانه است و با پشتیبانی از شارژ سریع ۲۵ واتی، زمان مورد نیاز برای شارژ دستگاه را کاهش می‌دهد. برای بدنه، سامسونگ از ترکیبی سبک و در عین حال مقاوم استفاده کرده است. پوشش پشتی از پلیمر تقویت شده با فیبر شیشه ساخته شده و از استاندارد IP54 نیز پشتیبانی می‌کند تا گوشی تا حدودی در برابر پاشش آب و گردوغبار مقاوم باشد. این گوشی با سیستم عامل اندروید ۱۵ و با رابط کاربری One UI 7 عرضه شده است و سامسونگ وعده ارتقاء نرم افزاری و امنیتی را برای شش سال داده است. به طور کلی، Galaxy A07 به عنوان گزینه‌ای مقرون‌ به صرفه برای کسانی به شمار می‌رود که به دنبال تجربه‌ای روان با امکانات مناسب‌اند.  </span>

                    <div className='flex justify-start items-center w-full py-3'>
                        <button onClick={showTextHandeler} className={`flex justify-center items-center gap-x-1 text-[8px] font-bold text-blue-700 cursor-pointer`}>
                            <span>{showText ? "بیشتر" : "کمتر"}</span>
                            <IoIosArrowBack />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewOfExpertise

