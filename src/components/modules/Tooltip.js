import React from 'react'

function Tooltip({ sectiontitle, deck }) {
    return (
        <div className="relative flex flex-col justify-center items-start md:gap-y-2 gap-y-1 w-[100%] md:p-2 p-1 md:bg-mist-100 bg-white rounded-md border md:border-mist-100 border-gray-600 hover:border md:hover:border-gray-300 hover:*:inline-block transition-all cursor-pointer">
            <span className='text-[8px] text-gray-600'>{sectiontitle}</span>
            <span className='text-[8px] text-gray-800 leading-3 md:leading-none font-bold'>{deck}</span>

            <div className="hidden absolute p-1.5 rounded-sm bg-gray-900 -bottom-7 -right-0 md:-right-5 z-999 ">
                <span className="text-[8px] my-auto text-gray-300">{deck}</span>
            </div>
        </div>
    )
}

export default Tooltip
