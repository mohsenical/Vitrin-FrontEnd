import Filter from '@/components/modules/Filter'
import React from 'react'

function Sidebar() {
    return (
        <div className='hidden md:inline-block w-[30%] sticky self-start top-20 border border-gray-300 rounded-md overflow-hidden'>
            <div className='flex justify-between items-center w-full p-3 border-b border-gray-300 shadow-md shadow-black/10'>
                <span className='text-[12px] font-bold'>فیلترها</span>

                <button className='text-[8px] text-white p-2 rounded-xl bg-gradient-to-t from-blue-800 to-blue-400 cursor-pointer'>حذف فیلترها</button>
            </div>

            <div className='w-full h-90 px-2 *:flex *:flex-1 *:justify-between *:items-center *:px-2 *:py-3 *:cursor-pointer divide-y-1 divide-gray-300 overflow-y-auto'>
                <Filter sectiontitle="قابلیت‌های مقاومتی" />
                <Filter sectiontitle="نگهداری" />
                <Filter sectiontitle="رنگ صفحه" />
                <Filter sectiontitle="نوع تابلو" />
                <Filter sectiontitle="زبان نوشتار" />
                <Filter sectiontitle="فرم طراحی" />
                <Filter sectiontitle="جنس محافظ" />
                <Filter sectiontitle="قابلیت‌های ویژه" />
                <Filter sectiontitle="قابلیت‌های مقاومتی" />
                <Filter sectiontitle="نگهداری" />
                <Filter sectiontitle="رنگ صفحه" />
                <Filter sectiontitle="نوع تابلو" />
                <Filter sectiontitle="زبان نوشتار" />
                <Filter sectiontitle="فرم طراحی" />
                <Filter sectiontitle="جنس محافظ" />
                <Filter sectiontitle="قابلیت‌های ویژه" />
                <Filter sectiontitle="قابلیت‌های مقاومتی" />
                <Filter sectiontitle="نگهداری" />
                <Filter sectiontitle="رنگ صفحه" />
                <Filter sectiontitle="نوع تابلو" />
                <Filter sectiontitle="زبان نوشتار" />
                <Filter sectiontitle="فرم طراحی" />
                <Filter sectiontitle="جنس محافظ" />
                <Filter sectiontitle="قابلیت‌های ویژه" />
            </div>
        </div>
    )
}

export default Sidebar
