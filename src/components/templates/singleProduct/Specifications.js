import React from 'react'

import SectionHeaders from '@/components/modules/SectionHeaders'


function Specifications() {
    return (
        <div className='w-full py-2'>
            <SectionHeaders sectiontitle="مشخصات" />

            <div className='flex justify-start md:justify-center items-center w-full py-0 md:py-2 '>

                <table className='w-full md:w-[80%] *:p-1'>
                    <tbody className=''>
                        <tr className='*:p-2 border-b md:border-none border-gray-300'>
                            <td className='w-[20%] gap-x-2 *:p-1 bg-gray-200 md:bg-white'>
                                <span className='text-[8px] text-gray-600'>وزن</span>
                            </td>
                            <td className='md:border-b w-[80%] md:border-gray-300'>
                                <span className='text-[8px] text-gray-700'>80 کیلو گرم</span>
                            </td>
                        </tr>

                        <tr className='*:p-2 border-b md:border-none border-gray-300'>
                            <td className='w-[20%] gap-x-2 *:p-1 bg-gray-200 md:bg-white'>
                                <span className='text-[8px] text-gray-600'>انداره</span>
                            </td>
                            <td className='md:border-b w-[80%] md:border-gray-300'>
                                <span className='text-[8px] text-gray-700'>80 سانتین متر</span>
                            </td>
                        </tr>

                        <tr className='*:p-2 border-b md:border-none border-gray-300'>
                            <td className='w-[20%] gap-x-2 *:p-1 bg-gray-200 md:bg-white'>
                                <span className='text-[8px] text-gray-600'>تعداد</span>
                            </td>
                            <td className='md:border-b w-[80%] md:border-gray-300'>
                                <span className='text-[8px] text-gray-700'>160 عدد</span>
                            </td>
                        </tr>
                    </tbody>



                </table>
            </div>
        </div>
    )
}

export default Specifications
