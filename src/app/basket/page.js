import React from 'react'

import Footer from "@/components/modules/Footer";
import FooterMobile from "@/components/modules/FooterMobile";
import TopBar from "@/components/modules/TopBar";

import FinalSubmission from '@/components/templates/basket/FinalSubmission';
import ProductsBasket from '@/components/templates/basket/ProductsBasket';
import Proposal from '@/components/modules/Proposal'
import FinalSubmissionMobile from '@/components/templates/basket/FinalSubmissionMobile';
import MobileHeaders from '@/components/templates/basket/MobileHeaders';


function index() {
    return (
        <div>
            <TopBar />

            {/* Header Section Mobile */}
            <MobileHeaders />

            <div className="flex flex-col justify-center items-center gap-y-1 w-full bg-white md:mt-2">
                <div className='flex flex-col sm:flex-row gap-x-1 w-full sm:w-[95%] md:w-[80%]'>

                    {/* Content */}
                    <ProductsBasket />

                    {/* Sidebar */}
                    <FinalSubmission />

                </div>

                <div className='w-full sm:*:w-[90%] md:*:w-[80%] flex justify-center items-center'>
                    <Proposal sectiontitle="بازدید های اخیر" />
                </div >
            </div >

            <FinalSubmissionMobile />


            <Footer />
            <FooterMobile />
        </div>
    )
}

export default index


