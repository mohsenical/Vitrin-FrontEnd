"use client"

import React from 'react'
import { FaCheck } from "react-icons/fa6";


function Color({ bgColor, color, active }) {

    const clickandeler = () => {

        if (!color) {
            console.log("color: ", "white");
        } else {
            console.log("color: ", color);
        }

    }

    return (
        <div className='flex justify-start items-center gap-x-1 md:gap-x-0 px-2 md:px-0 border md:border-none border-gray-600 p-1 md:p-0 rounded-md cursor-pointer'>
            <div onClick={clickandeler} className={`${active ? "md:bg-white" : ""} flex justify-center items-center p-0 md:p-[2px] min-w-[15px] md:w-[30px] h-[15px] md:h-[30px] overflow-hidden border border-gray-400 rounded-full cursor-pointer`}>
                <div
                    className={`flex justify-center items-center w-full h-full border border-gray-300 rounded-full`}
                    style={bgColor ? { backgroundColor: bgColor } : { backgroundColor: "white" }}
                >
                    {
                        active ? (<FaCheck className='text-[12px]' />) : (<></>)
                    }
                </div>

            </div >

            <span className='md:hidden text-[10px] text-gray-800'>{color}</span>
        </div>
    )
}

export default Color
