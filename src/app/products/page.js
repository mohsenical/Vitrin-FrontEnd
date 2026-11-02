import React from 'react'

import Sidebar from '@/components/templates/products/Sidebar';
import TopbarProducts from '@/components/templates/products/TopbarProducts';
import FilterProducts from '@/components/templates/products/FilterProducts';
import Proposal from '@/components/modules/Proposal';
import Footer from '@/components/modules/Footer';
import FooterMobile from '@/components/modules/FooterMobile';
import TopBar from '@/components/modules/TopBar';
import TopbarMobile from '@/components/templates/index/TopbarMobile';



function index() {
    return (
        <div>
            <TopBar />
            <TopbarMobile />


            <div className='flex flex-col justify-center items-center py-1 sm:p-2'>
                <div className='flex gap-x-1 w-full sm:w-[90%] md:w-[95%] px-1 sm:px-1 md:px-5 py-2 sm:py-0'>

                    <Sidebar />

                    {/* Body */}
                    <div className='flex flex-col gap-y-1 px-0 sm:px-1'>

                        {/* TopBar */}
                        <TopbarProducts />

                        {/* Products */}
                        <FilterProducts />

                    </div>
                </div>

                <div className='w-[90%] mx-auto'>
                    <Proposal sectiontitle="محصولات پیشنهادی" />
                </div>
            </div>


            <Footer />
            <FooterMobile />
        </div>
    )
}

export default index
