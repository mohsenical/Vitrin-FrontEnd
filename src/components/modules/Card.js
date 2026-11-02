import Link from 'next/link'
import React from 'react'

import { IoMdStar } from "react-icons/io";


function Card({ image, alt }) {
    return (
        <Link href="/products/react">
            <div className="flex flex-col min-h-60 justify-center gap-y-2 p-1 shadow-sm shadow-black/30 hover:shadow-md hover:shadow-black/50 transition-all">
                <span className="text-[9px] text-red-600">فروش ویژه</span>

                <div className="flex flex-col gap-y-2 justify-center items-center">
                    <img src={`/Images/Products/${image}`} alt={alt} className="w-[120px] h-[120px] object-contain object-center" />

                    <span className="text-[8px] text-gray-700 leading-3 ">کیت پنچرگیری لاستیک خودرو سیموند مدل YP-015 مجموعه 15 عددی</span>

                    <div className="flex justify-between items-center w-full">
                        <span className="w-[80%] text-[7px] text-red-600">تنها 2 عدد در انبار باقی مانده است</span>

                        <div className="flex justify-center items-center">
                            <span className="text-[8px] text-gray-700">4.5</span>
                            <IoMdStar className="text-yellow-600 text-[12px] mb-0.5" />
                        </div>
                    </div>


                    <div className="flex justify-between items-center w-full px-1">
                        <div className="bg-red-600 px-1 rounded-full ">
                            <span className="text-white text-[9px]">35%</span>
                        </div>

                        <div className="flex justify-center items-center gap-x-1">
                            <span className="text-[9px] text-gray-600">1,200,000</span>
                            <span className="text-[7px] text-rose-500">تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
