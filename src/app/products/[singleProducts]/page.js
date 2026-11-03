import React from 'react'

import Footer from "@/components/modules/Footer";
import FooterMobile from "@/components/modules/FooterMobile";
import TopBar from "@/components/modules/TopBar";

import HeaderProduct from '@/components/templates/singleProduct/HeaderProduct';
import ImagesProduct from '@/components/templates/singleProduct/ImagesProduct';
import AddToBasket from '@/components/templates/singleProduct/AddToBasket';
import DetailsHeader from '@/components/templates/singleProduct/DetailsHeader';
import DetailsCard from '@/components/templates/singleProduct/DetailsCard';
import SingleProductsContarct from '@/components/modules/SingleProductsContarct';
import Sellers from '@/components/templates/singleProduct/Sellers';
import MenuProductDetails from '@/components/templates/singleProduct/MenuProductDetails';
import DetailsProduct from '@/components/templates/singleProduct/DetailsProduct';
import MiniCard from '@/components/templates/singleProduct/MiniCard';
import Proposal from '@/components/modules/Proposal';
import Offer from '@/components/templates/index/Offer';

export const metadata = {
    title: "محصول واحد با ID #14568",
}


function index() {
    return (
        <div>
            <TopBar />
            <div className='w-full sm:px-2 sm:my-2'>
                <HeaderProduct />

                {/* Body */}
                <div className='flex flex-col md:flex-row justify-between px-0 sm:px-1 gap-x-3 w-full'>
                    <ImagesProduct />

                    {/* Details & Add to basket */}
                    <div className='flex flex-col justify-between items-center md:w-[65%] w-full h-full bg-red-200 md:bg-white '>
                        <DetailsHeader />

                        <div className='flex justify-between gap-x-2 w-full relative'>
                            <DetailsCard />
                            <AddToBasket />
                        </div>
                    </div>
                </div >

                {/* Contract  */}
                <div className='hidden sm:grid grid-cols-5 w-full px-2 my-2 *:flex *:justify-center *:items-center *:gap-x-0.5 grayscale-100 opacity-50'>
                    <SingleProductsContarct image="days-return.svg" sectiontitle="هفت روز زمانت بازگشت کالا" />
                    <SingleProductsContarct image="express-delivery.svg" sectiontitle="امکان تحویل اکسپرس" />
                    <SingleProductsContarct image="cash-on-delivery.svg" sectiontitle="هفت روز زمانت بازگشت کالا" />
                    <SingleProductsContarct image="original-products.svg" sectiontitle="زمانت اصل بودن کالا" />
                    <SingleProductsContarct image="support.svg" sectiontitle="امکان پرداخت درب محل" />
                </div>

                <div className='w-full border-2 border-gray-200 my-0 md:my-2'></div>

                <Sellers />

                <MenuProductDetails />

                <div className='flex w-full gap-x-2 px-2'>
                    <DetailsProduct />

                    <MiniCard />
                </div>

                <div className='w-[90%] mx-auto'>
                    <Offer />
                    <Proposal sectiontitle="کالاهای مشابه" />
                </div>
            </div >

            <Footer />
            <FooterMobile />
        </div>
    )
}

export default index


